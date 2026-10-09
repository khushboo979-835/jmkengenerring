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
  PhoneCall,
  Table,
  List,
  Heading,
  CheckSquare,
  EyeOff
} from 'lucide-react';
import { BlogPost, SEED_BLOGS } from '@/lib/blogData';
import { SeedProduct, SEED_PRODUCTS, INDIA_MART_GALLERY_PHOTOS, PhotoGalleryItem } from '@/lib/seedData';

export default function MasterCMSPage() {
  const [activeTab, setActiveTab] = useState<'blogs' | 'products' | 'photos' | 'videos' | 'settings'>('blogs');
  
  // Blog CMS State
  const [blogs, setBlogs] = useState<BlogPost[]>(SEED_BLOGS);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [previewMode, setPreviewMode] = useState<'editor' | 'preview'>('editor');
  const [blogForm, setBlogForm] = useState({
    title: '',
    slug: '',
    category: 'Bridge Bearings' as BlogPost['category'],
    excerpt: '',
    content: '',
    authorName: 'Er. Ujjwal Kumar',
    authorRole: 'Chief Technical Director, JMK Engineering',
    readTime: '6 min read',
    featuredImage: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212537/OO/SD/EE/146888318/strip-seal-expansion-joint-500x500.jpg',
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

  // Photo CMS State
  const [photos, setPhotos] = useState<PhotoGalleryItem[]>(INDIA_MART_GALLERY_PHOTOS);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [photoForm, setPhotoForm] = useState({
    title: '',
    category: 'Shuttering & Centering',
    price: '₹67 / Kg',
    moq: '50 Pcs',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476982681/BJ/ZU/VV/146888318/mild-steel-centering-plate-500x500.jpg',
    slug: '27-kg-iron-shuttering-plate',
  });

  // Video CMS State
  const [videos, setVideos] = useState([
    {
      id: 'vid_1',
      title: 'Heavy MS Shuttering Plates Load Test & Drop Compaction #Shorts #JMKEngineering',
      category: 'Shuttering & Centering',
      youtubeId: 'b_fLp787q_E',
      duration: '0:45',
      views: '124 views',
    },
    {
      id: 'vid_2',
      title: 'Precision CNC Cutting of POT-PTFE Bridge Bearings & Base Plates Patna Works',
      category: 'Bridge Bearings',
      youtubeId: 'pXz9aF4qB8c',
      duration: '1:15',
      views: '98 views',
    },
  ]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoForm, setVideoForm] = useState({
    title: '',
    category: 'Steel Fabrication',
    youtubeId: '',
    duration: '1:00',
  });

  // Settings State
  const [settings, setSettings] = useState({
    primaryPhone: '+91 7493916194',
    secondaryPhone: '+91 8651010370',
    email: 'info@jmkengineering.in',
    patnaAddress: 'Mauza Jhali, Circle Kankarbagh 50b, Ward 55, Patna - 800007, Bihar',
    gstin: '10BIEPD2766D2ZX',
    googleVerificationKey: '6DP_-JVCMGzjeXRc9POYlpBPCWtURcAQK9sHhFR6QjA',
  });

  // Notification
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  // Hydrate from localStorage and sync with server API
  useEffect(() => {
    try {
      const isInitialized = localStorage.getItem('jmk_cms_blogs_initialized') === 'true';
      const savedBlogs = localStorage.getItem('jmk_cms_blogs');

      if (isInitialized && savedBlogs !== null) {
        const parsed = JSON.parse(savedBlogs);
        setBlogs(parsed);
        // Sync client's authoritative state with server
        fetch('/api/cms/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ syncAll: true, blogs: parsed }),
        }).catch(() => {});
      } else {
        // First time load: fetch from API
        fetch('/api/cms/blogs')
          .then((res) => res.json())
          .then((data) => {
            if (data.success && Array.isArray(data.blogs)) {
              setBlogs(data.blogs);
              localStorage.setItem('jmk_cms_blogs', JSON.stringify(data.blogs));
            }
          })
          .catch((err) => console.error('Failed to fetch blogs from database:', err));
      }

      const savedProducts = localStorage.getItem('jmk_cms_products');
      if (savedProducts !== null) setProducts(JSON.parse(savedProducts));

      const savedPhotos = localStorage.getItem('jmk_cms_photos');
      if (savedPhotos !== null) setPhotos(JSON.parse(savedPhotos));

      const savedVideos = localStorage.getItem('jmk_cms_videos');
      if (savedVideos !== null) setVideos(JSON.parse(savedVideos));

      const savedSettings = localStorage.getItem('jmk_cms_settings');
      if (savedSettings !== null) setSettings(JSON.parse(savedSettings));
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Blog Handlers
  const handleOpenNewBlog = () => {
    setEditingBlog(null);
    setPreviewMode('editor');
    setBlogForm({
      title: '',
      slug: '',
      category: 'Bridge Bearings',
      excerpt: '',
      content: `## 1. Introduction & Engineering Overview\n\nExplain the industrial challenge and project context.\n\n## 2. Technical Specifications Matrix\n\n| Parameter | Standard Value | Compliance |\n| :--- | :--- | :--- |\n| **Steel Grade** | IS 2062 Grade E250 | Certified |\n| **Yield Strength** | ≥ 250 MPa | Tested |\n| **Corrosion Protection** | Red Oxide Primer | 2 Coats |\n\n## 3. Site Safety & Quality Recommendations\n\n- Adhere strictly to MoRTH Section 2000 specifications.\n- Verify load testing on hydraulic press before installation.\n\n## Conclusion & Technical Consultation\n\nContact JMK Engineering Patna works desk at +91 7493916194 for custom fabrication CAD drawings.`,
      authorName: 'Er. Ujjwal Kumar',
      authorRole: 'Chief Technical Director, JMK Engineering',
      readTime: '6 min read',
      featuredImage: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212537/OO/SD/EE/146888318/strip-seal-expansion-joint-500x500.jpg',
      tags: 'Bridge Bearings, IRC:83, Infrastructure',
      isFeatured: false,
    });
    setIsBlogModalOpen(true);
  };

  const handleEditBlog = (post: BlogPost) => {
    setEditingBlog(post);
    setPreviewMode('editor');
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

  const insertHelper = (snippet: string) => {
    setBlogForm((prev) => ({
      ...prev,
      content: prev.content + '\n\n' + snippet,
    }));
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title || !blogForm.content) {
      alert('Please provide title and content for the article.');
      return;
    }

    const slug = blogForm.slug || blogForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const tagArray = blogForm.tags.split(',').map((t) => t.trim()).filter(Boolean);

    let updatedList: BlogPost[] = [];

    if (editingBlog) {
      // Update
      updatedList = blogs.map((b) => {
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
      showNotification(`Article "${blogForm.title}" updated and synced live!`);
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
      updatedList = [newPost, ...blogs];
      showNotification(`New Article "${blogForm.title}" published live to front website!`);
    }

    setBlogs(updatedList);
    try {
      localStorage.setItem('jmk_cms_blogs_initialized', 'true');
      localStorage.setItem('jmk_cms_blogs', JSON.stringify(updatedList));
      await fetch('/api/cms/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ syncAll: true, blogs: updatedList }),
      });
    } catch (e) {
      console.error(e);
    }

    setIsBlogModalOpen(false);
  };

  const handleDeleteBlog = async (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete the article: "${title}"?`)) {
      const remaining = blogs.filter((b) => b.id !== id);
      setBlogs(remaining);
      try {
        localStorage.setItem('jmk_cms_blogs_initialized', 'true');
        localStorage.setItem('jmk_cms_blogs', JSON.stringify(remaining));
        await fetch('/api/cms/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ syncAll: true, blogs: remaining }),
        });
      } catch (e) {
        console.error(e);
      }
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
    const updated = [newProd, ...products];
    setProducts(updated);
    try {
      localStorage.setItem('jmk_cms_products', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setIsProductModalOpen(false);
    showNotification(`Product "${productForm.name}" added to master catalog!`);
  };

  // Photo Handlers
  const handleSavePhoto = (e: React.FormEvent) => {
    e.preventDefault();
    const newPhoto: PhotoGalleryItem = {
      id: `photo_${Date.now()}`,
      title: photoForm.title,
      category: photoForm.category,
      price: photoForm.price,
      moq: photoForm.moq,
      imageUrl: photoForm.imageUrl,
      slug: photoForm.slug,
    };
    const updated = [newPhoto, ...photos];
    setPhotos(updated);
    try {
      localStorage.setItem('jmk_cms_photos', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setIsPhotoModalOpen(false);
    showNotification(`Photo "${photoForm.title}" added to gallery!`);
  };

  // Video Handlers
  const handleSaveVideo = (e: React.FormEvent) => {
    e.preventDefault();
    const newVid = {
      id: `vid_${Date.now()}`,
      title: videoForm.title,
      category: videoForm.category,
      youtubeId: videoForm.youtubeId.replace('https://youtu.be/', '').replace('https://www.youtube.com/watch?v=', '').split('&')[0],
      duration: videoForm.duration,
      views: '1 view',
    };
    const updated = [newVid, ...videos];
    setVideos(updated);
    try {
      localStorage.setItem('jmk_cms_videos', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setIsVideoModalOpen(false);
    showNotification(`Video "${videoForm.title}" added to video desk!`);
  };

  // Settings Save
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem('jmk_cms_settings', JSON.stringify(settings));
    } catch (e) {
      console.error(e);
    }
    showNotification(`Website Hotlines & SEO settings saved!`);
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
            <span>Master Public Website CMS Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-950">
            Website Content & Marketing CMS Console
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Manage live Technical Blogs, Product Catalog, Photo & Video Galleries, and SEO settings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            target="_blank"
            className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-slate-900 border border-neutral-300 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Live Blog</span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-1.5"
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* CMS Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-neutral-200">
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
          <span>Photo Gallery ({photos.length})</span>
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
          <span>Video Desk ({videos.length})</span>
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
        </div>
      )}

      {/* TAB 3: PHOTO GALLERY MANAGER */}
      {activeTab === 'photos' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-950">Factory Floor & Product Photo Gallery</h2>
              <p className="text-xs text-slate-500 font-medium">Add and manage verified factory photos shown on /photos.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPhotoModalOpen(true)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Photo</span>
              </button>
              <Link
                href="/photos"
                target="_blank"
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <span>View Public Photos</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.slice(0, 12).map((photo) => (
              <div key={photo.id} className="bg-white border border-neutral-200 rounded-2xl p-3 space-y-2 shadow-sm">
                <div className="h-36 rounded-xl overflow-hidden bg-slate-100">
                  <img src={photo.imageUrl} alt={photo.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{photo.title}</h4>
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>{photo.category}</span>
                  <span className="font-mono text-emerald-700 font-bold">{photo.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: VIDEO GALLERY MANAGER */}
      {activeTab === 'videos' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-950">Plant Inspection Video Desk</h2>
              <p className="text-xs text-slate-500 font-medium">Manage video demonstrations and YouTube links shown on /videos.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Video</span>
              </button>
              <Link
                href="/videos"
                target="_blank"
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <span>View Public Videos</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((vid) => (
              <div key={vid.id} className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-3">
                <div className="aspect-video rounded-xl bg-slate-900 overflow-hidden relative flex items-center justify-center">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${vid.youtubeId}`}
                    title={vid.title}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{vid.title}</h4>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="px-2 py-0.5 bg-slate-100 rounded font-bold">{vid.category}</span>
                  <span>Duration: {vid.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: SEO & TELEPHONY SETTINGS */}
      {activeTab === 'settings' && (
        <form onSubmit={handleSaveSettings} className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-950">Global SEO & Telephony Configuration</h2>
            <p className="text-xs text-slate-500 font-medium">Configure primary contact numbers, corporate address, and Google verification.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-900">Primary Header Hotline</label>
              <input
                type="text"
                value={settings.primaryPhone}
                onChange={(e) => setSettings({ ...settings, primaryPhone: e.target.value })}
                className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-mono font-bold text-slate-900"
              />
              <p className="text-[10px] text-emerald-600 font-bold">● Active on Header, Mobile Menu & WhatsApp CTAs</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-900">Secondary / Estimation Hotline</label>
              <input
                type="text"
                value={settings.secondaryPhone}
                onChange={(e) => setSettings({ ...settings, secondaryPhone: e.target.value })}
                className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-mono font-bold text-slate-900"
              />
              <p className="text-[10px] text-emerald-600 font-bold">● Active on Contact Cards & Footer Desks</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-900">Official Contact Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-900">Official GSTIN</label>
              <input
                type="text"
                value={settings.gstin}
                onChange={(e) => setSettings({ ...settings, gstin: e.target.value })}
                className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-mono font-bold text-slate-900"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-black text-slate-900">Patna Central Works Plant Address</label>
              <input
                type="text"
                value={settings.patnaAddress}
                onChange={(e) => setSettings({ ...settings, patnaAddress: e.target.value })}
                className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Configuration</span>
            </button>
          </div>
        </form>
      )}

      {/* CREATE / EDIT BLOG MODAL WITH VISUAL PREVIEW */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 max-w-4xl w-full shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black text-slate-950">
                  {editingBlog ? 'Edit Technical Article' : 'Write & Publish New Engineering Article'}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {/* Mode Switcher */}
                <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setPreviewMode('editor')}
                    className={`px-3 py-1 rounded-lg transition ${previewMode === 'editor' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                  >
                    Editor
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewMode('preview')}
                    className={`px-3 py-1 rounded-lg transition ${previewMode === 'preview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                  >
                    Live Preview
                  </button>
                </div>

                <button
                  onClick={() => setIsBlogModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-neutral-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {previewMode === 'preview' ? (
              /* Live Preview of formatted article */
              <div className="space-y-6 max-h-[70vh] overflow-y-auto p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                    {blogForm.category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {blogForm.title || 'Untitled Engineering Guide'}
                  </h1>
                  <p className="text-sm text-slate-600">{blogForm.excerpt}</p>
                </div>

                {blogForm.featuredImage && (
                  <div className="h-60 rounded-xl overflow-hidden bg-slate-200">
                    <img src={blogForm.featuredImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="prose prose-slate max-w-none text-xs sm:text-sm space-y-4">
                  {blogForm.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={idx} className="text-lg font-bold text-slate-900 border-t pt-3">{paragraph.replace('## ', '')}</h2>;
                    }
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={idx} className="text-base font-bold text-slate-800">{paragraph.replace('### ', '')}</h3>;
                    }
                    if (paragraph.startsWith('|')) {
                      const rows = paragraph.trim().split('\n').filter((r) => !r.includes('---'));
                      return (
                        <div key={idx} className="overflow-x-auto border rounded-xl">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-slate-100 font-bold border-b">
                              <tr>
                                {rows[0].split('|').filter(Boolean).map((h, i) => (
                                  <th key={i} className="p-2">{h.trim()}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {rows.slice(1).map((r, ri) => (
                                <tr key={ri} className="border-b">
                                  {r.split('|').filter(Boolean).map((c, ci) => (
                                    <td key={ci} className="p-2">{c.trim()}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    return <p key={idx}>{paragraph}</p>;
                  })}
                </div>
              </div>
            ) : (
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                      <option value="PEB Structures">PEB Structures</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-900">Author</label>
                    <input
                      type="text"
                      value={blogForm.authorName}
                      onChange={(e) => setBlogForm({ ...blogForm, authorName: e.target.value })}
                      className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                    />
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
                  <label className="text-xs font-black text-slate-900">Short Excerpt (Search Snippet) *</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Brief summary for Google Search snippet..."
                    value={blogForm.excerpt}
                    onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                    className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-medium text-slate-900"
                  />
                </div>

                {/* Quick Format Helpers Toolbar */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black text-slate-900">Article Content *</label>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] text-slate-500 font-bold">Quick Format:</span>
                      <button
                        type="button"
                        onClick={() => insertHelper('## Section Heading\n\nEnter text content here...')}
                        className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] font-bold rounded border"
                      >
                        + H2 Heading
                      </button>
                      <button
                        type="button"
                        onClick={() => insertHelper('### Subheading\n\nDetails...')}
                        className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] font-bold rounded border"
                      >
                        + H3 Sub
                      </button>
                      <button
                        type="button"
                        onClick={() => insertHelper('- Point 1\n- Point 2\n- Point 3')}
                        className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] font-bold rounded border"
                      >
                        + Bullet List
                      </button>
                      <button
                        type="button"
                        onClick={() => insertHelper('| Parameter | Specification | Compliance |\n| :--- | :--- | :--- |\n| **Material** | IS 2062 Grade E250 | Certified |\n| **Thickness** | 12mm / 14mm | Checked |')}
                        className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] font-bold rounded border"
                      >
                        + Spec Table
                      </button>
                    </div>
                  </div>

                  <textarea
                    rows={9}
                    required
                    placeholder="Write complete technical guide..."
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
            )}
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
                <label className="text-xs font-black text-slate-900">Short Description</label>
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

      {/* CREATE PHOTO MODAL */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black text-slate-950">Add Factory Photo</h3>
              </div>
              <button onClick={() => setIsPhotoModalOpen(false)} className="p-1.5 rounded-lg hover:bg-neutral-100 text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePhoto} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-900">Photo Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Heavy Centering Plates Staging"
                  value={photoForm.title}
                  onChange={(e) => setPhotoForm({ ...photoForm, title: e.target.value })}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-900">Category</label>
                  <select
                    value={photoForm.category}
                    onChange={(e) => setPhotoForm({ ...photoForm, category: e.target.value })}
                    className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                  >
                    <option value="Shuttering & Centering">Shuttering & Centering</option>
                    <option value="Scaffolding Systems">Scaffolding Systems</option>
                    <option value="Expansion Joints & Bearings">Bridge Bearings & Joints</option>
                    <option value="Highway & Barriers">Highway & Crash Barriers</option>
                    <option value="Drainage Infrastructure">Bridge Drainage</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-900">Price / MOQ</label>
                  <input
                    type="text"
                    value={photoForm.price}
                    onChange={(e) => setPhotoForm({ ...photoForm, price: e.target.value })}
                    className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-slate-900">Image URL *</label>
                <input
                  type="text"
                  required
                  value={photoForm.imageUrl}
                  onChange={(e) => setPhotoForm({ ...photoForm, imageUrl: e.target.value })}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-mono text-slate-900"
                />
              </div>

              <div className="pt-4 border-t border-neutral-200 flex justify-end gap-3">
                <button type="button" onClick={() => setIsPhotoModalOpen(false)} className="px-4 py-2 border rounded-xl text-xs font-bold text-slate-700">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black">
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE VIDEO MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black text-slate-950">Add Plant Video / YouTube Embed</h3>
              </div>
              <button onClick={() => setIsVideoModalOpen(false)} className="p-1.5 rounded-lg hover:bg-neutral-100 text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveVideo} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-black text-slate-900">Video Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Inside JMK Factory - Shuttering Plate Welding"
                  value={videoForm.title}
                  onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-slate-900">YouTube Video ID or Link *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. b_fLp787q_E or https://youtu.be/..."
                  value={videoForm.youtubeId}
                  onChange={(e) => setVideoForm({ ...videoForm, youtubeId: e.target.value })}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-mono text-slate-900"
                />
              </div>

              <div className="pt-4 border-t border-neutral-200 flex justify-end gap-3">
                <button type="button" onClick={() => setIsVideoModalOpen(false)} className="px-4 py-2 border rounded-xl text-xs font-bold text-slate-700">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black">
                  Save Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
