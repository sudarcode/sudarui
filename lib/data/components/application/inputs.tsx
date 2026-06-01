import { IconCursorText } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const inputs: ComponentType = {
  slug: 'inputs',
  name: 'Inputs',
  icon: <IconCursorText stroke={1.5} />,
  description: 'Text input fields for user data collection',
  variants: [
    {
      id: 'input-classic',
      name: 'Classic Input',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
  <input type="email" placeholder="Enter your email" class="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" />
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'input-soft',
      name: 'Soft Background Input',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Username</label>
  <input type="text" placeholder="johndoe" class="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-shadow text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" />
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'input-underline',
      name: 'Underline Input',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
  <input type="password" placeholder="••••••••" class="w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-lime-500 transition-colors text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" />
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'input-pill',
      name: 'Pill Input',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1">Search</label>
  <input type="text" placeholder="Search anything..." class="w-full px-5 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" />
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'input-icon',
      name: 'Icon Input',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Amount</label>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <input type="text" placeholder="0.00" class="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" />
  </div>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'input-filled',
      name: 'Filled Input',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Company</label>
  <input type="text" placeholder="Acme Inc." class="w-full px-4 pt-4 pb-2 bg-gray-50 dark:bg-gray-800/80 border-0 border-b-2 border-gray-300 dark:border-gray-600 rounded-t-lg focus:outline-none focus:ring-0 focus:border-lime-500 transition-colors text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" />
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'input-floating',
      name: 'Floating Label Input',
      code: `<div class="relative w-full max-w-sm">
  <input type="text" id="floating-input" placeholder=" " class="peer w-full px-4 py-3 pt-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100" />
  <label for="floating-input" class="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-lime-600 dark:peer-focus:text-lime-400 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">Username</label>
</div>`,
      contributor: 'rayasabari'
    }
  ],
};
