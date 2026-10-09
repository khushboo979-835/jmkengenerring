import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Blog } from '@/models/Blog';
import { SEED_BLOGS, BlogPost } from '@/lib/blogData';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src/data/cms_blogs.json');

// Helper to read local file
function readLocalBlogs(): BlogPost[] | null {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading local blogs file:', e);
  }
  return null;
}

// Helper to write local file
function writeLocalBlogs(blogs: BlogPost[]) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(blogs, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing local blogs file:', e);
  }
}

// In-memory runtime cache initialized once
let memoryBlogs: BlogPost[] = readLocalBlogs() ?? [...SEED_BLOGS];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const slug = searchParams.get('slug');

    const db = await connectToDatabase();
    if (db) {
      // MongoDB connected
      if (slug) {
        const blogDoc = await Blog.findOne({ slug });
        if (!blogDoc) {
          return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, blog: blogDoc });
      }

      const count = await Blog.countDocuments();
      // Only seed once if database has never been initialized
      if (count === 0 && !fs.existsSync(DATA_FILE)) {
        await Blog.insertMany(SEED_BLOGS.map(b => ({
          ...b,
          publishedAt: new Date(b.publishedAt),
        })));
      }

      let query: any = {};
      if (category && category !== 'all' && category !== 'All') {
        query.category = { $regex: new RegExp(`^${category}$`, 'i') };
      }

      const blogs = await Blog.find(query).sort({ publishedAt: -1 });
      return NextResponse.json({ success: true, blogs });
    }

    // Fallback: Local file / memory store
    const local = readLocalBlogs();
    if (local !== null) {
      memoryBlogs = local;
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

    const db = await connectToDatabase();
    if (db) {
      try {
        await Blog.create({
          ...newBlog,
          publishedAt: new Date(newBlog.publishedAt),
        });
      } catch (err: any) {
        console.error('MongoDB Blog.create error:', err);
      }
    }

    // Update memory & local JSON file
    const local = readLocalBlogs() ?? memoryBlogs;
    const updated = [newBlog, ...local.filter(b => b.slug !== generatedSlug)];
    memoryBlogs = updated;
    writeLocalBlogs(updated);

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

    const local = readLocalBlogs() ?? memoryBlogs;
    const updated = local.map((b) => {
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
    writeLocalBlogs(updated);

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

    const db = await connectToDatabase();
    if (db) {
      try {
        if (id) await Blog.findOneAndDelete({ $or: [{ id }, { slug: id }] });
        if (slug) await Blog.findOneAndDelete({ slug });
      } catch (err) {
        console.error('MongoDB Blog delete error:', err);
      }
    }

    const local = readLocalBlogs() ?? memoryBlogs;
    const updated = local.filter((b) => b.id !== id && b.slug !== slug && b.slug !== id);
    memoryBlogs = updated;
    writeLocalBlogs(updated);

    return NextResponse.json({ success: true, message: 'Article deleted permanently', remaining: updated.length });
  } catch (error: any) {
    console.error('DELETE /api/cms/blogs error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
