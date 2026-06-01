import { IconBell } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const toasts: ComponentType = {
  slug: 'toasts',
  name: 'Toasts',
  icon: <IconBell stroke={1.5} />,
  description: 'Brief notifications that appear temporarily to provide feedback',
  variants: [
    {
      id: 'simple-toast',
      name: 'Simple Toast',
      code: `<div class="max-w-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-4 flex items-start gap-3">
  <div class="flex-1">
    <p class="text-sm font-medium text-gray-900 dark:text-white">Notification</p>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Your changes have been saved successfully.</p>
  </div>
  <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  </button>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'success-toast',
      name: 'Success Toast',
      code: `<div class="max-w-xs bg-white dark:bg-gray-800 border-l-4 border-l-lime-500 border-y border-r border-y-gray-200 border-r-gray-200 dark:border-y-gray-700 dark:border-r-gray-700 shadow-lg rounded-xl p-4 flex items-start gap-3">
  <div class="text-lime-500 shrink-0">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </div>
  <div class="flex-1">
    <p class="text-sm font-medium text-gray-900 dark:text-white">Success!</p>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">File uploaded completely.</p>
  </div>
  <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  </button>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'error-toast',
      name: 'Error Toast',
      code: `<div class="max-w-xs bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 shadow-lg rounded-xl p-4 flex items-start gap-3">
  <div class="text-red-500 dark:text-red-400 shrink-0">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </div>
  <div class="flex-1">
    <p class="text-sm font-medium text-red-800 dark:text-red-300">Connection Error</p>
    <p class="text-sm text-red-600 dark:text-red-400/80 mt-1">Unable to connect to the server. Please try again.</p>
  </div>
  <button class="text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors shrink-0">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  </button>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'action-toast',
      name: 'Action Toast',
      code: `<div class="max-w-sm bg-gray-900 dark:bg-white shadow-lg rounded-xl p-4 flex items-center justify-between gap-4">
  <p class="text-sm text-white dark:text-gray-900">1 item deleted from your folder.</p>
  <div class="flex items-center gap-3 shrink-0">
    <button class="text-sm font-medium text-lime-400 dark:text-lime-300 hover:text-lime-300 dark:hover:text-lime-400 transition-colors">
      Undo
    </button>
    <div class="w-px h-4 bg-gray-700 dark:bg-gray-300"></div>
    <button class="text-gray-400 hover:text-gray-300 dark:hover:text-gray-600 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'avatar-toast',
      name: 'Avatar Toast',
      code: `<div class="max-w-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-4 flex items-start gap-3">
  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Avatar" class="w-10 h-10 rounded-full object-cover shrink-0" />
  <div class="flex-1">
    <p class="text-sm font-medium text-gray-900 dark:text-white">Sarah Jenkins</p>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Mentioned you in a comment.</p>
    <p class="text-xs text-lime-600 dark:text-lime-400 mt-2 hover:underline cursor-pointer">View comment</p>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'progress-toast',
      name: 'Progress Toast',
      code: `<div class="max-w-xs w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl overflow-hidden flex flex-col">
  <div class="p-4 flex items-center justify-between gap-3">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-lg bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-300 flex items-center justify-center shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
      </div>
      <div>
        <p class="text-sm font-medium text-gray-900 dark:text-white">Uploading...</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">document.pdf (75%)</p>
      </div>
    </div>
    <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>
  <div class="w-full bg-gray-100 dark:bg-gray-700 h-1.5">
    <div class="bg-lime-600 dark:bg-lime-300 h-1.5 rounded-r-full" style="width: 75%"></div>
  </div>
</div>`,
      contributor: 'rayasabari',
    }
  ],
};
