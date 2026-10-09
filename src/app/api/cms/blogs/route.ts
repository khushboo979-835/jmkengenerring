import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Blog } from '@/models/Blog';
import { SEED_BLOGS, BlogPost } from '@/lib/blogData';
import fs from 'fs';
import path from 'path';

// Primary & Temporary writable paths for Vercel/Serverless
const PRIMARY_DATA_FILE = path.join(process.cwd(), 'src/data/cms_blogs.json');
const TMP_DATA_FILE = '/tmp/cms_blogs.json';

function readStoredBlogs(): BlogPost[] | null {
  try {
    if (fs.existsSync(TMP_DATA_FILE)) {
      const data = fs.readFileSync(TMP_DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
    if (fs.existsSync(PRIMARY_DATA_FILE)) {
      const data = fs.readFileSync(PRIMARY_DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading stored blogs:', e);
  }
  return null;
}

function writeStoredBlogs(blogs: BlogPost[]) {
  try {
    const dir = path.dirname(PRIMARY_DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(PRIMARY_DATA_FILE, JSON.stringify(blogs, null, 2), 'utf8');
  } catch {
    // Primary might be read-only in serverless
  }

  try {
    fs.writeFileSync(TMP_DATA_FILE, JSON.stringify(blogs, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing tmp blogs file:', e);
  }
}

// Global runtime memory
let memoryBlogs: BlogPost[] = readStoredBlogs() ?? [...SEED_BLOGS];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const slug = searchParams.get('slug');

    const db = await connectToDatabase();
    if (db) {
      if (slug) {
        const blogDoc = await Blog.findOne({ slug });
        if (blogDoc) return NextResponse.json({ success: true, blog: blogDoc });
      } else {
        let query: any = {};
        if (category && category !== 'all' && category !== 'All') {
          query.category = { $regex: new RegExp(`^${category}$`, 'i') };
        }
        const blogs = await Blog.find(query).sort({ publishedAt: -1 });
        return NextResponse.json({ success: true, blogs });
      }
    }

    const stored = readStoredBlogs();
    if (stored !== null) {
      memoryBlogs = stored;
    }

    if (slug) {
      const blog = memoryBlogs.find((b) => b.slug === slug);
      if (!blog) {
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, blog });
    }

    let result = memoryBlogs;
    if (category && category !== 'all' && category !== 'All') {
      result = result.filter((b) => b.category.toLowerCase() === category.toLowerCase());
    }

    return NextResponse.json({ success: true, blogs: result });
  } catch (error: any) {
    console.error('GET /api/cms/blogs error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check if this is a full sync from client CMS
    if (body.syncAll && Array.isArray(body.blogs)) {
      memoryBlogs = body.blogs;
      writeStoredBlogs(body.blogs);

      const db = await connectToDatabase();
      if (db) {
        try {
          await Blog.deleteMany({});
          if (body.blogs.length > 0) {
            await Blog.insertMany(body.blogs.map((b: any) => ({
              ...b,
              publishedAt: new Date(b.publishedAt || Date.now()),
            })));
          }
        } catch (err) {
          console.error('MongoDB sync error:', err);
        }
      }

      return NextResponse.json({ success: true, message: 'Synced successfully', count: memoryBlogs.length });
    }

    const {
      title,
      slug,
      excerpt,
      content,
      category,
      authorName,
      authorRole,
      readTime,
      featuredImage,
      tags,
      isFeatured,
      relatedProductSlug,
    } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const generatedSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const tagArray = Array.isArray(tags) ? tags : (tags ? tags.split(',').map((t: string) => t.trim()) : ['Infrastructure', 'JMK Engineering']);

    const newBlog: BlogPost = {
      id: `blog-${Date.now()}`,
      slug: generatedSlug,
      title,
      excerpt: excerpt || title,
      content,
      category: category || 'Formwork & Shuttering',
      author: {
        name: authorName || 'Er. Ujjwal Kumar',
        role: authorRole || 'Chief Technical Director, JMK Engineering',
      },
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      readTime: readTime || '5 min read',
      featuredImage: featuredImage || 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212537/OO/SD/EE/146888318/strip-seal-expansion-joint-500x500.jpg',
      isFeatured: Boolean(isFeatured),
      tags: tagArray,
      relatedProductSlug,
      metaTitle: `${title} | JMK Engineering`,
      metaDescription: excerpt || `${title} technical guide from JMK Engineering Patna.`,
    };

    const currentList = readStoredBlogs() ?? memoryBlogs;
    const updated = [newBlog, ...currentList.filter(b => b.slug !== generatedSlug)];
    memoryBlogs = updated;
    writeStoredBlogs(updated);

    const db = await connectToDatabase();
    if (db) {
      try {
        await Blog.create({
          ...newBlog,
          publishedAt: new Date(newBlog.publishedAt),
        });
      } catch (err) {
        console.error('MongoDB Blog.create error:', err);
      }
    }

    return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
  } catch (error: any) {
    console.error('POST /api/cms/blogs error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      id,
      title,
      slug,
      excerpt,
      content,
      category,
      authorName,
      authorRole,
      readTime,
      featuredImage,
      tags,
      isFeatured,
    } = body;

    const currentList = readStoredBlogs() ?? memoryBlogs;
    const updated = currentList.map((b) => {
      if (b.id === id || b.slug === slug) {
        return {
          ...b,
          title: title || b.title,
          slug: slug || b.slug,
          excerpt: excerpt || b.excerpt,
          content: content || b.content,
          category: category || b.category,
          readTime: readTime || b.readTime,
          featuredImage: featuredImage || b.featuredImage,
          isFeatured: isFeatured !== undefined ? Boolean(isFeatured) : b.isFeatured,
          tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map((t: string) => t.trim()) : b.tags),
          updatedAt: new Date().toISOString(),
          author: {
            ...b.author,
            name: authorName || b.author.name,
            role: authorRole || b.author.role,
          },
        };
      }
      return b;
    });

    memoryBlogs = updated;
    writeStoredBlogs(updated);

    const db = await connectToDatabase();
    if (db) {
      try {
        await Blog.findOneAndUpdate(
          { $or: [{ slug }, { id }] },
          {
            title,
            slug,
            excerpt,
            content,
            category,
            author: { name: authorName, role: authorRole },
            readTime,
            featuredImage,
            isFeatured: Boolean(isFeatured),
            tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map((t: string) => t.trim()) : []),
            updatedAt: new Date(),
          },
          { new: true }
        );
      } catch (err) {
        console.error('MongoDB Blog update error:', err);
      }
    }

    return NextResponse.json({ success: true, blogs: updated });
  } catch (error: any) {
    console.error('PUT /api/cms/blogs error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');

    if (!id && !slug) {
      return NextResponse.json({ error: 'id or slug is required' }, { status: 400 });
    }

    const currentList = readStoredBlogs() ?? memoryBlogs;
    const updated = currentList.filter((b) => b.id !== id && b.slug !== slug && b.slug !== id);
    memoryBlogs = updated;
    writeStoredBlogs(updated);

    const db = await connectToDatabase();
    if (db) {
      try {
        if (id) await Blog.findOneAndDelete({ $or: [{ id }, { slug: id }] });
        if (slug) await Blog.findOneAndDelete({ slug });
      } catch (err) {
        console.error('MongoDB Blog delete error:', err);
      }
    }

    return NextResponse.json({ success: true, message: 'Article deleted permanently', remaining: updated.length });
  } catch (error: any) {
    console.error('DELETE /api/cms/blogs error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
