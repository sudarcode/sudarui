import { IconChevronsRight } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const paginations: ComponentType = {
  slug: 'paginations',
  name: 'Paginations',
  icon: <IconChevronsRight stroke={1.5} />,
  description: 'Navigation elements to split content across multiple pages.',
  variants: [
    {
      id: 'pagination-basic',
      name: 'Basic Pagination',
      code: `<nav class="flex flex-wrap items-center justify-center gap-1" aria-label="Pagination">
  <button class="px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-lime-600 dark:hover:text-lime-300 transition-colors rounded-md disabled:opacity-50">Previous</button>
  <button class="w-9 h-9 flex items-center justify-center rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">1</button>
  <button class="w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium bg-lime-50 dark:bg-lime-900/20 text-lime-600 dark:text-lime-300 transition-colors">2</button>
  <button class="w-9 h-9 flex items-center justify-center rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">3</button>
  <span class="px-2 text-gray-500 dark:text-gray-400">...</span>
  <button class="w-9 h-9 flex items-center justify-center rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">8</button>
  <button class="px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-lime-600 dark:hover:text-lime-300 transition-colors rounded-md disabled:opacity-50">Next</button>
</nav>`,
      contributor: 'rayasabari',
    },
    {
      id: 'pagination-solid',
      name: 'Solid Accent',
      code: `<nav class="flex flex-wrap items-center justify-center gap-1.5" aria-label="Pagination">
  <button class="p-2 inline-flex items-center justify-center rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
  </button>
  <button class="w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">1</button>
  <button class="w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium bg-lime-500 dark:bg-lime-500 text-white dark:text-gray-900 shadow-sm transition-colors">2</button>
  <button class="w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">3</button>
  <span class="px-2 text-gray-500 dark:text-gray-400">...</span>
  <button class="w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">10</button>
  <button class="p-2 inline-flex items-center justify-center rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  </button>
</nav>`,
      contributor: 'rayasabari',
    },
    {
      id: 'pagination-pills',
      name: 'Rounded Pills',
      code: `<nav class="flex flex-wrap items-center justify-center gap-2 sm:gap-4" aria-label="Pagination">
  <button class="px-4 py-2 inline-flex items-center justify-center rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Previous</button>
  <div class="flex items-center gap-1">
    <button class="w-10 h-10 hidden sm:flex items-center justify-center rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">1</button>
    <button class="w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium border border-lime-500 dark:border-lime-300 text-lime-600 dark:text-lime-300 bg-lime-50 dark:bg-lime-900/20 shadow-sm transition-colors">2</button>
    <button class="w-10 h-10 hidden sm:flex items-center justify-center rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">3</button>
    <span class="px-1 hidden sm:inline-block text-gray-500 dark:text-gray-400">...</span>
    <button class="w-10 h-10 hidden sm:flex items-center justify-center rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">12</button>
  </div>
  <button class="px-4 py-2 inline-flex items-center justify-center rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Next</button>
</nav>`,
      contributor: 'rayasabari',
    },
    {
      id: 'pagination-block',
      name: 'Connected Block',
      code: `<nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
  <button class="px-3 py-2 inline-flex items-center justify-center rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
    <span class="sr-only">Previous</span>
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
  </button>
  <button class="px-4 py-2 hidden sm:inline-flex items-center justify-center border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">1</button>
  <button class="px-4 py-2 inline-flex items-center justify-center border border-lime-500 dark:border-lime-300 bg-lime-50 dark:bg-lime-900/20 text-sm font-medium text-lime-600 dark:text-lime-300 z-10 transition-colors">2</button>
  <button class="px-4 py-2 hidden sm:inline-flex items-center justify-center border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">3</button>
  <span class="px-4 py-2 hidden sm:inline-flex items-center justify-center border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-300">...</span>
  <button class="px-4 py-2 hidden sm:inline-flex items-center justify-center border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">8</button>
  <button class="px-3 py-2 inline-flex items-center justify-center rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
    <span class="sr-only">Next</span>
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  </button>
</nav>`,
      contributor: 'rayasabari',
    },
    {
      id: 'pagination-underlined',
      name: 'Underlined Navigation',
      code: `<nav class="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 px-4 sm:px-0 w-full max-w-2xl mx-auto">
  <div class="-mt-px flex w-0 flex-1">
    <button class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
      <svg class="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
      <span class="hidden sm:inline">Previous</span>
    </button>
  </div>
  <div class="hidden sm:-mt-px sm:flex">
    <button class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">1</button>
    <button class="inline-flex items-center border-t-2 border-lime-500 dark:border-lime-300 px-4 pt-4 text-sm font-medium text-lime-600 dark:text-lime-300 transition-colors">2</button>
    <button class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">3</button>
    <span class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400">...</span>
    <button class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">8</button>
  </div>
  <div class="-mt-px flex w-0 flex-1 justify-end">
    <button class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
      <span class="hidden sm:inline">Next</span>
      <svg class="ml-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </button>
  </div>
</nav>`,
      contributor: 'rayasabari',
    },
    {
      id: 'pagination-compact',
      name: 'Compact Mobile',
      code: `<nav class="flex items-center justify-between w-full max-w-sm mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-2 shadow-sm">
  <button class="px-3 py-2 flex items-center justify-center rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
    <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    Prev
  </button>
  <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
    Page <span class="text-gray-900 dark:text-white mx-0.5">2</span> of 10
  </div>
  <button class="px-3 py-2 flex items-center justify-center rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
    Next
    <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  </button>
</nav>`,
      contributor: 'rayasabari',
    }
  ]
};
