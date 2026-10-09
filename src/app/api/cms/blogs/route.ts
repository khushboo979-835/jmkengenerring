import { NextRequest, NextResponse } from 'next/server';
import { SEED_BLOGS, BlogPost } from '@/lib/blogData';

// Memory store initialized with seed blogs
let memoryBlogs: BlogPost[] = [...SEED_BLOGS];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const slug = searchParams.get('slug');

    if (slug) {
      const blog = memoryBlogs.find((b) => b.slug === slug);
      if (!blog) {
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, blog });
    }

    let result = memoryBlogs;
    if (category && category !== 'all') {
      result = result.filter((b) => b.category.toLowerCase() === category.toLowerCase());
    }

    return NextResponse.json({ success: true, blogs: result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, excerpt, content, category, authorName, authorRole, readTime, featuredImage, tags, isFeatured } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const generatedSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const newBlog: BlogPost = {
      id: `blog-${Date.now()}`,
      slug: generatedSlug,
      title,
      excerpt: excerpt || title,
      content,
      category: category || 'Formwork & Shuttering',
      author: {
        name: authorName || 'JMK Technical Bureau',
        role: authorRole || 'Senior Infrastructure Engineer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      },
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      readTime: readTime || '5 min read',
      featuredImage: featuredImage || 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
      isFeatured: Boolean(isFeatured),
      tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map((t: string) => t.trim()) : ['Infrastructure', 'JMK Engineering']),
      metaTitle: `${title} | JMK Engineering`,
      metaDescription: excerpt || `${title} technical guide from JMK Engineering Patna.`,
    };

    // Prepend to array
    memoryBlogs.unshift(newBlog);

    return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, slug, excerpt, content, category, authorName, authorRole, readTime, featuredImage, tags, isFeatured } = body;

    const index = memoryBlogs.findIndex((b) => b.id === id || b.slug === slug);
    if (index === -1) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    memoryBlogs[index] = {
      ...memoryBlogs[index],
      title: title || memoryBlogs[index].title,
      slug: slug || memoryBlogs[index].slug,
      excerpt: excerpt || memoryBlogs[index].excerpt,
      content: content || memoryBlogs[index].content,
      category: category || memoryBlogs[index].category,
      readTime: readTime || memoryBlogs[index].readTime,
      featuredImage: featuredImage || memoryBlogs[index].featuredImage,
      isFeatured: isFeatured !== undefined ? Boolean(isFeatured) : memoryBlogs[index].isFeatured,
      tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map((t: string) => t.trim()) : memoryBlogs[index].tags),
      updatedAt: new Date().toISOString(),
      author: {
        ...memoryBlogs[index].author,
        name: authorName || memoryBlogs[index].author.name,
        role: authorRole || memoryBlogs[index].author.role,
      },
    };

    return NextResponse.json({ success: true, blog: memoryBlogs[index] });
  } catch (error: any) {
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

    memoryBlogs = memoryBlogs.filter((b) => b.id !== id && b.slug !== slug);

    return NextResponse.json({ success: true, message: 'Article deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
