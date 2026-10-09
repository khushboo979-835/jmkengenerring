import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  status: 'published' | 'draft';
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: Date;
  updatedAt: Date;
  readTime: string;
  featuredImage: string;
  isFeatured: boolean;
  tags: string[];
  relatedProductSlug?: string;
  metaTitle: string;
  metaDescription: string;
}

const BlogSchema = new Schema<IBlog>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, enum: ['published', 'draft'], default: 'published' },
    author: {
      name: { type: String, required: true },
      role: { type: String, required: true },
      avatar: { type: String },
    },
    publishedAt: { type: Date, default: Date.now },
    readTime: { type: String, default: '5 min read' },
    featuredImage: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    tags: [{ type: String }],
    relatedProductSlug: { type: String },
    metaTitle: { type: String },
    metaDescription: { type: String },
  },
  { timestamps: true }
);

export const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
