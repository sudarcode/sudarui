import { IconLayoutNavbar } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const tabs: ComponentType = {
  slug: 'tabs',
  name: 'Tabs',
  icon: <IconLayoutNavbar stroke={1.5} />,
  description: 'Navigation tabs to organize content across different screens, views, and contexts.',
  variants: [
    {
      id: 'tabs-underline',
      name: 'Underline Tabs',
      code: `<div class="border-b border-gray-200 dark:border-gray-700">
  <nav class="-mb-px flex space-x-8" aria-label="Tabs">
    <a href="#" class="border-lime-500 text-lime-600 dark:text-lime-500 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" aria-current="page">Dashboard</a>
    <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Team</a>
    <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Projects</a>
    <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Calendar</a>
  </nav>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tabs-segmented',
      name: 'Segmented Control',
      code: `<div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1 dark:border-gray-800 dark:bg-gray-900">
  <button class="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-lime-600 shadow-sm focus:relative dark:bg-gray-800 dark:text-lime-500 transition-all duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    Home
  </button>
  <button class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-200 hover:bg-white/50 dark:hover:bg-gray-800/50">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    About
  </button>
  <button class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-200 hover:bg-white/50 dark:hover:bg-gray-800/50">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    Contact
  </button>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tabs-pill',
      name: 'Pill Tabs',
      code: `<ul class="flex flex-wrap gap-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
  <li>
    <a href="#" class="inline-block px-4 py-3 text-white bg-lime-600 rounded-lg active hover:bg-lime-700 transition-colors" aria-current="page">Profile</a>
  </li>
  <li>
    <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white transition-colors">Dashboard</a>
  </li>
  <li>
    <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white transition-colors">Settings</a>
  </li>
  <li>
    <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white transition-colors">Contacts</a>
  </li>
</ul>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tabs-folder',
      name: 'Folder Style Tabs',
      code: `<div class="w-full">
  <div class="flex gap-1 border-b border-gray-300 dark:border-gray-700">
    <button class="px-6 py-2.5 font-medium text-sm rounded-t-lg bg-white border border-gray-300 border-b-white text-lime-600 -mb-px dark:bg-gray-900 dark:border-gray-700 dark:border-b-gray-900 dark:text-lime-500">
      Preview
    </button>
    <button class="px-6 py-2.5 font-medium text-sm rounded-t-lg bg-gray-50 border border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition-colors">
      Code
    </button>
    <button class="px-6 py-2.5 font-medium text-sm rounded-t-lg bg-gray-50 border border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition-colors">
      Tests
    </button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tabs-vertical',
      name: 'Vertical Tabs',
      code: `<div class="flex flex-col sm:flex-row w-full max-w-sm">
  <div class="flex flex-row sm:flex-col gap-2 w-full border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700 pr-0 sm:pr-4 pb-4 sm:pb-0">
    <button class="text-left w-full px-4 py-2.5 text-sm font-medium text-lime-700 bg-lime-50 rounded-lg dark:bg-lime-900/30 dark:text-lime-400 transition-colors border border-lime-200 dark:border-lime-900/50">
      General
    </button>
    <button class="text-left w-full px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors border border-transparent">
      Security
    </button>
    <button class="text-left w-full px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors border border-transparent">
      Billing
    </button>
    <button class="text-left w-full px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors border border-transparent">
      Notifications
    </button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tabs-animated-line',
      name: 'Animated Line Tabs',
      code: `<div class="relative flex overflow-x-auto hide-scroll-bar border-b border-gray-200 dark:border-gray-700">
  <button class="relative px-6 py-3 text-sm font-medium text-lime-600 dark:text-lime-400 transition-colors duration-300 whitespace-nowrap">
    Overview
    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-lime-600 dark:bg-lime-400"></span>
  </button>
  <button class="group relative px-6 py-3 text-sm font-medium text-gray-500 hover:text-lime-600 dark:text-gray-400 dark:hover:text-lime-400 transition-colors duration-300 whitespace-nowrap">
    Analytics
    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-lime-600 dark:bg-lime-400 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
  </button>
  <button class="group relative px-6 py-3 text-sm font-medium text-gray-500 hover:text-lime-600 dark:text-gray-400 dark:hover:text-lime-400 transition-colors duration-300 whitespace-nowrap">
    Reports
    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-lime-600 dark:bg-lime-400 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
  </button>
  <button class="group relative px-6 py-3 text-sm font-medium text-gray-500 hover:text-lime-600 dark:text-gray-400 dark:hover:text-lime-400 transition-colors duration-300 whitespace-nowrap">
    Settings
    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-lime-600 dark:bg-lime-400 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
  </button>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tabs-glassmorphism',
      name: 'Glassmorphism Tabs',
      code: `<div class="inline-flex gap-2 p-2 rounded-2xl bg-gray-100/50 backdrop-blur-md border border-gray-200/50 shadow-sm dark:bg-gray-800/30 dark:border-gray-700/30 dark:shadow-xl">
  <button class="px-5 py-2 text-sm font-semibold rounded-xl bg-white shadow-sm text-gray-800 dark:bg-gray-700 dark:text-white transition-all">
    Timeline
  </button>
  <button class="px-5 py-2 text-sm font-semibold rounded-xl text-gray-600 hover:bg-white/50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-gray-200 transition-all">
    Media
  </button>
  <button class="px-5 py-2 text-sm font-semibold rounded-xl text-gray-600 hover:bg-white/50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-gray-200 transition-all">
    Files
  </button>
</div>`,
      contributor: 'rayasabari',
    }
  ],
};
