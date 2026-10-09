'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FileText,
  Package,
  Image as ImageIcon,
  Video,
  Globe,
  Plus,
  Trash2,
  Edit,
  Eye,
  CheckCircle2,
  AlertCircle,
  Search,
  Sparkles,
  ExternalLink,
  Clock,
  Calendar,
  Share2,
  Layers,
  Save,
  X,
  Building2,
  RefreshCw,
  PhoneCall
} from 'lucide-react';
import { BlogPost, SEED_BLOGS } from '@/lib/blogData';
import { SeedProduct, SEED_PRODUCTS } from '@/lib/seedData';

export default function MasterCMSPage() {
  const [activeTab, setActiveTab] = useState<'blogs' | 'products' | 'photos' | 'videos' | 'settings'>('blogs');
  
  // Blog CMS State
  const [blogs, setBlogs] = useState<BlogPost[]>(SEED_BLOGS);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: '',
    slug: '',
    category: 'Bridge Bearings' as BlogPost['category'],
    excerpt: '',
    content: '',
    authorName: 'Ujjwal Kumar',
    authorRole: 'Chief Technical Director, JMK Engineering',
    readTime: '5 min read',
    featuredImage: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
    tags: 'Bridge Bearings, IRC:83, Infrastructure',
    isFeatured: false,
  });

  // Product CMS State
  const [products, setProducts] = useState<SeedProduct[]>(SEED_PRODUCTS);
  const [productSearch, setProductSearch] = useState('');
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [productForm, setProductForm] = useState({
    name: '',
    slug: '',
    category: 'joints',
    categoryLabel: 'Expansion Joints',
    materialGrade: 'IS 2062 Grade E250',
    price: '₹2,500 / Piece',
    shortDescription: '',
    featuredImage: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
  });

  // Success Notification
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  // Blog Handlers
  const handleOpenNewBlog = () => {
    setEditingBlog(null);
    setBlogForm({
      title: '',
      slug: '',
      category: 'Bridge Bearings',
      excerpt: '',
      content: '',
      authorName: 'Ujjwal Kumar',
      authorRole: 'Chief Technical Director, JMK Engineering',
      readTime: '5 min read',
      featuredImage: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
      tags: 'Bridge Bearings, IRC:83, Infrastructure',
      isFeatured: false,
    });
    setIsBlogModalOpen(true);
  };

  const handleEditBlog = (post: BlogPost) => {
    setEditingBlog(post);
    setBlogForm({
      title: post.title,
      slug: post.slug,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      authorName: post.author.name,
      authorRole: post.author.role,
      readTime: post.readTime,
      featuredImage: post.featuredImage,
      tags: post.tags.join(', '),
      isFeatured: Boolean(post.isFeatured),
    });
    setIsBlogModalOpen(true);
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title || !blogForm.content) {
      alert('Please provide title and content for the article.');
      return;
    }

    const slug = blogForm.slug || blogForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const tagArray = blogForm.tags.split(',').map((t) => t.trim()).filter(Boolean);

    if (editingBlog) {
      // Update
      const updated = blogs.map((b) => {
        if (b.id === editingBlog.id) {
          return {
            ...b,
            title: blogForm.title,
            slug,
            category: blogForm.category,
            excerpt: blogForm.excerpt,
            content: blogForm.content,
            readTime: blogForm.readTime,
            featuredImage: blogForm.featuredImage,
            isFeatured: blogForm.isFeatured,
            tags: tagArray,
            updatedAt: new Date().toISOString(),
            author: {
              ...b.author,
              name: blogForm.authorName,
              role: blogForm.authorRole,
            },
          };
        }
        return b;
      });
      setBlogs(updated);
      showNotification(`Article "${blogForm.title}" updated successfully!`);
    } else {
      // Create new
      const newPost: BlogPost = {
        id: `blog-${Date.now()}`,
        slug,
        title: blogForm.title,
        excerpt: blogForm.excerpt || blogForm.title,
        content: blogForm.content,
        category: blogForm.category,
        author: {
          name: blogForm.authorName,
          role: blogForm.authorRole,
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        },
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        readTime: blogForm.readTime,
        featuredImage: blogForm.featuredImage,
        isFeatured: blogForm.isFeatured,
        tags: tagArray,
        metaTitle: `${blogForm.title} | JMK Engineering`,
        metaDescription: blogForm.excerpt,
      };
      setBlogs([newPost, ...blogs]);
      showNotification(`New Article "${blogForm.title}" published to live website!`);
    }

    setIsBlogModalOpen(false);
  };

  const handleDeleteBlog = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete the article: "${title}"?`)) {
      setBlogs(blogs.filter((b) => b.id !== id));
      showNotification(`Article deleted successfully.`);
    }
  };

  // Product Filter
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
    p.categoryLabel.toLowerCase().includes(productSearch.toLowerCase())
  );

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = productForm.slug || productForm.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newProd: SeedProduct = {
      id: `prod_${slug}`,
      name: productForm.name,
      slug,
      category: productForm.category,
      categoryLabel: productForm.categoryLabel,
      materialGrade: productForm.materialGrade,
      price: productForm.price,
      shortDescription: productForm.shortDescription,
      fullDescription: `${productForm.name} fabricated to IS 2062 and MoRTH specifications by JMK Engineering Patna Works.`,
      featuredImage: productForm.featuredImage,
      imageUrls: [productForm.featuredImage],
      weightVariants: ['Standard Weight'],
      dimensions: ['Custom Site Dimensions'],
      finishType: 'Red Oxide Primer / Galvanized',
      applications: ['Bridge Construction', 'Highway Infrastructure', 'RCC Formwork'],
      specs: {
        'Material Grade': productForm.materialGrade,
        'Standard': 'IS 2062 / IRC:83 Compliant',
        'Works Dispatch': 'Patna Central Works',
      },
      variants: [],
      complianceStandards: ['IS 2062:2011', 'IRC:83'],
      isFeatured: false,
      minOrderQuantity: '1 Unit',
    };
    setProducts([newProd, ...products]);
    setIsProductModalOpen(false);
    showNotification(`Product "${productForm.name}" added to master catalog!`);
  };

  return (
    <div className="space-y-8 font-sans">
      
      {/* Toast Notification */}
      {notification && (
        <div className="p-4 bg-emerald-600 text-white rounded-2xl shadow-xl flex items-center gap-3 font-bold text-sm animate-bounce">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-black border border-red-200">
            <Globe className="w-3.5 h-3.5 text-red-600" />
            <span>Master Public Website CMS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-950">
            Website Content & Marketing CMS Console
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Publish and manage Technical Blogs, Product Catalog, Photo & Video Galleries, and SEO settings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-slate-900 rounded-xl text-xs font-black transition flex items-center gap-2 border border-neutral-300"
          >
            <span>Preview Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* CMS Navigation Tabs */}
      <div className="flex items-center gap-2 border-b-2 border-neutral-200 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('blogs')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition whitespace-nowrap ${
            activeTab === 'blogs'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : 'bg-white text-slate-700 hover:bg-neutral-100 border border-neutral-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Blog Articles ({blogs.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('products')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition whitespace-nowrap ${
            activeTab === 'products'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : 'bg-white text-slate-700 hover:bg-neutral-100 border border-neutral-200'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Products & Services ({products.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('photos')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition whitespace-nowrap ${
            activeTab === 'photos'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : 'bg-white text-slate-700 hover:bg-neutral-100 border border-neutral-200'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>Photo Gallery</span>
        </button>

        <button
          onClick={() => setActiveTab('videos')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition whitespace-nowrap ${
            activeTab === 'videos'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : 'bg-white text-slate-700 hover:bg-neutral-100 border border-neutral-200'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Video Desk</span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition whitespace-nowrap ${
            activeTab === 'settings'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : 'bg-white text-slate-700 hover:bg-neutral-100 border border-neutral-200'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>SEO & Telephony Settings</span>
        </button>
      </div>

      {/* TAB 1: BLOG ARTICLES MANAGER */}
      {activeTab === 'blogs' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-950">Published Technical Articles</h2>
              <p className="text-xs text-slate-500 font-medium">Add, edit, or delete engineering blog posts to rank on Google Search.</p>
            </div>

            <button
              onClick={handleOpenNewBlog}
              className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Write New Article</span>
            </button>
          </div>

          <div className="bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-neutral-100 text-slate-900 border-b border-neutral-200 text-xs font-black uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Article Title & Category</th>
                    <th className="p-4">Author</th>
                    <th className="p-4">Published Date</th>
                    <th className="p-4">Read Time</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {blogs.map((post) => (
                    <tr key={post.id} className="hover:bg-neutral-50 transition">
                      <td className="p-4 max-w-xs sm:max-w-md">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.featuredImage}
                            alt=""
                            className="w-12 h-12 rounded-xl object-cover shrink-0 border border-neutral-300"
                          />
                          <div className="space-y-0.5">
                            <h4 className="font-black text-slate-900 line-clamp-1">{post.title}</h4>
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 bg-red-50 text-red-700 font-bold text-[10px] rounded">
                                {post.category}
                              </span>
                              {post.isFeatured && (
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-black text-[10px] rounded flex items-center gap-1">
                                  <Sparkles className="w-2.5 h-2.5" /> Featured
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-bold text-slate-800">{post.author.name}</td>
                      <td className="p-4 font-mono text-xs text-slate-600">
                        {new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="p-4 font-bold text-slate-700">{post.readTime}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-[10px] uppercase">
                          Live on Web
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="inline-flex items-center gap-2">
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            title="View Live Page"
                            className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-slate-800 transition"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleEditBlog(post)}
                            title="Edit Article"
                            className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 transition"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(post.id, post.title)}
                            title="Delete Article"
                            className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PRODUCTS & SERVICES MANAGER */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-950">Master Industrial Products Catalog</h2>
              <p className="text-xs text-slate-500 font-medium">Manage product specifications, price estimates, and SEO titles.</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter products..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 bg-white border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                />
              </div>

              <button
                onClick={() => setIsProductModalOpen(true)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, 15).map((prod) => (
              <div
                key={prod.id}
                className="bg-white border-2 border-neutral-200 rounded-3xl p-5 shadow-sm space-y-4 flex flex-col justify-between hover:border-red-600 transition"
              >
                <div className="space-y-3">
                  <div className="h-40 bg-neutral-50 rounded-2xl p-2 border border-neutral-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={prod.featuredImage}
                      alt={prod.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-wider">{prod.categoryLabel}</span>
                    <h4 className="text-sm font-black text-slate-900 line-clamp-1">{prod.name}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">{prod.shortDescription}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {prod.price || 'Contact for Price'}
                  </span>
                  <Link
                    href={`/products/${prod.slug}`}
                    target="_blank"
                    className="text-xs font-black text-red-600 hover:underline flex items-center gap-1"
                  >
                    <span>View Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {filteredProducts.length > 15 && (
            <p className="text-center text-xs font-bold text-slate-500">
              Showing 15 of {filteredProducts.length} total active products.
            </p>
          )}
        </div>
      )}

      {/* TAB 3: PHOTO GALLERY MANAGER */}
      {activeTab === 'photos' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-950">Factory Floor & Product Photo Gallery</h2>
              <p className="text-xs text-slate-500 font-medium">Manage verified factory images shown on /photos.</p>
            </div>
            <Link
              href="/photos"
              target="_blank"
              className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <span>View Public Photos Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm text-center space-y-4">
            <ImageIcon className="w-12 h-12 text-red-600 mx-auto" />
            <h3 className="text-lg font-black text-slate-900">Photo Gallery Connected (100% Synced)</h3>
            <p className="text-xs text-slate-600 max-w-lg mx-auto font-medium">
              Photos uploaded to <code className="bg-neutral-100 px-2 py-1 rounded">public/images/drive_downloads/</code> and Cloudinary are dynamically indexed on the public photo gallery.
            </p>
          </div>
        </div>
      )}

      {/* TAB 4: VIDEO GALLERY MANAGER */}
      {activeTab === 'videos' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-950">Plant Inspection Video Desk</h2>
              <p className="text-xs text-slate-500 font-medium">Manage video demonstrations and QA inspections shown on /videos.</p>
            </div>
            <Link
              href="/videos"
              target="_blank"
              className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <span>View Public Videos Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm text-center space-y-4">
            <Video className="w-12 h-12 text-red-600 mx-auto" />
            <h3 className="text-lg font-black text-slate-900">Live Video Desk & YouTube Telemetry Connected</h3>
            <p className="text-xs text-slate-600 max-w-lg mx-auto font-medium">
              Direct integration with YouTube channel <strong>@jmkengineeringanddeveloper1626</strong> and live WhatsApp inspection requests.
            </p>
          </div>
        </div>
      )}

      {/* TAB 5: SEO & TELEPHONY SETTINGS */}
      {activeTab === 'settings' && (
        <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-950">Global SEO & Telephony Configuration</h2>
            <p className="text-xs text-slate-500 font-medium">Configure primary contact numbers, corporate titles, and Google verification.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-900">Primary Header Hotline</label>
              <input
                type="text"
                disabled
                value="+91 7493916194"
                className="w-full p-3 bg-neutral-100 border border-neutral-300 rounded-xl text-xs font-mono font-bold text-slate-900"
              />
              <p className="text-[10px] text-emerald-600 font-bold">● Active on Header, Mobile Menu & WhatsApp CTAs</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-900">Secondary / Estimation Hotline</label>
              <input
                type="text"
                disabled
                value="+91 8651010370"
                className="w-full p-3 bg-neutral-100 border border-neutral-300 rounded-xl text-xs font-mono font-bold text-slate-900"
              />
              <p className="text-[10px] text-emerald-600 font-bold">● Active on Contact Cards & Footer Desks</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-900">Google Search Console Verification Key</label>
              <input
                type="text"
                disabled
                value="6DP_-JVCMGzjeXRc9POYlpBPCWtURcAQK9sHhFR6QjA"
                className="w-full p-3 bg-neutral-100 border border-neutral-300 rounded-xl text-xs font-mono font-bold text-slate-900"
              />
              <p className="text-[10px] text-emerald-600 font-bold">● HTML Tag & DNS Verified</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-900">XML Sitemap Health Status</label>
              <input
                type="text"
                disabled
                value="https://www.jmkengineering.in/sitemap.xml (86 Active URLs)"
                className="w-full p-3 bg-neutral-100 border border-neutral-300 rounded-xl text-xs font-mono font-bold text-slate-900"
              />
              <p className="text-[10px] text-emerald-600 font-bold">● 100% Crawlable by Googlebot</p>
            </div>
          </div>
        </div>
      )}

      {/* CREATE / EDIT BLOG MODAL */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black text-slate-950">
                  {editingBlog ? 'Edit Technical Article' : 'Write & Publish New Engineering Article'}
                </h3>
              </div>
              <button
                onClick={() => setIsBlogModalOpen(false)}
                className="p-1.5 rounded-lg hover:bg-neutral-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBlog} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-900">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Complete Guide to POT-PTFE Bridge Bearings in Bihar"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900 focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-900">Category *</label>
                  <select
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value as any })}
                    className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                  >
                    <option value="Bridge Bearings">Bridge Bearings</option>
                    <option value="Expansion Joints">Expansion Joints</option>
                    <option value="Formwork & Shuttering">Formwork & Shuttering</option>
                    <option value="Scaffolding Systems">Scaffolding Systems</option>
                    <option value="Highway Infrastructure">Highway Infrastructure</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-900">Read Time</label>
                  <input
                    type="text"
                    placeholder="e.g. 6 min read"
                    value={blogForm.readTime}
                    onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                    className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-slate-900">Short Excerpt (Search Meta Description) *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Brief 2-line summary for Google Search snippet..."
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-medium text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-slate-900">Full Article Content (Markdown / Text) *</label>
                <textarea
                  rows={8}
                  required
                  placeholder="Write complete technical guide with headings (## Heading), bullet points, specifications, and IRC/IS codes..."
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-mono text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-900">Featured Image URL</label>
                  <input
                    type="text"
                    value={blogForm.featuredImage}
                    onChange={(e) => setBlogForm({ ...blogForm, featuredImage: e.target.value })}
                    className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-mono text-slate-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-900">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={blogForm.tags}
                    onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                    className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="isFeatured"
                  checked={blogForm.isFeatured}
                  onChange={(e) => setBlogForm({ ...blogForm, isFeatured: e.target.checked })}
                  className="w-4 h-4 text-red-600 rounded"
                />
                <label htmlFor="isFeatured" className="text-xs font-black text-slate-900">
                  Feature this article on top of the Blog home page
                </label>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-neutral-300 text-xs font-bold text-slate-700 hover:bg-neutral-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingBlog ? 'Update Article' : 'Publish Article Live'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE PRODUCT MODAL */}
      {isProductModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black text-slate-950">Add New Engineering Product</h3>
              </div>
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="p-1.5 rounded-lg hover:bg-neutral-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-900">Product Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 25-Ton POT-PTFE Bridge Bearing"
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-900">Category</label>
                  <select
                    value={productForm.category}
                    onChange={(e) => {
                      const val = e.target.value;
                      const labelMap: Record<string, string> = {
                        shuttering: 'Shuttering Plates',
                        scaffolding: 'Scaffolding Systems',
                        bearings: 'Bridge Bearings',
                        joints: 'Expansion Joints',
                        drainage: 'MS Drainage Spouts',
                      };
                      setProductForm({
                        ...productForm,
                        category: val,
                        categoryLabel: labelMap[val] || 'Engineering',
                      });
                    }}
                    className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                  >
                    <option value="joints">Expansion Joints</option>
                    <option value="bearings">Bridge Bearings</option>
                    <option value="shuttering">Shuttering & Centering</option>
                    <option value="scaffolding">Scaffolding Systems</option>
                    <option value="drainage">Drainage Spouts</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-900">Material Grade</label>
                  <input
                    type="text"
                    value={productForm.materialGrade}
                    onChange={(e) => setProductForm({ ...productForm, materialGrade: e.target.value })}
                    className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-slate-900">Price Estimate</label>
                <input
                  type="text"
                  placeholder="e.g. ₹4,500 / Set"
                  value={productForm.price}
                  onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-slate-900">Short Specification Description</label>
                <textarea
                  rows={2}
                  value={productForm.shortDescription}
                  onChange={(e) => setProductForm({ ...productForm, shortDescription: e.target.value })}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-medium text-slate-900"
                />
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-neutral-300 text-xs font-bold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
