import { IconCalendar } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const datePicker: ComponentType = {
  slug: 'date-picker',
  name: 'Date Picker',
  icon: <IconCalendar stroke={1.5} />,
  description: 'Date selection inputs and calendars',
  variants: [
    {
      id: 'datepicker-classic',
      name: 'Classic Date Picker',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Date of Birth</label>
  <input type="date" class="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 dark:[color-scheme:dark]" />
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'datepicker-soft',
      name: 'Soft Date Picker',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Appointment Date</label>
  <input type="date" class="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-shadow text-gray-900 dark:text-gray-100 dark:[color-scheme:dark]" />
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'datepicker-underline',
      name: 'Underline Date Picker',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Graduation Date</label>
  <input type="date" class="w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-lime-500 transition-colors text-gray-900 dark:text-gray-100 dark:[color-scheme:dark]" />
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'datepicker-range',
      name: 'Date Range Picker',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-md">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Select Period</label>
  <div class="flex items-center gap-2">
    <input type="date" class="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 dark:[color-scheme:dark]" />
    <span class="text-gray-500 dark:text-gray-400">to</span>
    <input type="date" class="w-full px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 dark:[color-scheme:dark]" />
  </div>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'datepicker-icon',
      name: 'Icon Date Picker',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Deadline</label>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
    </div>
    <input type="date" class="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 dark:[color-scheme:dark]" />
  </div>
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'datepicker-filled',
      name: 'Filled Date Picker',
      code: `<div class="flex flex-col gap-1.5 w-full max-w-sm">
  <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Check-in</label>
  <input type="date" class="w-full px-4 pt-4 pb-2 bg-gray-50 dark:bg-gray-800/80 border-0 border-b-2 border-gray-300 dark:border-gray-600 rounded-t-lg focus:outline-none focus:ring-0 focus:border-lime-500 transition-colors text-gray-900 dark:text-gray-100 dark:[color-scheme:dark]" />
</div>`,
      contributor: 'rayasabari'
    },
    {
      id: 'datepicker-floating',
      name: 'Floating Label Date Picker',
      code: `<div class="relative w-full max-w-sm">
  <input type="date" id="floating-date" class="peer w-full px-4 py-2.5 pt-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-shadow text-gray-900 dark:text-gray-100 dark:[color-scheme:dark]" />
  <label for="floating-date" class="absolute left-4 top-1.5 text-xs text-gray-500 dark:text-gray-400 transition-all peer-focus:text-lime-600 dark:peer-focus:text-lime-400 pointer-events-none">Event Date</label>
</div>`,
      contributor: 'rayasabari'
    }
  ]
};
