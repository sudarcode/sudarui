import { IconCheckbox } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const checkboxes: ComponentType = {
  slug: 'checkboxes',
  name: 'Checkboxes',
  icon: <IconCheckbox stroke={1.5} />,
  description: 'Selection controls that allow users to select one or more options from a set',
  variants: [
    {
      id: 'checkbox-classic',
      name: 'Classic Checkbox',
      code: `<div class="flex flex-col gap-3">
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="checkbox" class="peer sr-only" checked />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
      <svg class="absolute w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Remember me</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="checkbox" class="peer sr-only" />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
      <svg class="absolute w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Subscribe to newsletter</span>
  </label>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'checkbox-soft',
      name: 'Soft Background Checkbox',
      code: `<div class="flex flex-col gap-3">
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 transition-colors">
      <input type="checkbox" class="peer sr-only" checked />
      <div class="absolute inset-0 rounded peer-checked:bg-lime-100 dark:peer-checked:bg-lime-900/30 transition-colors duration-200"></div>
      <div class="w-3 h-3 rounded-sm bg-gray-300 dark:bg-gray-600 peer-checked:bg-lime-500 transition-colors duration-200 z-10"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Enable Notifications</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 transition-colors">
      <input type="checkbox" class="peer sr-only" />
      <div class="absolute inset-0 rounded peer-checked:bg-lime-100 dark:peer-checked:bg-lime-900/30 transition-colors duration-200"></div>
      <div class="w-3 h-3 rounded-sm bg-gray-300 dark:bg-gray-600 peer-checked:bg-lime-500 transition-colors duration-200 z-10"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Location Services</span>
  </label>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'checkbox-rounded',
      name: 'Rounded Checkbox',
      code: `<div class="flex flex-col gap-3">
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="checkbox" class="peer sr-only" checked />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
      <svg class="absolute w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Accept Terms</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="checkbox" class="peer sr-only" />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
      <svg class="absolute w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Privacy Policy</span>
  </label>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'checkbox-card',
      name: 'Card Checkbox',
      code: `<div class="flex flex-col gap-3 w-full max-w-sm">
  <label class="flex items-center cursor-pointer group">
    <input type="checkbox" class="peer sr-only" checked />
    <div class="px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl peer-checked:border-lime-500 peer-checked:bg-lime-50 dark:peer-checked:bg-lime-900/10 transition-all duration-200 flex items-center gap-3 w-full">
      <div class="relative flex items-center justify-center w-5 h-5 shrink-0">
        <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
        <svg class="absolute w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <p class="text-sm font-semibold text-gray-800 dark:text-gray-100">Development Environment</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">Install standard development tools</p>
      </div>
    </div>
  </label>
  <label class="flex items-center cursor-pointer group">
    <input type="checkbox" class="peer sr-only" />
    <div class="px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl peer-checked:border-lime-500 peer-checked:bg-lime-50 dark:peer-checked:bg-lime-900/10 transition-all duration-200 flex items-center gap-3 w-full">
      <div class="relative flex items-center justify-center w-5 h-5 shrink-0">
        <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
        <svg class="absolute w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <p class="text-sm font-semibold text-gray-800 dark:text-gray-100">Production Build</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">Include optimized production assets</p>
      </div>
    </div>
  </label>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'checkbox-outline',
      name: 'Outline Checkbox',
      code: `<div class="flex flex-col gap-3">
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="checkbox" class="peer sr-only" checked />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded peer-checked:border-lime-500 transition-all duration-200"></div>
      <svg class="absolute w-3.5 h-3.5 text-lime-500 scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Save for later</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="checkbox" class="peer sr-only" />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded peer-checked:border-lime-500 transition-all duration-200"></div>
      <svg class="absolute w-3.5 h-3.5 text-lime-500 scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Mark as favorite</span>
  </label>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'checkbox-dash',
      name: 'Indeterminate Checkbox',
      code: `<div class="flex flex-col gap-3">
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="checkbox" class="peer sr-only" checked />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
      <div class="absolute w-2.5 h-0.5 bg-white scale-0 peer-checked:scale-100 transition-transform duration-200 rounded-full"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Select All (Partial)</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer group ml-6">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="checkbox" class="peer sr-only" checked />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
      <svg class="absolute w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Child Item 1</span>
  </label>
</div>`,
      contributor: 'rayasabari'
    }
  ],
};
