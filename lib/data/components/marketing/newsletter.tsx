import { IconMail } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const newsletter: ComponentType = {
  slug: 'newsletter',
  name: 'Newsletter',
  icon: <IconMail stroke={1.5} />,
  description: 'Newsletter subscription sections and forms',
  variants: [
    {
      id: 'newsletter-simple-centered',
      name: 'Simple Centered',
      code: `<section class="py-16 px-6 bg-white dark:bg-gray-950">
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Subscribe to our Newsletter</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-8">Get the latest news and articles to your inbox every month.</p>
    <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input type="email" placeholder="Enter your email" required class="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 transition-shadow" />
      <button type="submit" class="px-6 py-3 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-lime-700 dark:hover:bg-lime-300 transition-colors whitespace-nowrap">
        Subscribe
      </button>
    </form>
    <p class="mt-4 text-sm text-gray-500 dark:text-gray-500">We care about your data. Read our <a href="#" class="text-lime-600 dark:text-lime-400 hover:underline">Privacy Policy</a>.</p>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'newsletter-split',
      name: 'Side-by-Side Split',
      code: `<section class="py-16 px-6 bg-lime-50 dark:bg-lime-900/10">
  <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    <div class="flex-1 lg:max-w-xl text-center lg:text-left">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Sign up for our newsletter</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
    </div>
    <div class="w-full lg:max-w-md">
      <form class="flex flex-col sm:flex-row gap-3">
        <input type="email" placeholder="Enter your email" required class="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 transition-shadow" />
        <button type="submit" class="px-6 py-3 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-lime-700 dark:hover:bg-lime-300 transition-colors whitespace-nowrap shadow-sm">
          Subscribe
        </button>
      </form>
      <p class="mt-3 text-sm text-gray-500 text-center sm:text-left">No spam. Unsubscribe anytime.</p>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'newsletter-gradient-card',
      name: 'Gradient Background Card',
      code: `<section class="py-16 px-6">
  <div class="max-w-4xl mx-auto rounded-3xl p-8 md:p-16 bg-lime-600 dark:bg-gray-900 relative overflow-hidden shadow-xl">
    <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-lime-500 dark:bg-lime-900/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    <div class="relative z-10 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Get notified when we launch</h2>
      <p class="text-lime-100 dark:text-gray-400 mb-8 max-w-xl mx-auto">Be the first to know about our new features, updates, and exclusive early-bird offers.</p>
      <form class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <input type="email" placeholder="Email address" required class="flex-1 px-4 py-4 rounded-xl border-0 bg-white/10 dark:bg-gray-800 text-white placeholder-lime-100/70 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-lime-400 transition-shadow backdrop-blur-sm" />
        <button type="submit" class="px-8 py-4 bg-white dark:bg-lime-400 text-lime-700 dark:text-gray-900 font-bold rounded-xl hover:bg-lime-50 dark:hover:bg-lime-300 transition-colors whitespace-nowrap">
          Notify me
        </button>
      </form>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'newsletter-image-split',
      name: 'Split Card with Image',
      code: `<section class="py-16 px-6 bg-gray-50 dark:bg-gray-950">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
    <div class="md:w-5/12 hidden md:block relative">
      <img src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80" alt="Newsletter" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-lime-600/20 mix-blend-multiply"></div>
    </div>
    <div class="p-8 md:p-12 md:w-7/12 flex flex-col justify-center">
      <div class="w-12 h-12 bg-lime-100 dark:bg-lime-900/30 rounded-xl flex items-center justify-center mb-6 text-lime-600 dark:text-lime-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>
      </div>
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Weekly tips & tricks</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-6">Join 10,000+ designers and developers who receive our weekly curated content directly in their inbox.</p>
      <form class="flex flex-col gap-3">
        <input type="email" placeholder="Your email address" required class="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 transition-shadow" />
        <button type="submit" class="w-full py-3 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-lime-700 dark:hover:bg-lime-300 transition-colors">
          Subscribe now
        </button>
      </form>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'newsletter-features',
      name: 'Inline with Features',
      code: `<section class="py-20 px-6 bg-white dark:bg-gray-950">
  <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
    <div class="lg:w-1/2">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Stay ahead of the curve.</h2>
      <ul class="space-y-4 text-gray-600 dark:text-gray-400">
        <li class="flex items-center gap-3">
          <div class="flex-shrink-0 w-6 h-6 rounded-full bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span>Weekly curated resources</span>
        </li>
        <li class="flex items-center gap-3">
          <div class="flex-shrink-0 w-6 h-6 rounded-full bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span>Exclusive community access</span>
        </li>
        <li class="flex items-center gap-3">
          <div class="flex-shrink-0 w-6 h-6 rounded-full bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span>Early access to new features</span>
        </li>
      </ul>
    </div>
    <div class="lg:w-1/2 w-full max-w-md p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Join the newsletter</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-6 text-sm">No spam, just the good stuff. Unsubscribe at any time.</p>
      <form class="space-y-4">
        <div>
          <label for="name" class="sr-only">First name</label>
          <input type="text" id="name" placeholder="First name" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 transition-shadow" />
        </div>
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input type="email" id="email" placeholder="Email address" required class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 transition-shadow" />
        </div>
        <button type="submit" class="w-full py-3 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-lime-700 dark:hover:bg-lime-300 transition-colors shadow-sm">
          Join Now
        </button>
      </form>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'newsletter-minimal-bordered',
      name: 'Minimal Bordered',
      code: `<section class="py-16 px-6 bg-white dark:bg-gray-950">
  <div class="max-w-3xl mx-auto border-t-4 border-lime-600 dark:border-lime-400 bg-white dark:bg-gray-900 rounded-xl shadow-lg border-x border-b border-gray-100 dark:border-gray-800 p-8 md:p-12 text-center">
    <div class="inline-flex items-center justify-center p-3 bg-lime-50 dark:bg-lime-900/20 rounded-full mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lime-600 dark:text-lime-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    </div>
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Don't miss out on updates</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">Get exclusive content and the latest news delivered directly to your inbox.</p>
    <form class="relative max-w-lg mx-auto">
      <input type="email" placeholder="Enter your email" required class="w-full pl-5 pr-32 py-4 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 transition-shadow" />
      <button type="submit" class="absolute right-2 top-2 bottom-2 px-6 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 font-semibold rounded-full hover:bg-lime-700 dark:hover:bg-lime-300 transition-colors">
        Subscribe
      </button>
    </form>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
  ],
};
