import { IconSelector } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const selects: ComponentType = {
  slug: 'selects',
  name: 'Selects',
  icon: <IconSelector stroke={1.5} />,
  description: 'Dropdown menus for selecting from a list of options',
  variants: [
    {
      id: 'select-classic',
      name: 'Classic Select',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-xs">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Country</label>
  <div class="relative">
    <select class="w-full appearance-none px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 pr-10 cursor-pointer">
      <option value="">Select a country...</option>
      <option value="id">Indonesia</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500 dark:text-gray-400">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'select-soft',
      name: 'Soft Background Select',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-xs">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Role</label>
  <div class="relative">
    <select class="w-full appearance-none px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-shadow text-gray-900 dark:text-gray-100 pr-10 cursor-pointer">
      <option value="">Choose a role...</option>
      <option value="admin">Admin</option>
      <option value="editor">Editor</option>
      <option value="viewer">Viewer</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500 dark:text-gray-400">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'select-underline',
      name: 'Underline Select',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-xs">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Status</label>
  <div class="relative">
    <select class="w-full appearance-none px-0 py-2.5 bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-lime-500 transition-colors text-gray-900 dark:text-gray-100 pr-8 cursor-pointer">
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
      <option value="pending">Pending</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'select-pill',
      name: 'Pill Select',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-xs">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1">Category</label>
  <div class="relative">
    <select class="w-full appearance-none px-5 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 pr-10 cursor-pointer">
      <option value="">Select category...</option>
      <option value="tech">Technology</option>
      <option value="design">Design</option>
      <option value="marketing">Marketing</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500 dark:text-gray-400">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'select-icon',
      name: 'Icon Select',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-xs">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Currency</label>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <select class="w-full appearance-none pl-10 pr-10 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 cursor-pointer">
      <option value="usd">USD ($)</option>
      <option value="eur">EUR (€)</option>
      <option value="gbp">GBP (£)</option>
      <option value="idr">IDR (Rp)</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500 dark:text-gray-400">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'select-filled',
      name: 'Filled Select',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-xs">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Theme</label>
  <div class="relative">
    <select class="w-full appearance-none px-4 pt-4 pb-2 bg-gray-50 dark:bg-gray-800/80 border-0 border-b-2 border-gray-300 dark:border-gray-600 rounded-t-lg focus:outline-none focus:ring-0 focus:border-lime-500 transition-colors text-gray-900 dark:text-gray-100 pr-10 cursor-pointer">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500 dark:text-gray-400">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari'
    }
  ],
};
