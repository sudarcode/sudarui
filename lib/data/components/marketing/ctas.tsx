import { IconSpeakerphone } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const ctas: ComponentType = {
  slug: 'ctas',
  name: 'CTAs',
  icon: <IconSpeakerphone stroke={1.5} />,
  description: 'Call-to-action sections to drive conversions',
  variants: [
    {
      id: 'cta-simple',
      name: 'Simple CTA',
      code: `<section class="py-16 px-6 bg-lime-600 dark:bg-lime-900/20">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-white dark:text-lime-300 mb-4">Ready to get started?</h2>
    <p class="text-lime-100 dark:text-lime-100/80 mb-8">Join thousands of developers building beautiful websites.</p>
    <a href="#" class="inline-block px-8 py-4 bg-white dark:bg-lime-300 text-lime-600 dark:text-gray-900 font-semibold rounded-lg hover:bg-lime-50 dark:hover:bg-lime-400 transition-colors shadow-lg">
      Get Started Free
    </a>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'cta-split',
      name: 'Split CTA',
      code: `<section class="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    <div>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Start your free trial</h2>
      <p class="text-gray-600 dark:text-gray-400">No credit card required. Cancel anytime.</p>
    </div>
    <div class="flex gap-4">
      <a href="#" class="px-6 py-3 bg-lime-600 dark:bg-lime-300 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-lime-700 dark:hover:bg-lime-400 transition-colors">
        Start Free Trial
      </a>
      <a href="#" class="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        Contact Sales
      </a>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'cta-newsletter',
      name: 'Newsletter CTA',
      code: `<section class="py-16 px-6 bg-lime-600 dark:bg-lime-900/20">
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-white dark:text-lime-300 mb-4">Subscribe to our newsletter</h2>
    <p class="text-lime-100 dark:text-lime-100/80 mb-8">Get the latest components and updates delivered to your inbox.</p>
    <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-900 border border-transparent dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-300 focus:outline-none"/>
      <button type="submit" class="px-6 py-3 bg-gray-900 dark:bg-lime-300 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-lime-400 transition-colors">
        Subscribe
      </button>
    </form>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'cta-image',
      name: 'CTA with Image',
      code: `<section class="py-16 px-6">
  <div class="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-lime-600 dark:bg-gray-900 flex flex-col md:flex-row">
    <div class="p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Boost your productivity. <br/>Start using our app today.</h2>
      <p class="text-lime-100 dark:text-gray-400 mb-8 max-w-md">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <div class="flex gap-4 flex-wrap">
        <a href="#" class="px-6 py-3 bg-white dark:bg-lime-300 text-lime-600 dark:text-gray-900 font-semibold rounded-lg hover:bg-lime-50 dark:hover:bg-lime-400 transition-colors">
          Get started
        </a>
        <a href="#" class="px-6 py-3 text-white font-semibold hover:text-lime-100 dark:hover:text-lime-300 transition-colors flex items-center gap-2">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
    <div class="flex-1 relative min-h-[300px] md:min-h-full">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team working" class="absolute inset-0 w-full h-full object-cover opacity-90"/>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'cta-cards',
      name: 'Card Based CTA',
      code: `<section class="py-16 px-6 bg-white dark:bg-gray-950">
  <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
    <div class="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to dive in?</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-6">Start your free trial today and experience the full power of our platform.</p>
      <a href="#" class="inline-block px-6 py-3 bg-lime-600 dark:bg-lime-300 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-lime-700 dark:hover:bg-lime-400 transition-colors">
        Start 14-day trial
      </a>
    </div>
    <div class="p-8 rounded-2xl bg-lime-600 dark:bg-lime-900/20 border border-transparent dark:border-lime-900/50 text-white">
      <h3 class="text-2xl font-bold dark:text-lime-300 mb-2">Need a custom plan?</h3>
      <p class="text-lime-100 dark:text-lime-100/80 mb-6">Contact our sales team to get a solution tailored to your enterprise.</p>
      <a href="#" class="inline-block px-6 py-3 bg-white dark:bg-lime-300 text-lime-600 dark:text-gray-900 font-semibold rounded-lg hover:bg-lime-50 dark:hover:bg-lime-400 transition-colors">
        Contact sales
      </a>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'cta-minimal',
      name: 'Minimal CTA',
      code: `<section class="py-24 px-6 bg-white dark:bg-gray-950">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Build something <span class="text-lime-600 dark:text-lime-300">amazing</span> today.</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">Join the thousands of creators who are already turning their ideas into reality.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#" class="px-8 py-3 bg-lime-600 dark:bg-lime-300 text-white dark:text-gray-900 font-semibold rounded-full hover:bg-lime-700 dark:hover:bg-lime-400 transition-colors">
        Create free account
      </a>
      <a href="#" class="px-8 py-3 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
        View pricing
      </a>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'cta-app',
      name: 'App Download CTA',
      code: `<section class="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
  <div class="max-w-4xl mx-auto text-center bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-16 shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800">
    <div class="w-16 h-16 bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
    </div>
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get the mobile app</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">Experience the full power of our platform on the go. Download the app for iOS or Android and stay connected wherever you are.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#" class="flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 21.434c-1.353 1.134-2.222.753-3.414.281-1.282-.507-2.671-1.077-4.103.268-3.082 2.894-6.398-4.225-4.475-7.469 1.488-2.515 3.931-2.909 5.215-2.617 1.258.286 2.057.854 2.895.836 1.054-.022 2.148-.718 3.518-.584 2.179.213 3.57 1.391 4.195 2.656-3.238 1.838-2.548 6.009.68 7.027-1.124 1.898-2.636 4.123-4.511 2.602zm-5.064-14.732c-.089-2.673 2.179-4.702 4.61-4.702.392 2.802-2.593 4.962-4.61 4.702z"/></svg>
        <div class="text-left">
          <div class="text-xs font-medium opacity-80">Download on the</div>
          <div class="text-sm font-bold">App Store</div>
        </div>
      </a>
      <a href="#" class="flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341l2.368 4.104c.162.281.066.643-.215.805-.281.162-.643.066-.805-.215l-2.42-4.192c-1.378.601-2.883.945-4.471.945-1.588 0-3.093-.344-4.471-.945l-2.42 4.192c-.162.281-.524.377-.805.215-.281-.162-.377-.524-.215-.805l2.368-4.104c-3.14-1.745-5.267-4.996-5.419-8.777h17.924c-.152 3.781-2.279 7.032-5.419 8.777zm-9.523-2.341c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm8 0c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z"/></svg>
        <div class="text-left">
          <div class="text-xs font-medium opacity-80">GET IT ON</div>
          <div class="text-sm font-bold">Google Play</div>
        </div>
      </a>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
  ],
};
