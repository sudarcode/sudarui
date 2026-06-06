import { ComponentType } from '../types';
import { IconListNumbers } from '@tabler/icons-react';

export const steppers: ComponentType = {
  slug: 'steppers',
  name: 'Steppers',
  icon: <IconListNumbers stroke={1.5} />,
  description: 'Step-by-step progress indicators and wizards for multi-step processes.',
  variants: [
    {
      id: 'simple-horizontal',
      name: 'Simple Horizontal',
      code: `
<div class="w-full py-6 px-4">
  <div class="flex items-center">
    <!-- Completed Step -->
    <div class="flex items-center text-lime-600 dark:text-lime-400 relative">
      <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-lime-600 dark:border-lime-400 bg-lime-50 dark:bg-lime-900/30 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-16 w-32 text-center text-xs font-semibold uppercase text-lime-600 dark:text-lime-400">Account</div>
    </div>
    <!-- Line -->
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-lime-600 dark:border-lime-400 mx-2"></div>
    
    <!-- Active Step -->
    <div class="flex items-center text-white dark:text-gray-900 relative">
      <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-lime-600 dark:border-lime-400 bg-lime-600 dark:bg-lime-400 shadow-[0_0_0_4px_rgba(132,204,22,0.2)] dark:shadow-[0_0_0_4px_rgba(163,230,53,0.15)] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      </div>
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-16 w-32 text-center text-xs font-semibold uppercase text-gray-900 dark:text-white">Profile</div>
    </div>
    <!-- Line -->
    <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-200 dark:border-gray-700 mx-2"></div>
    
    <!-- Inactive Step -->
    <div class="flex items-center text-gray-400 dark:text-gray-500 relative">
      <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
      </div>
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-16 w-32 text-center text-xs font-semibold uppercase text-gray-400 dark:text-gray-500">Payment</div>
    </div>
  </div>
</div>
      `.trim(),
    },
    {
      id: 'numbered-horizontal',
      name: 'Numbered Horizontal with Path',
      code: `
<ol class="flex items-center w-full px-4 text-sm font-medium text-center sm:text-base">
  <li class="flex md:w-full items-center text-lime-600 dark:text-lime-400 sm:after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-lime-200 dark:after:border-lime-900 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8">
    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-600">
      <svg class="w-4 h-4 sm:w-5 sm:h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
      </svg>
      Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
    </span>
  </li>
  <li class="flex md:w-full items-center text-lime-600 dark:text-lime-400 sm:after:content-[''] after:w-full after:h-1 after:border-b-2 after:border-gray-200 dark:after:border-gray-700 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8">
    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-600">
      <span class="me-2 flex justify-center items-center w-7 h-7 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 rounded-full text-sm font-bold ring-4 ring-lime-100 dark:ring-lime-900/50">2</span>
      Account <span class="hidden sm:inline-flex sm:ms-2 text-gray-900 dark:text-white">Info</span>
    </span>
  </li>
  <li class="flex items-center text-gray-500 dark:text-gray-400">
    <span class="me-2 flex justify-center items-center w-7 h-7 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-semibold">3</span>
    Confirmation
  </li>
</ol>
      `.trim(),
    },
    {
      id: 'vertical-stepper',
      name: 'Vertical Timeline',
      code: `
<div class="px-6 py-4">
  <ol class="relative text-gray-500 dark:text-gray-400 border-s-2 border-gray-200 dark:border-gray-700 ml-3">                  
    <li class="mb-10 ms-8">
      <span class="absolute flex items-center justify-center w-8 h-8 bg-lime-100 dark:bg-lime-900/50 rounded-full -start-[17px] ring-4 ring-white dark:ring-gray-900">
        <svg class="w-4 h-4 text-lime-600 dark:text-lime-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
        </svg>
      </span>
      <h3 class="font-bold text-gray-900 dark:text-white leading-tight">Project Details</h3>
      <p class="text-sm mt-1 text-gray-500 dark:text-gray-400">Provide the core details of your project.</p>
    </li>
    <li class="mb-10 ms-8">
      <span class="absolute flex items-center justify-center w-8 h-8 bg-lime-600 dark:bg-lime-400 rounded-full -start-[17px] ring-4 ring-white dark:ring-gray-900 shadow-[0_0_0_4px_rgba(132,204,22,0.15)] dark:shadow-[0_0_0_4px_rgba(163,230,53,0.15)]">
        <span class="text-white dark:text-gray-900 text-sm font-bold">2</span>
      </span>
      <h3 class="font-bold text-lime-600 dark:text-lime-400 leading-tight">Team Members</h3>
      <p class="text-sm mt-1 text-gray-600 dark:text-gray-300">Invite your team to collaborate.</p>
    </li>
    <li class="ms-8">
      <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full -start-[17px] ring-4 ring-white dark:ring-gray-900">
        <span class="text-gray-500 dark:text-gray-400 text-sm font-semibold">3</span>
      </span>
      <h3 class="font-medium text-gray-500 dark:text-gray-400 leading-tight">Review & Launch</h3>
      <p class="text-sm mt-1 text-gray-400 dark:text-gray-500">Final checks before going live.</p>
    </li>
  </ol>
</div>
      `.trim(),
    },
    {
      id: 'progress-bar-stepper',
      name: 'Progress Bar Stepper',
      code: `
<div class="w-full max-w-lg mx-auto p-4">
  <div class="flex justify-between items-end mb-2">
    <div>
      <p class="text-sm font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-wider">Step 2 of 4</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-1">Billing Information</h3>
    </div>
    <span class="text-sm font-bold text-gray-500 dark:text-gray-400">50%</span>
  </div>
  <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
    <div class="bg-lime-500 dark:bg-lime-400 h-3 rounded-full relative" style="width: 50%">
      <div class="absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded-full">
        <div class="w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress_1s_linear_infinite]"></div>
      </div>
    </div>
  </div>
  <div class="flex justify-between mt-4 text-xs font-medium text-gray-400 dark:text-gray-500">
    <span class="text-lime-600 dark:text-lime-400">Cart</span>
    <span class="text-gray-900 dark:text-white">Billing</span>
    <span>Shipping</span>
    <span>Payment</span>
  </div>
</div>
      `.trim(),
    },
    {
      id: 'panels-stepper',
      name: 'Interactive Panels',
      code: `
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-4">
  <div class="p-5 border-2 border-lime-500 dark:border-lime-400 rounded-xl bg-lime-50/50 dark:bg-lime-900/20 flex flex-col gap-3 relative overflow-hidden transition-all hover:shadow-md cursor-pointer">
    <div class="absolute top-0 right-0 p-3">
      <svg class="w-5 h-5 text-lime-500 dark:text-lime-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="bg-lime-100 dark:bg-lime-900/50 text-lime-700 dark:text-lime-300 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg">1</div>
    <div>
      <h4 class="text-lime-900 dark:text-lime-300 font-bold text-lg">Application</h4>
      <p class="text-sm text-lime-700/80 dark:text-lime-400/80 mt-1">Submit your details</p>
    </div>
  </div>
  
  <div class="p-5 border-2 border-lime-500 dark:border-lime-400 rounded-xl bg-white dark:bg-gray-800 flex flex-col gap-3 shadow-lg shadow-lime-100/50 dark:shadow-lime-900/20 relative transform md:-translate-y-1 transition-all cursor-pointer">
    <div class="bg-lime-500 dark:bg-lime-400 text-white dark:text-gray-900 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg shadow-sm">2</div>
    <div>
      <h4 class="text-gray-900 dark:text-white font-bold text-lg">Interview</h4>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Schedule a call with us</p>
    </div>
  </div>
  
  <div class="p-5 border-2 border-gray-100 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex flex-col gap-3 opacity-70 transition-all hover:opacity-100 cursor-not-allowed">
    <div class="bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg">3</div>
    <div>
      <h4 class="text-gray-400 dark:text-gray-500 font-bold text-lg">Offer</h4>
      <p class="text-sm text-gray-400 dark:text-gray-500 mt-1">Review the proposal</p>
    </div>
  </div>
</div>
      `.trim(),
    },
    {
      id: 'minimal-dots',
      name: 'Minimal Dot Timeline',
      code: `
<div class="w-full px-8 py-10 max-w-3xl mx-auto">
  <div class="flex items-center w-full justify-between relative">
    <!-- Background Track -->
    <div class="absolute left-0 top-4 transform -translate-y-1/2 w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
    <!-- Progress Track -->
    <div class="absolute left-0 top-4 transform -translate-y-1/2 w-[50%] h-1 bg-lime-500 dark:bg-lime-400 rounded-full transition-all duration-500"></div>
    
    <!-- Step 1: Completed -->
    <div class="flex flex-col items-center relative z-10 w-1/4">
      <div class="w-8 h-8 rounded-full bg-lime-500 dark:bg-lime-400 border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-sm transition-transform hover:scale-110 cursor-pointer">
        <svg class="w-4 h-4 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <span class="mt-3 text-sm font-bold text-gray-900 dark:text-white">Cart</span>
    </div>
    
    <!-- Step 2: Completed -->
    <div class="flex flex-col items-center relative z-10 w-1/4">
      <div class="w-8 h-8 rounded-full bg-lime-500 dark:bg-lime-400 border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-sm transition-transform hover:scale-110 cursor-pointer">
        <svg class="w-4 h-4 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <span class="mt-3 text-sm font-bold text-gray-900 dark:text-white">Details</span>
    </div>
    
    <!-- Step 3: Active -->
    <div class="flex flex-col items-center relative z-10 w-1/4">
      <div class="w-8 h-8 rounded-full bg-lime-500 dark:bg-lime-400 border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-md ring-4 ring-lime-50 dark:ring-lime-900/50 transition-transform scale-110 cursor-pointer">
        <div class="w-2.5 h-2.5 bg-white dark:bg-gray-900 rounded-full"></div>
      </div>
      <span class="mt-3 text-sm font-bold text-lime-600 dark:text-lime-400">Payment</span>
    </div>
    
    <!-- Step 4: Pending -->
    <div class="flex flex-col items-center relative z-10 w-1/4">
      <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-sm transition-transform hover:scale-110 cursor-pointer">
      </div>
      <span class="mt-3 text-sm font-medium text-gray-400 dark:text-gray-500">Review</span>
    </div>
  </div>
</div>
      `.trim(),
    }
  ]
};
