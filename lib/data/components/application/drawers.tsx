import { IconLayoutSidebarRight } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const drawers: ComponentType = {
  slug: 'drawers',
  name: 'Drawers',
  icon: <IconLayoutSidebarRight stroke={1.5} />,
  description: 'Sliding panel components for navigation, details, and forms',
  variants: [
    {
      id: 'left-drawer-nav',
      name: 'Left Navigation Drawer',
      code: `<div class="relative w-full h-[500px] bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-inner">
  <div class="absolute inset-0 bg-gray-900/20 dark:bg-gray-900/40 backdrop-blur-[2px] z-10"></div>
  <div class="absolute top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl z-20 flex flex-col">
    <div class="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg bg-lime-500 flex items-center justify-center text-gray-900 font-bold">>_</div>
        <span class="text-lg font-bold text-gray-900 dark:text-white">Termul</span>
      </div>
      <button class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
    <div class="p-4 flex-1 overflow-y-auto space-y-1">
      <a href="#" class="flex items-center gap-3 px-3 py-2.5 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 rounded-lg font-medium">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
        Home
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Pricing
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        Docs
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
        Blog
      </a>
    </div>
    <div class="p-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
      <button class="w-full py-2.5 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        Sign In
      </button>
      <button class="w-full py-2.5 bg-lime-500 text-gray-900 font-medium rounded-lg hover:bg-lime-600 transition-colors shadow-sm shadow-lime-500/20">
        Get Started
      </button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'right-drawer-details',
      name: 'Right Details Drawer',
      code: `<div class="relative w-full h-[500px] bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-inner">
  <div class="absolute inset-0 bg-gray-900/20 dark:bg-gray-900/40 backdrop-blur-[2px] z-10"></div>
  <div class="absolute top-0 right-0 h-full w-full sm:w-80 bg-white dark:bg-gray-900 shadow-2xl z-20 flex flex-col border-l border-gray-100 dark:border-gray-800">
    <div class="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">Product Details</h3>
      <button class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
    <div class="p-5 flex-1 overflow-y-auto">
      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600" alt="Product" class="w-full h-48 object-cover rounded-xl mb-4" />
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-xl font-bold text-gray-900 dark:text-white">Premium Wireless Headphones</h4>
        <span class="px-2.5 py-1 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 text-xs font-bold rounded-full">$299.00</span>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">High-fidelity audio with active noise cancellation and 30-hour battery life.</p>
      
      <div class="space-y-3">
        <h5 class="text-sm font-semibold text-gray-900 dark:text-white">Specifications</h5>
        <div class="flex justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400">Brand</span>
          <span class="font-medium text-gray-900 dark:text-white">AudioTech</span>
        </div>
        <div class="flex justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400">Color</span>
          <span class="font-medium text-gray-900 dark:text-white">Midnight Black</span>
        </div>
        <div class="flex justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-800">
          <span class="text-gray-500 dark:text-gray-400">Connectivity</span>
          <span class="font-medium text-gray-900 dark:text-white">Bluetooth 5.2</span>
        </div>
      </div>
    </div>
    <div class="p-5 border-t border-gray-100 dark:border-gray-800">
      <button class="w-full py-2.5 bg-lime-500 text-gray-900 font-medium rounded-lg hover:bg-lime-600 transition-colors shadow-sm shadow-lime-500/20">
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'bottom-drawer-sheet',
      name: 'Bottom Sheet Drawer',
      code: `<div class="relative w-full h-[500px] bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-inner flex flex-col justify-end">
  <div class="absolute inset-0 bg-gray-900/20 dark:bg-gray-900/40 backdrop-blur-[2px] z-10"></div>
  <div class="relative w-full bg-white dark:bg-gray-900 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-20 flex flex-col rounded-t-3xl pt-2 pb-6 px-6 transform transition-transform">
    <div class="flex justify-center mb-4">
      <div class="w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
    </div>
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">Share Link</h3>
      <button class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
    <div class="grid grid-cols-4 gap-4 mb-6">
      <button class="flex flex-col items-center gap-2 group">
        <div class="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white flex items-center justify-center group-hover:scale-105 transition-transform group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 group-hover:text-lime-700 dark:group-hover:text-lime-400">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </div>
        <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Twitter</span>
      </button>
      <button class="flex flex-col items-center gap-2 group">
        <div class="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white flex items-center justify-center group-hover:scale-105 transition-transform group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 group-hover:text-lime-700 dark:group-hover:text-lime-400">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </div>
        <span class="text-xs font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
      </button>
      <button class="flex flex-col items-center gap-2 group">
        <div class="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white flex items-center justify-center group-hover:scale-105 transition-transform group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 group-hover:text-lime-700 dark:group-hover:text-lime-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
        </div>
        <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Copy Link</span>
      </button>
      <button class="flex flex-col items-center gap-2 group">
        <div class="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 group-hover:text-lime-700 dark:group-hover:text-lime-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </div>
        <span class="text-xs font-medium text-gray-700 dark:text-gray-300">More</span>
      </button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'top-drawer-filter',
      name: 'Top Filter Drawer',
      code: `<div class="relative w-full h-[500px] bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-inner flex">
  <div class="absolute inset-0 bg-gray-900/20 dark:bg-gray-900/40 backdrop-blur-[2px] z-10"></div>
  <div class="absolute top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-20 flex flex-col rounded-b-3xl">
    <div class="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">Filter Results</h3>
      <button class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
    <div class="p-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
        <select class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Clothing</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price Range</label>
        <select class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500">
          <option>Any Price</option>
          <option>Under $50</option>
          <option>$50 to $200</option>
          <option>Over $200</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rating</label>
        <select class="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500">
          <option>4 Stars & Up</option>
          <option>3 Stars & Up</option>
          <option>Any Rating</option>
        </select>
      </div>
    </div>
    <div class="p-5 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3 bg-gray-50/50 dark:bg-gray-900/50 rounded-b-3xl">
      <button class="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Clear</button>
      <button class="px-4 py-2 bg-lime-500 text-gray-900 font-medium rounded-lg hover:bg-lime-600 transition-colors">Apply Filters</button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'right-drawer-form',
      name: 'Right Form Drawer',
      code: `<div class="relative w-full h-[600px] bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-inner flex">
  <div class="absolute inset-0 bg-gray-900/20 dark:bg-gray-900/40 backdrop-blur-[2px] z-10"></div>
  <div class="absolute top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 shadow-2xl z-20 flex flex-col border-l border-gray-100 dark:border-gray-800">
    <div class="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900 sticky top-0 z-30">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">Create New Event</h3>
      <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
    <div class="p-6 flex-1 overflow-y-auto">
      <form class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Event Name <span class="text-red-500">*</span></label>
          <input type="text" class="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500" placeholder="e.g. Annual Design Conference" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
          <textarea rows="4" class="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500" placeholder="Briefly describe the event..."></textarea>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
            <input type="date" class="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time</label>
            <input type="time" class="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Type</label>
          <div class="space-y-2">
            <label class="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <input type="radio" name="type" class="text-lime-500 focus:ring-lime-500" checked />
              <div>
                <div class="font-medium text-gray-900 dark:text-white text-sm">Online Event</div>
                <div class="text-xs text-gray-500">Virtual meeting with a link</div>
              </div>
            </label>
            <label class="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <input type="radio" name="type" class="text-lime-500 focus:ring-lime-500" />
              <div>
                <div class="font-medium text-gray-900 dark:text-white text-sm">In-person</div>
                <div class="text-xs text-gray-500">Physical location required</div>
              </div>
            </label>
          </div>
        </div>
      </form>
    </div>
    <div class="p-6 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3 bg-gray-50/50 dark:bg-gray-800/50">
      <button class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Cancel</button>
      <button class="px-4 py-2 bg-lime-500 text-gray-900 font-medium rounded-lg hover:bg-lime-600 transition-colors shadow-sm shadow-lime-500/20">Create Event</button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'left-drawer-profile',
      name: 'Left Profile Drawer',
      code: `<div class="relative w-full h-[500px] bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-inner flex">
  <div class="absolute inset-0 bg-gray-900/20 dark:bg-gray-900/40 backdrop-blur-[2px] z-10"></div>
  <div class="absolute top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-20 flex flex-col">
    <!-- Header with Background -->
    <div class="h-32 bg-lime-400 relative">
      <button class="absolute top-4 right-4 p-1.5 text-black/50 hover:text-black bg-white/20 hover:bg-white/40 rounded-full transition-colors backdrop-blur-md">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
    
    <!-- Profile Info -->
    <div class="px-6 pb-6 border-b border-gray-100 dark:border-gray-800 relative">
      <div class="w-20 h-20 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden bg-gray-200 absolute -top-10">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" class="w-full h-full object-cover" />
      </div>
      <div class="mt-12 flex justify-between items-start">
        <div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Buah Lil</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">@buahlil</p>
        </div>
        <button class="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Edit
        </button>
      </div>
      <p class="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        Frontend Developer & UI Designer. Passionate about creating beautiful user experiences.
      </p>
    </div>
    
    <!-- Navigation list -->
    <div class="p-4 flex-1 overflow-y-auto space-y-1">
      <a href="#" class="flex items-center justify-between p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors group">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg group-hover:scale-110 group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <span class="font-medium">Account Settings</span>
        </div>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </a>
      <a href="#" class="flex items-center justify-between p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors group">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg group-hover:scale-110 group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          </div>
          <span class="font-medium">Notifications</span>
        </div>
        <div class="w-2 h-2 rounded-full bg-lime-500"></div>
      </a>
      <a href="#" class="flex items-center justify-between p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors group">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg group-hover:scale-110 group-hover:bg-lime-100 dark:group-hover:bg-lime-900/30 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>
          <span class="font-medium">Privacy & Security</span>
        </div>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </a>
    </div>
    
    <div class="p-4">
      <button class="w-full flex items-center justify-center gap-2 p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-medium transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
        Sign Out
      </button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    }
  ],
};
