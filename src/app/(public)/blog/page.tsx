import React from 'react';
import { getAllBlogs } from '@/lib/blogData';
import BlogListClient from '@/components/public/BlogListClient';

export default function BlogListingPage() {
  const blogs = getAllBlogs();
  return <BlogListClient initialPosts={blogs} />;
}
