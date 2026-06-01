import { IconToggleLeft } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const toggles: ComponentType = {
  slug: 'toggles',
  name: 'Toggles',
  icon: <IconToggleLeft stroke={1.5} />,
  description: 'Interactive toggle switches with various styles and animations',
  variants: [
    {
      id: 'toggle-classic',
      name: 'Classic Toggle',
      code: `<label class="group relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only" />
  <div class="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full group-has-[:checked]:bg-lime-500 transition-colors duration-300 group-focus-within:ring-4 group-focus-within:ring-lime-300 dark:group-focus-within:ring-lime-800"></div>
  <div class="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full border border-gray-300 dark:border-gray-600 transition-transform duration-300 group-has-[:checked]:translate-x-full group-has-[:checked]:border-white pointer-events-none shadow-sm"></div>
</label>`,
      contributor: 'rayasabari',
    },
    {
      id: 'toggle-pill-expand',
      name: 'Pill Expand Toggle',
      code: `<label class="group relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only" />
  <div class="w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full group-has-[:checked]:bg-lime-500 transition-colors duration-300 shadow-inner"></div>
  <div class="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 group-has-[:checked]:translate-x-7 group-active:w-7 group-has-[:checked]:group-active:translate-x-5 pointer-events-none shadow-sm"></div>
</label>`,
      contributor: 'rayasabari',
    },
    {
      id: 'toggle-icon-switcher',
      name: 'Icon Switcher Toggle',
      code: `<label class="group relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only" />
  <div class="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full group-has-[:checked]:bg-lime-500 transition-colors duration-300 shadow-inner"></div>
  <div class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 group-has-[:checked]:translate-x-8 flex items-center justify-center pointer-events-none">
    <svg class="w-4 h-4 text-gray-400 group-has-[:checked]:opacity-0 transition-opacity duration-300 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <svg class="w-4 h-4 text-lime-500 opacity-0 group-has-[:checked]:opacity-100 transition-opacity duration-300 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
    </svg>
  </div>
</label>`,
      contributor: 'rayasabari',
    },
    {
      id: 'toggle-text-status',
      name: 'Text Status Toggle',
      code: `<label class="group relative inline-flex items-center cursor-pointer text-xs font-bold font-sans">
  <input type="checkbox" class="sr-only" />
  <div class="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded-full group-has-[:checked]:bg-lime-500 transition-colors duration-300 shadow-inner overflow-hidden relative">
    <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-white opacity-0 group-has-[:checked]:opacity-100 transition-opacity duration-300">ON</span>
    <span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 group-has-[:checked]:opacity-0 transition-opacity duration-300">OFF</span>
  </div>
  <div class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 group-has-[:checked]:translate-x-12 pointer-events-none"></div>
</label>`,
      contributor: 'rayasabari',
    },
    {
      id: 'toggle-neon-glow',
      name: 'Neon Glow Toggle',
      code: `<label class="group relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only" />
  <div class="w-12 h-3.5 bg-gray-300 dark:bg-gray-600 rounded-full group-has-[:checked]:bg-lime-900/40 transition-colors duration-300"></div>
  <div class="absolute -left-1 -top-1 w-5 h-5 bg-white border-2 border-gray-300 dark:border-gray-500 rounded-full shadow-sm transform transition-all duration-300 group-has-[:checked]:translate-x-8 group-has-[:checked]:bg-lime-400 group-has-[:checked]:border-lime-400 group-has-[:checked]:shadow-[0_0_15px_rgba(163,230,53,0.7)] pointer-events-none"></div>
</label>`,
      contributor: 'rayasabari',
    },
    {
      id: 'toggle-chunky-3d',
      name: 'Chunky 3D Toggle',
      code: `<label class="group relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only" />
  <div class="w-14 h-8 bg-gray-200 dark:bg-gray-700 border-b-4 border-gray-300 dark:border-gray-800 rounded-full group-has-[:checked]:bg-lime-500 group-has-[:checked]:border-lime-600 transition-all duration-300"></div>
  <div class="absolute left-1 top-1 w-6 h-5 bg-white border-b-2 border-gray-200 rounded-full shadow-sm transform transition-transform duration-300 group-has-[:checked]:translate-x-6 pointer-events-none"></div>
</label>`,
      contributor: 'rayasabari',
    },
    {
      id: 'toggle-minimalist',
      name: 'Minimalist Line Toggle',
      code: `<label class="group relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only" />
  <div class="w-12 h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full group-has-[:checked]:border-lime-500 transition-colors duration-300 bg-transparent"></div>
  <div class="absolute left-1 top-1 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full transform transition-all duration-300 group-has-[:checked]:translate-x-6 group-has-[:checked]:bg-lime-500 pointer-events-none"></div>
</label>`,
      contributor: 'rayasabari',
    }
  ],
};
