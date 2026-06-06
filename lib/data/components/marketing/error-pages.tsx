import { IconAlertTriangle } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const error_pages: ComponentType = {
  slug: 'error-pages',
  name: 'Error Pages',
  icon: <IconAlertTriangle stroke={1.5} />,
  description: 'Error pages for 404, 500, and other error states',
  variants: [
    {
      id: 'error-simple-centered',
      name: 'Simple Centered',
      code: `<section class="py-24 px-6 bg-white dark:bg-gray-950 flex flex-col items-center justify-center min-h-[60vh]">
  <p class="text-lime-600 dark:text-lime-400 font-semibold text-lg">404</p>
  <h1 class="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Page not found</h1>
  <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400 text-center max-w-md">Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.</p>
  <div class="mt-10 flex items-center justify-center gap-x-6">
    <a href="#" class="rounded-lg bg-lime-600 dark:bg-lime-400 px-5 py-3 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-lime-700 dark:hover:bg-lime-300 transition-colors">Go back home</a>
    <a href="#" class="text-sm font-semibold text-gray-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Contact support <span aria-hidden="true">&rarr;</span></a>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'error-split-image',
      name: 'Split with Image',
      code: `<section class="bg-gray-50 dark:bg-gray-950 min-h-[70vh] flex flex-col lg:flex-row">
  <div class="flex-1 flex flex-col justify-center px-6 py-12 lg:px-20 lg:py-24 bg-white dark:bg-gray-900">
    <div class="max-w-xl">
      <p class="text-base font-semibold leading-8 text-lime-600 dark:text-lime-400">404 Error</p>
      <h1 class="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">We lost this page</h1>
      <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">We searched high and low, but couldn't find what you're looking for. Let's find a better place for you to go.</p>
      <div class="mt-10 flex gap-4">
        <a href="#" class="rounded-lg bg-lime-600 dark:bg-lime-400 px-6 py-3 text-sm font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-lime-700 dark:hover:bg-lime-300 transition-colors">Go home</a>
      </div>
    </div>
  </div>
  <div class="hidden lg:block lg:flex-1 relative">
    <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80" alt="Lost in the forest" />
    <div class="absolute inset-0 bg-lime-900/20 mix-blend-multiply"></div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'error-500-gradient',
      name: '500 Server Error Gradient',
      code: `<section class="py-24 px-6 min-h-[60vh] flex items-center justify-center">
  <div class="max-w-2xl w-full rounded-3xl p-10 md:p-16 bg-lime-600 dark:bg-gray-900 relative overflow-hidden shadow-2xl">
    <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-lime-500 dark:bg-lime-900/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    <div class="relative z-10 text-center">
      <p class="text-lime-200 dark:text-lime-400 font-semibold tracking-wide uppercase">500 Server Error</p>
      <h1 class="mt-4 text-4xl font-bold text-white mb-6">Something went wrong on our end</h1>
      <p class="text-lime-100 dark:text-gray-400 mb-10 max-w-lg mx-auto text-lg">We are experiencing an internal server problem. Our team has been notified and is working on a fix.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="px-8 py-4 bg-white dark:bg-lime-400 text-lime-700 dark:text-gray-900 font-bold rounded-xl hover:bg-lime-50 dark:hover:bg-lime-300 transition-colors">
          Try again
        </button>
        <button class="px-8 py-4 bg-lime-700 dark:bg-gray-800 text-white font-bold rounded-xl hover:bg-lime-800 dark:hover:bg-gray-700 transition-colors border border-lime-500 dark:border-gray-700">
          Status page
        </button>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'error-search',
      name: '404 with Search',
      code: `<section class="py-24 px-6 bg-white dark:bg-gray-950 flex flex-col items-center justify-center min-h-[60vh]">
  <div class="max-w-xl text-center">
    <div class="inline-flex items-center justify-center p-4 bg-lime-50 dark:bg-lime-900/20 rounded-full mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lime-600 dark:text-lime-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </div>
    <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Page not found</h1>
    <p class="text-gray-600 dark:text-gray-400 mb-8">We couldn't find the page you are looking for. Try searching our site.</p>
    <form class="flex flex-col sm:flex-row w-full gap-2">
      <input type="text" placeholder="Search..." required class="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 transition-shadow" />
      <button type="submit" class="px-6 py-3 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-lime-700 dark:hover:bg-lime-300 transition-colors">
        Search
      </button>
    </form>
    <div class="mt-8">
      <a href="#" class="text-lime-600 dark:text-lime-400 hover:underline font-medium">Or go back to the homepage &rarr;</a>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'error-minimal-bordered',
      name: 'Minimal Bordered 404',
      code: `<section class="py-24 px-6 bg-gray-50 dark:bg-gray-950 flex justify-center items-center min-h-[60vh]">
  <div class="w-full max-w-lg border-t-4 border-lime-600 dark:border-lime-400 bg-white dark:bg-gray-900 rounded-xl shadow-lg border-x border-b border-gray-100 dark:border-gray-800 p-8 md:p-12 text-center">
    <p class="text-6xl font-black text-gray-200 dark:text-gray-800 mb-4">404</p>
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Oops! Page missing</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-8">The link you followed may be broken, or the page may have been removed.</p>
    <a href="#" class="inline-flex items-center justify-center w-full px-6 py-3 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-lime-700 dark:hover:bg-lime-300 transition-colors">
      Take me home
    </a>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'error-useful-links',
      name: '404 with Useful Links',
      code: `<section class="py-24 px-6 bg-white dark:bg-gray-950 min-h-[70vh] flex flex-col justify-center">
  <div class="max-w-3xl mx-auto w-full">
    <div class="text-center mb-12">
      <p class="text-base font-semibold text-lime-600 dark:text-lime-400">404</p>
      <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">This page does not exist</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">Here are some helpful links to get you back on track:</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <a href="#" class="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-lime-500 dark:hover:border-lime-400 transition-colors">
        <div class="w-10 h-10 rounded-lg bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400 mb-4 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Homepage</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Return to our front page</p>
      </a>
      
      <a href="#" class="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-lime-500 dark:hover:border-lime-400 transition-colors">
        <div class="w-10 h-10 rounded-lg bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400 mb-4 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Documentation</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Read our guides and API docs</p>
      </a>

      <a href="#" class="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-lime-500 dark:hover:border-lime-400 transition-colors">
        <div class="w-10 h-10 rounded-lg bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400 mb-4 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Contact Support</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Get help from our team</p>
      </a>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
  ],
};
