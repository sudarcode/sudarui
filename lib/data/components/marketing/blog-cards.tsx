import { IconArticle } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const blog_cards: ComponentType = {
  slug: 'blog-cards',
  name: 'Blog Cards',
  icon: <IconArticle stroke={1.5} />,
  description: 'Beautiful card components for blog posts and articles',
  variants: [
    {
      id: 'blog-card-simple',
      name: 'Simple Card',
      code: `<div class="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
  <div class="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
    <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Blog post image" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
  </div>
  <div class="p-6">
    <span class="text-xs font-semibold text-lime-600 dark:text-lime-300 uppercase tracking-wider">Technology</span>
    <h3 class="mt-2 text-xl font-bold text-gray-900 dark:text-white leading-tight hover:text-lime-600 dark:hover:text-lime-300 transition-colors cursor-pointer">The Future of Web Development</h3>
    <p class="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
      Explore the upcoming trends in web development, from modern frameworks to edge computing and how it will shape the digital landscape in the coming years.
    </p>
    <div class="mt-6 flex items-center gap-3">
      <div class="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img src="https://i.pravatar.cc/150?u=1" alt="Author" class="w-full h-full object-cover" />
      </div>
      <div>
        <p class="text-sm font-medium text-gray-900 dark:text-white">Alex Johnson</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">Oct 24, 2024 · 5 min read</p>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'blog-card-horizontal',
      name: 'Horizontal Card',
      code: `<div class="max-w-3xl flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
  <div class="sm:w-2/5 h-48 sm:h-auto bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Blog post image" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 absolute inset-0" />
  </div>
  <div class="sm:w-3/5 p-6 flex flex-col justify-center">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300">Development</span>
      <span class="text-xs text-gray-500 dark:text-gray-400">Oct 18, 2024</span>
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-lime-600 dark:hover:text-lime-300 transition-colors cursor-pointer">Mastering Tailwind CSS</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
      A comprehensive guide to building beautiful, responsive user interfaces quickly using Tailwind CSS utility classes.
    </p>
    <div class="mt-auto flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img src="https://i.pravatar.cc/150?u=2" alt="Author" class="w-full h-full object-cover" />
        </div>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Sarah Wilson</span>
      </div>
      <button class="text-sm font-medium text-lime-600 dark:text-lime-300 hover:text-lime-700 dark:hover:text-lime-400 inline-flex items-center gap-1">
        Read more <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'blog-card-overlay',
      name: 'Overlay Card',
      code: `<div class="max-w-sm relative h-96 rounded-xl overflow-hidden group cursor-pointer shadow-md">
  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Blog post image" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
  <div class="absolute inset-0 p-6 flex flex-col justify-end">
    <div class="flex items-center gap-3 mb-3">
      <span class="px-3 py-1 bg-lime-600 text-white text-xs font-bold rounded-full">Culture</span>
      <span class="text-gray-300 text-xs flex items-center gap-1">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> 3 min read
      </span>
    </div>
    <h3 class="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-lime-300 transition-colors">Building High-Performing Teams</h3>
    <p class="text-gray-300 text-sm mb-4 line-clamp-2">
      Learn the key strategies for cultivating a culture of trust, collaboration, and continuous improvement in your organization.
    </p>
    <div class="flex items-center gap-3">
      <div class="h-8 w-8 rounded-full border-2 border-white/20 overflow-hidden">
        <img src="https://i.pravatar.cc/150?u=3" alt="Author" class="w-full h-full object-cover" />
      </div>
      <span class="text-sm font-medium text-gray-200">David Chen</span>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'blog-card-minimal',
      name: 'Minimal Card',
      code: `<div class="max-w-md p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">
  <div class="flex items-center justify-between mb-4">
    <span class="text-sm font-medium text-lime-600 dark:text-lime-400">Design</span>
    <time datetime="2024-09-12" class="text-xs text-gray-500 dark:text-gray-400">Sep 12, 2024</time>
  </div>
  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:underline decoration-lime-500 decoration-2 cursor-pointer">The Art of Typography in UI</h3>
  <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
    Typography is more than just choosing a font. It's about establishing hierarchy, improving readability, and conveying your brand's personality through text.
  </p>
  <a href="#" class="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white group">
    Read Article
    <div class="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </div>
  </a>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'blog-card-glassmorphism',
      name: 'Glassmorphism Card',
      code: `<div class="max-w-sm relative p-[1px] rounded-2xl bg-gradient-to-br from-white/50 to-white/10 dark:from-white/10 dark:to-white/5 overflow-hidden shadow-xl">
  <!-- Subtle background glow -->
  <div class="absolute -top-20 -right-20 w-40 h-40 bg-lime-400/30 dark:bg-lime-500/20 rounded-full blur-3xl"></div>
  
  <div class="relative h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-[15px] p-6">
    <div class="h-40 rounded-xl overflow-hidden mb-5 relative group">
      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Blog post image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div class="absolute top-3 left-3 px-2 py-1 bg-white/20 dark:bg-black/40 backdrop-blur-md rounded-md text-xs font-medium text-gray-900 dark:text-white border border-white/30 dark:border-white/10">Data Science</div>
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">Machine Learning Basics</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
      An introduction to the core concepts of machine learning and how it's revolutionizing industries across the globe.
    </p>
    <div class="pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex justify-between items-center">
      <div class="flex -space-x-2">
        <img class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/150?u=4" alt="Author" />
        <img class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/150?u=5" alt="Author" />
      </div>
      <button class="px-4 py-2 bg-gray-900/5 dark:bg-white/5 hover:bg-lime-500 hover:text-white dark:hover:bg-lime-400 dark:hover:text-gray-900 text-sm font-medium rounded-lg transition-colors border border-gray-200/50 dark:border-gray-700/50">
        Read
      </button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'blog-card-featured',
      name: 'Featured Card',
      code: `<div class="max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 grid grid-cols-1 lg:grid-cols-2 gap-0 group">
  <div class="h-64 lg:h-full overflow-hidden">
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Blog post image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
  </div>
  <div class="p-8 lg:p-10 flex flex-col justify-center">
    <div class="flex items-center gap-2 mb-4">
      <svg class="w-4 h-4 text-lime-600 dark:text-lime-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0l-1.18-4.455-3.354-1.935a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"></path></svg>
      <span class="text-sm font-semibold text-lime-600 dark:text-lime-400 tracking-wide uppercase">Featured Article</span>
    </div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors cursor-pointer">The Ultimate Guide to Remote Work in 2025</h2>
    <p class="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
      Discover the tools, methodologies, and cultural shifts that are driving the next wave of remote work. We cover everything from async communication to virtual team building.
    </p>
    <div class="mt-auto flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700">
      <div class="flex items-center gap-3">
        <div class="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img src="https://i.pravatar.cc/150?u=6" alt="Author" class="w-full h-full object-cover" />
        </div>
        <div>
          <p class="text-sm font-bold text-gray-900 dark:text-white">Elena Rodriguez</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">Editor in Chief</p>
        </div>
      </div>
      <button class="p-3 bg-lime-50 text-lime-600 dark:bg-lime-900/20 dark:text-lime-400 rounded-full hover:bg-lime-600 hover:text-white dark:hover:bg-lime-400 dark:hover:text-gray-900 transition-colors group-hover:animate-pulse">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    }
  ],
};
