import { IconCircleDot } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const radios: ComponentType = {
  slug: 'radios',
  name: 'Radios',
  icon: <IconCircleDot stroke={1.5} />,
  description: 'Selection controls that allow users to choose a single option from a list',
  variants: [
    {
      id: 'radio-classic',
      name: 'Classic Radio',
      code: `<div class="flex gap-4">
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="radio" name="radio-classic" class="peer sr-only" checked />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:border-lime-500 transition-colors"></div>
      <div class="absolute w-2.5 h-2.5 bg-lime-500 rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Standard Delivery</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="radio" name="radio-classic" class="peer sr-only" />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:border-lime-500 transition-colors"></div>
      <div class="absolute w-2.5 h-2.5 bg-lime-500 rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Express Delivery (+ $5)</span>
  </label>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'radio-solid',
      name: 'Solid Fill Radio',
      code: `<div class="flex gap-4">
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="radio" name="radio-solid" class="peer sr-only" checked />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
      <div class="absolute w-1.5 h-1.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200 delay-75"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Monthly Billing</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="radio" name="radio-solid" class="peer sr-only" />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
      <div class="absolute w-1.5 h-1.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200 delay-75"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Annual Billing (Save 20%)</span>
  </label>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'radio-soft',
      name: 'Soft Background Radio',
      code: `<div class="flex gap-4">
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors">
      <input type="radio" name="radio-soft" class="peer sr-only" checked />
      <div class="absolute inset-0 rounded-full peer-checked:bg-lime-100 dark:peer-checked:bg-lime-900/30 transition-colors duration-200"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600 peer-checked:bg-lime-500 transition-colors duration-200 z-10"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Light Mode</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors">
      <input type="radio" name="radio-soft" class="peer sr-only" />
      <div class="absolute inset-0 rounded-full peer-checked:bg-lime-100 dark:peer-checked:bg-lime-900/30 transition-colors duration-200"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600 peer-checked:bg-lime-500 transition-colors duration-200 z-10"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Dark Mode</span>
  </label>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'radio-card',
      name: 'Card Radio',
      code: `<div class="flex flex-col gap-3 w-full max-w-sm">
  <label class="flex items-center cursor-pointer group">
    <input type="radio" name="radio-card" class="peer sr-only" checked />
    <div class="px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl peer-checked:border-lime-500 peer-checked:bg-lime-50 dark:peer-checked:bg-lime-900/10 transition-all duration-200 flex items-center gap-3 w-full">
      <div class="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-lime-500 relative flex items-center justify-center">
        <div class="w-2 h-2 rounded-full bg-lime-500 scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
      </div>
      <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">Personal Plan ($9/mo)</span>
    </div>
  </label>
  <label class="flex items-center cursor-pointer group">
    <input type="radio" name="radio-card" class="peer sr-only" />
    <div class="px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl peer-checked:border-lime-500 peer-checked:bg-lime-50 dark:peer-checked:bg-lime-900/10 transition-all duration-200 flex items-center gap-3 w-full">
      <div class="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-lime-500 relative flex items-center justify-center">
        <div class="w-2 h-2 rounded-full bg-lime-500 scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
      </div>
      <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">Team Plan ($29/mo)</span>
    </div>
  </label>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'radio-icon',
      name: 'Icon Check Radio',
      code: `<div class="flex gap-4">
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-6 h-6">
      <input type="radio" name="radio-icon" class="peer sr-only" checked />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
      <svg class="absolute w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200 delay-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Public Repository</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-6 h-6">
      <input type="radio" name="radio-icon" class="peer sr-only" />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-lime-500 peer-checked:border-lime-500 transition-all duration-200"></div>
      <svg class="absolute w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200 delay-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Private Repository</span>
  </label>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'radio-square',
      name: 'Square Radio',
      code: `<div class="flex gap-4">
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="radio" name="radio-square" class="peer sr-only" checked />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-md peer-checked:border-lime-500 transition-colors duration-200"></div>
      <div class="absolute w-2.5 h-2.5 bg-lime-500 rounded-sm scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Credit Card</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5">
      <input type="radio" name="radio-square" class="peer sr-only" />
      <div class="w-full h-full border-2 border-gray-300 dark:border-gray-600 rounded-md peer-checked:border-lime-500 transition-colors duration-200"></div>
      <div class="absolute w-2.5 h-2.5 bg-lime-500 rounded-sm scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
    </div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">PayPal</span>
  </label>
</div>`,
      contributor: 'rayasabari'
    }
  ],
};
