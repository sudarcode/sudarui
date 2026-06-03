import { IconLayoutList } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const accordions: ComponentType = {
  slug: 'accordions',
  name: 'Accordions',
  icon: <IconLayoutList stroke={1.5} />,
  description: 'Vertically collapsing text panels that help organize information.',
  variants: [
    {
      id: 'accordion-basic',
      name: 'Basic Accordion',
      code: `<div class="divide-y divide-gray-200 dark:divide-gray-800 border-y border-gray-200 dark:border-gray-800 max-w-xl mx-auto w-full">
  <details class="group p-4" open>
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden text-gray-900 dark:text-white">
      <span>What is JokoUI?</span>
      <span class="transition group-open:rotate-180 text-gray-500 dark:text-gray-400">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
    </summary>
    <p class="text-gray-500 dark:text-gray-400 mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
      JokoUI is a beautiful, modern, and customizable UI component library built with Tailwind CSS. It is designed to help you build interfaces faster.
    </p>
  </details>
  <details class="group p-4">
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden text-gray-900 dark:text-white">
      <span>How do I install it?</span>
      <span class="transition group-open:rotate-180 text-gray-500 dark:text-gray-400">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
    </summary>
    <p class="text-gray-500 dark:text-gray-400 mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
      You don't need to install any npm packages. You can simply copy and paste the components directly into your project.
    </p>
  </details>
  <details class="group p-4">
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden text-gray-900 dark:text-white">
      <span>Is it open source?</span>
      <span class="transition group-open:rotate-180 text-gray-500 dark:text-gray-400">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
    </summary>
    <p class="text-gray-500 dark:text-gray-400 mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
      Yes, it is completely open source and free to use in both personal and commercial projects.
    </p>
  </details>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'accordion-bordered',
      name: 'Bordered Accordion',
      code: `<div class="space-y-4 max-w-xl mx-auto w-full">
  <details class="group border border-gray-200 dark:border-gray-800 rounded-lg" open>
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden p-4 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg group-open:rounded-b-none group-open:bg-gray-50 dark:group-open:bg-gray-800/50 transition-colors">
      <span>Can I use it for commercial projects?</span>
      <span class="transition group-open:rotate-180">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
    </summary>
    <p class="text-gray-600 dark:text-gray-400 p-4 pt-2 border-t border-gray-200 dark:border-gray-800 animate-in fade-in duration-300">
      Yes, it's completely free for both personal and commercial use. You can use it for your clients as well.
    </p>
  </details>
  <details class="group border border-gray-200 dark:border-gray-800 rounded-lg">
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden p-4 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg group-open:rounded-b-none group-open:bg-gray-50 dark:group-open:bg-gray-800/50 transition-colors">
      <span>Do you offer technical support?</span>
      <span class="transition group-open:rotate-180">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
    </summary>
    <p class="text-gray-600 dark:text-gray-400 p-4 pt-2 border-t border-gray-200 dark:border-gray-800 animate-in fade-in duration-300">
      We offer community support through our Discord channel and GitHub issues.
    </p>
  </details>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'accordion-lime-highlight',
      name: 'Lime Highlight',
      code: `<div class="space-y-4 max-w-xl mx-auto w-full">
  <details class="group bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden" open>
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden p-4 text-gray-900 dark:text-white border-l-4 border-transparent group-open:border-lime-500 dark:group-open:border-lime-300 transition-all">
      <span>How frequently is JokoUI updated?</span>
      <span class="transition group-open:rotate-180 text-gray-400 group-open:text-lime-500 dark:group-open:text-lime-300">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
    </summary>
    <div class="border-l-4 border-lime-500 dark:border-lime-300">
      <p class="text-gray-600 dark:text-gray-400 p-4 pt-0 animate-in fade-in duration-300">
        We release new updates bi-weekly. This includes new components, bug fixes, and improvements to existing ones.
      </p>
    </div>
  </details>
  <details class="group bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden p-4 text-gray-900 dark:text-white border-l-4 border-transparent group-open:border-lime-500 dark:group-open:border-lime-300 transition-all">
      <span>Are the components responsive?</span>
      <span class="transition group-open:rotate-180 text-gray-400 group-open:text-lime-500 dark:group-open:text-lime-300">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
    </summary>
    <div class="border-l-4 border-lime-500 dark:border-lime-300">
      <p class="text-gray-600 dark:text-gray-400 p-4 pt-0 animate-in fade-in duration-300">
        Yes, all components are fully responsive and designed using a mobile-first approach.
      </p>
    </div>
  </details>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'accordion-lime-accent',
      name: 'Lime Soft Accent',
      code: `<div class="w-full max-w-xl mx-auto bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
  <details class="group" open>
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden p-5 text-gray-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 group-open:bg-lime-50 dark:group-open:bg-lime-900/20 group-open:text-lime-700 dark:group-open:text-lime-300 transition-colors">
      <span>Is there a Figma file available?</span>
      <span class="transition group-open:rotate-180">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
    </summary>
    <div class="px-5 pb-5 pt-2 text-gray-600 dark:text-gray-400 bg-lime-50 dark:bg-lime-900/20">
      <div class="animate-in fade-in slide-in-from-top-2 duration-300">
        Yes, a comprehensive Figma design system is included for our premium users.
      </div>
    </div>
  </details>
  <div class="h-[1px] bg-gray-200 dark:bg-gray-800"></div>
  <details class="group">
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden p-5 text-gray-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 group-open:bg-lime-50 dark:group-open:bg-lime-900/20 group-open:text-lime-700 dark:group-open:text-lime-300 transition-colors">
      <span>Can I use it with React or Vue?</span>
      <span class="transition group-open:rotate-180">
        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
    </summary>
    <div class="px-5 pb-5 pt-2 text-gray-600 dark:text-gray-400 bg-lime-50 dark:bg-lime-900/20">
      <div class="animate-in fade-in slide-in-from-top-2 duration-300">
        Since the components are pure HTML/Tailwind, you can easily adapt them to any framework of your choice including React, Vue, Angular, and Svelte.
      </div>
    </div>
  </details>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'accordion-plus-minus',
      name: 'Plus / Minus Icon',
      code: `<div class="divide-y divide-gray-200 dark:divide-gray-800 max-w-xl mx-auto w-full">
  <details class="group py-4" open>
    <summary class="flex items-center gap-3 font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden text-gray-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
      <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-lime-100 dark:bg-lime-900/40 text-lime-600 dark:text-lime-400 group-open:hidden transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      </span>
      <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-lime-500 dark:bg-lime-400 text-white dark:text-gray-900 hidden group-open:flex transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
      </span>
      <span>What's the difference from other UI libraries?</span>
    </summary>
    <p class="text-gray-600 dark:text-gray-400 mt-3 pl-9 animate-in fade-in duration-300">
      JokoUI focuses on beautiful, accessible, and easily customizable components without the overhead of heavy npm packages. It relies on standard Tailwind CSS classes.
    </p>
  </details>
  <details class="group py-4">
    <summary class="flex items-center gap-3 font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden text-gray-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
      <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-lime-100 dark:bg-lime-900/40 text-lime-600 dark:text-lime-400 group-open:hidden transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      </span>
      <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-lime-500 dark:bg-lime-400 text-white dark:text-gray-900 hidden group-open:flex transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
      </span>
      <span>Are there any dependencies?</span>
    </summary>
    <p class="text-gray-600 dark:text-gray-400 mt-3 pl-9 animate-in fade-in duration-300">
      The only dependency is Tailwind CSS. You don't need any complex setup or additional libraries to make JokoUI work.
    </p>
  </details>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'accordion-elevated-icons',
      name: 'Elevated & Icons',
      code: `<div class="space-y-4 max-w-xl mx-auto w-full">
  <details class="group bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800" open>
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden p-5 text-gray-900 dark:text-white">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-300">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <span>Lightning fast performance</span>
      </div>
      <div class="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-open:bg-lime-500 dark:group-open:bg-lime-300 group-open:border-lime-500 dark:group-open:border-lime-300 group-open:text-white dark:group-open:text-gray-900 transition-all">
        <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </summary>
    <p class="text-gray-600 dark:text-gray-400 px-5 pb-5 pt-1 pl-[3.75rem] animate-in fade-in duration-300">
      Optimized for speed and minimal bundle size. Built with modern web standards in mind, ensuring your application runs smoothly.
    </p>
  </details>
  <details class="group bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">
    <summary class="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden p-5 text-gray-900 dark:text-white">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-300">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>
        <span>High Security Standards</span>
      </div>
      <div class="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-open:bg-lime-500 dark:group-open:bg-lime-300 group-open:border-lime-500 dark:group-open:border-lime-300 group-open:text-white dark:group-open:text-gray-900 transition-all">
        <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </summary>
    <p class="text-gray-600 dark:text-gray-400 px-5 pb-5 pt-1 pl-[3.75rem] animate-in fade-in duration-300">
      Built following best practices to ensure your data is always secure. We conduct regular security audits and updates.
    </p>
  </details>
</div>`,
      contributor: 'rayasabari',
    },
  ],
};
