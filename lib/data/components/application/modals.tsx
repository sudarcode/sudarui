import { IconAppWindow } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const modals: ComponentType = {
  slug: 'modals',
  name: 'Modals',
  icon: <IconAppWindow stroke={1.5} />,
  description: 'Dialogs and modal components for focused user interactions',
  variants: [
    {
      id: 'simple-modal',
      name: 'Simple Modal',
      code: `<div class="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Modal Title</h3>
  <p class="text-gray-500 dark:text-gray-400 text-sm mb-6">This is a simple modal dialog. You can use it to display some text to the user.</p>
  <div class="flex justify-end">
    <button class="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
      Understood
    </button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'confirmation-modal',
      name: 'Confirmation Modal',
      code: `<div class="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-4">
  <div class="flex gap-4 items-start">
    <div class="w-10 h-10 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 flex items-center justify-center shrink-0">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Update Available</h3>
      <p class="text-gray-500 dark:text-gray-400 text-sm">A new software update is available. Do you want to download and install it now?</p>
    </div>
  </div>
  <div class="flex justify-end gap-3 mt-2">
    <button class="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
      Later
    </button>
    <button class="px-4 py-2 bg-lime-600 text-white font-medium rounded-lg hover:bg-lime-700 transition-colors shadow-sm shadow-lime-600/20">
      Update Now
    </button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'success-modal',
      name: 'Success Modal',
      code: `<div class="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 text-center flex flex-col items-center">
  <div class="w-16 h-16 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400 flex items-center justify-center mb-4">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
  </div>
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h3>
  <p class="text-gray-500 dark:text-gray-400 text-sm mb-6">Your transaction was completed successfully. A receipt has been sent to your email.</p>
  <button class="w-full py-2.5 bg-lime-600 text-white font-medium rounded-lg hover:bg-lime-700 transition-colors shadow-sm shadow-lime-600/20">
    Back to Dashboard
  </button>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'danger-modal',
      name: 'Danger Modal',
      code: `<div class="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
  <div class="flex flex-col items-center text-center">
    <div class="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-4 ring-4 ring-red-50 dark:ring-red-900/10">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
    </div>
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Delete Account</h3>
    <p class="text-gray-500 dark:text-gray-400 text-sm mb-6">Are you sure you want to delete your account? This action cannot be undone and all data will be lost.</p>
  </div>
  <div class="flex gap-3 w-full">
    <button class="flex-1 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      Cancel
    </button>
    <button class="flex-1 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20">
      Delete
    </button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'form-modal',
      name: 'Form Modal',
      code: `<div class="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
  <div class="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white">Sign In</h3>
    <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>
  <div class="p-6">
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
        <input type="email" class="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500 transition-colors" placeholder="you@example.com" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
        <input type="password" class="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500 transition-colors" placeholder="••••••••" />
      </div>
      <div class="flex items-center justify-between mt-2">
        <label class="flex items-center gap-2">
          <input type="checkbox" class="rounded border-gray-300 text-lime-600 focus:ring-lime-500" />
          <span class="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
        </label>
        <a href="#" class="text-sm text-lime-600 dark:text-lime-400 hover:underline">Forgot password?</a>
      </div>
      <button class="w-full mt-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
        Sign In
      </button>
    </form>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'newsletter-modal',
      name: 'Newsletter Modal',
      code: `<div class="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col md:flex-row">
  <div class="md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600 relative">
    <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
  </div>
  <div class="md:w-3/5 p-8 relative">
    <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
    <span class="text-xs font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400 mb-2 block">Newsletter</span>
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Join our community</h3>
    <p class="text-gray-500 dark:text-gray-400 mb-6">Get weekly updates, tips, and exclusive offers straight to your inbox. No spam, ever.</p>
    <div class="flex flex-col sm:flex-row gap-3">
      <input type="email" class="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500/20 focus:border-lime-500 transition-colors" placeholder="Enter your email" />
      <button class="px-6 py-2.5 bg-lime-600 text-white font-medium rounded-lg hover:bg-lime-700 transition-colors shadow-sm shadow-lime-600/20 whitespace-nowrap">
        Subscribe
      </button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    }
  ],
};
