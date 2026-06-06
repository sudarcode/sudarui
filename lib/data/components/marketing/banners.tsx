import { IconSpeakerphone } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const banners: ComponentType = {
  slug: 'banners',
  name: 'Banners',
  icon: <IconSpeakerphone stroke={1.5} />,
  description: 'Banner examples to add important information, CTA, or announcement',
  variants: [
    {
      id: 'banner-simple',
      name: 'Simple Banner',
      code: `<div class="bg-lime-600 dark:bg-lime-300 px-4 py-3 text-white dark:text-gray-900">
  <p class="text-center text-sm font-medium">
    Big news! We've released a new feature.
    <a href="#" class="underline">Check it out &rarr;</a>
  </p>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'banner-with-link',
      name: 'Banner with Link',
      code: `<div class="bg-gray-900 dark:bg-gray-800 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
  <p class="text-center text-sm font-medium sm:text-left">
    <span class="md:hidden">We announced a new product!</span>
    <span class="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
    <br class="sm:hidden" />
    <a href="#" class="mt-1 inline-block text-lime-400 dark:text-lime-300 underline sm:mt-0 sm:ml-1">Learn more &rarr;</a>
  </p>
  <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-lime-300 sm:-mr-2">
    <span class="sr-only">Dismiss</span>
    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'banner-cta-button',
      name: 'Banner with Button',
      code: `<div class="bg-gray-100 dark:bg-gray-900">
  <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex flex-wrap items-center justify-between">
      <div class="flex w-0 flex-1 items-center">
        <span class="flex rounded-lg bg-lime-600 dark:bg-lime-400/10 p-2">
          <svg class="h-6 w-6 text-white dark:text-lime-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </span>
        <p class="ml-3 font-medium text-gray-900 dark:text-white truncate">
          <span class="md:hidden">New version released!</span>
          <span class="hidden md:inline">Big news! We're excited to announce a new version release.</span>
        </p>
      </div>
      <div class="order-3 mt-2 w-full shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-lime-600 dark:bg-lime-300 px-4 py-2 text-sm font-medium text-white dark:text-gray-900 shadow-sm hover:bg-lime-700 dark:hover:bg-lime-400">
          Download
        </a>
      </div>
      <div class="order-2 shrink-0 sm:order-3 sm:ml-3">
        <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-lime-600 dark:focus:ring-lime-300 sm:-mr-2">
          <span class="sr-only">Dismiss</span>
          <svg class="h-6 w-6 text-gray-900 dark:text-gray-400 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'banner-gradient',
      name: 'Gradient Banner',
      code: `<div class="bg-linear-to-r from-lime-500 to-emerald-600 dark:from-lime-400/20 dark:to-emerald-500/20 dark:border-y dark:border-lime-500/30">
  <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-lime-800 dark:bg-lime-400/20">
          <svg class="h-6 w-6 text-white dark:text-lime-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        </span>
        <p class="ml-3 font-medium text-white dark:text-gray-200 truncate">
          <span class="md:hidden">New podcast episode!</span>
          <span class="hidden md:inline">Big news! We're excited to announce a new podcast episode.</span>
        </p>
      </div>
      <div class="order-3 mt-2 shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <a href="#" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-lime-600 dark:text-gray-900 bg-white dark:bg-lime-300 hover:bg-lime-50 dark:hover:bg-lime-400">
          Listen now
        </a>
      </div>
      <div class="order-2 shrink-0 sm:order-3 sm:ml-3">
        <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-lime-500 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-lime-300 sm:-mr-2">
          <span class="sr-only">Dismiss</span>
          <svg class="h-6 w-6 text-white dark:text-gray-400 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'banner-centered-dismissible',
      name: 'Centered Dismissible Banner',
      code: `<div class="relative bg-lime-300 dark:bg-lime-400/10 dark:border-b dark:border-lime-400/20">
  <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="pr-16 sm:text-center sm:px-16">
      <p class="font-medium text-gray-700 dark:text-gray-300">
        <span class="md:hidden">We announced a new product!</span>
        <span class="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
        <span class="block sm:ml-2 sm:inline-block">
          <a href="#" class="text-gray-700 dark:text-lime-300 font-bold underline"> Learn more <span aria-hidden="true">&rarr;</span></a>
        </span>
      </p>
    </div>
    <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
      <button type="button" class="flex p-2 rounded-md hover:bg-lime-400 dark:hover:bg-lime-400/20 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-lime-300">
        <span class="sr-only">Dismiss</span>
        <svg class="h-6 w-6 text-gray-700 dark:text-gray-400 dark:hover:text-lime-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'banner-minimal',
      name: 'Minimal Banner',
      code: `<div class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
  <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <p class="font-medium text-sm text-gray-700 dark:text-gray-300 truncate">
          <span class="md:hidden">We announced a new product!</span>
          <span class="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
        </p>
      </div>
      <div class="order-3 mt-2 shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <a href="#" class="text-sm font-medium text-lime-600 dark:text-lime-300 hover:text-lime-700 dark:hover:text-lime-200 hover:underline">
          Learn more &rarr;
        </a>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'banner-soft',
      name: 'Soft Alert Banner',
      code: `<div class="bg-lime-50 dark:bg-lime-400/10 border-l-4 border-lime-500 dark:border-lime-400 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-lime-400 dark:text-lime-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-lime-700 dark:text-lime-300">
        A new software update is available. See what's new in version 2.0.4.
      </p>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    }
  ],
};
