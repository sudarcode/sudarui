import { IconSparkles } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const feature_sections: ComponentType = {
  slug: 'feature-sections',
  name: 'Feature Sections',
  icon: <IconSparkles stroke={1.5} />,
  description: 'Highlight your product features with these elegant sections',
  variants: [
    {
      id: 'feature-section-simple-grid',
      name: 'Simple Grid',
      code: `<div class="py-16 bg-white dark:bg-gray-900 w-full">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-base font-semibold text-lime-600 dark:text-lime-400 tracking-wide uppercase">Features</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Everything you need to build faster
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
        A complete toolkit for developers who want to ship high-quality products without the hassle.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Feature 1 -->
      <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
        <div class="w-12 h-12 bg-lime-100 dark:bg-lime-900/30 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
        <p class="text-gray-600 dark:text-gray-400">Optimized for performance to ensure your application loads instantly and runs smoothly.</p>
      </div>
      <!-- Feature 2 -->
      <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
        <div class="w-12 h-12 bg-lime-100 dark:bg-lime-900/30 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Secure by Default</h3>
        <p class="text-gray-600 dark:text-gray-400">Enterprise-grade security features built-in to keep your users' data safe and protected.</p>
      </div>
      <!-- Feature 3 -->
      <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
        <div class="w-12 h-12 bg-lime-100 dark:bg-lime-900/30 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Beautiful Design</h3>
        <p class="text-gray-600 dark:text-gray-400">Carefully crafted UI components that look great out of the box and are easy to customize.</p>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'feature-section-alternating',
      name: 'Alternating Content',
      code: `<div class="py-16 bg-white dark:bg-gray-900 w-full overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4">
          Streamline your workflow
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Our intuitive tools help you manage projects more efficiently. Automate repetitive tasks and focus on what really matters to your business.
        </p>
        <ul class="space-y-4">
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 rounded-full bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center mt-1">
              <svg class="h-4 w-4 text-lime-600 dark:text-lime-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
            <p class="ml-3 text-gray-600 dark:text-gray-300">Real-time collaboration across your entire team.</p>
          </li>
          <li class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 rounded-full bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center mt-1">
              <svg class="h-4 w-4 text-lime-600 dark:text-lime-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
            <p class="ml-3 text-gray-600 dark:text-gray-300">Automated reporting and analytics dashboards.</p>
          </li>
        </ul>
      </div>
      <div class="relative">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard" class="rounded-2xl shadow-xl w-full object-cover h-80" />
        <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-lime-400/20 dark:bg-lime-500/10 rounded-full blur-2xl"></div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="order-2 lg:order-1 relative">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Analytics" class="rounded-2xl shadow-xl w-full object-cover h-80" />
        <div class="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>
      <div class="order-1 lg:order-2">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4">
          Data-driven decisions
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Gain deep insights into your metrics. Understand user behavior and optimize your strategies based on accurate, real-time data.
        </p>
        <button class="bg-lime-500 hover:bg-lime-600 dark:bg-lime-400 dark:hover:bg-lime-500 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors">
          Explore Analytics
        </button>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'feature-section-2x2-grid',
      name: '2x2 Feature Grid',
      code: `<div class="py-16 bg-gray-50 dark:bg-gray-800/50 w-full">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
        Powerful features for power users
      </h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Everything you need to scale your application without writing boilerplate code.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
      <!-- Feature 1 -->
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-sm text-lime-600 dark:text-lime-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
        </div>
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Global CDN</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Deliver your content faster to users anywhere in the world with our globally distributed edge network.</p>
        </div>
      </div>
      <!-- Feature 2 -->
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-sm text-lime-600 dark:text-lime-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">End-to-End Encryption</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Your data is encrypted at rest and in transit, ensuring maximum security for your users.</p>
        </div>
      </div>
      <!-- Feature 3 -->
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-sm text-lime-600 dark:text-lime-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        </div>
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Developer API</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Integrate seamlessly with your existing stack using our robust and well-documented REST API.</p>
        </div>
      </div>
      <!-- Feature 4 -->
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-sm text-lime-600 dark:text-lime-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Instant Scaling</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Automatically handle traffic spikes without manual intervention. Scale from zero to millions.</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'feature-section-bento-grid',
      name: 'Bento Grid',
      code: `<div class="py-16 bg-white dark:bg-gray-900 w-full">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Do more with less.</h2>
      <p class="text-gray-600 dark:text-gray-400 mt-2 text-lg">A unified platform for all your development needs.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
      <!-- Large Item -->
      <div class="md:col-span-2 md:row-span-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 relative overflow-hidden group">
        <div class="relative z-10">
          <span class="px-3 py-1 bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300 text-xs font-semibold rounded-full mb-4 inline-block">Analytics</span>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Real-time Insights</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">Monitor your application's performance and user behavior with our comprehensive dashboard.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard" class="absolute -right-10 -bottom-10 w-3/4 rounded-tl-2xl shadow-2xl border-t border-l border-white/50 dark:border-gray-700/50 group-hover:scale-105 transition-transform duration-500" />
      </div>
      
      <!-- Small Item 1 -->
      <div class="md:col-span-2 md:row-span-1 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between group gap-4">
        <div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Automated Deployments</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">Push to main and let our CI/CD pipeline handle the rest seamlessly.</p>
        </div>
        <div class="w-16 h-16 bg-lime-50 dark:bg-lime-900/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <svg class="w-8 h-8 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </div>
      </div>

      <!-- Small Item 2 -->
      <div class="md:col-span-1 md:row-span-1 bg-lime-500 dark:bg-lime-400 rounded-3xl p-6 shadow-sm text-white dark:text-gray-900 flex flex-col justify-between">
        <svg class="w-8 h-8 opacity-80 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        <div>
          <h3 class="text-lg font-bold mb-1">Bank-grade Security</h3>
          <p class="text-white/80 dark:text-gray-800/80 text-sm">Your data is safe with us.</p>
        </div>
      </div>

      <!-- Small Item 3 -->
      <div class="md:col-span-1 md:row-span-1 bg-gray-900 dark:bg-gray-800 rounded-3xl p-6 shadow-sm text-white flex flex-col justify-between border border-gray-800 dark:border-gray-700">
        <svg class="w-8 h-8 text-lime-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        <div>
          <h3 class="text-lg font-bold mb-1">Ultra Fast</h3>
          <p class="text-gray-400 text-sm">Optimized for speed.</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'feature-section-card-grid',
      name: 'Hover Cards Grid',
      code: `<div class="py-16 bg-gray-50 dark:bg-gray-900 w-full">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Why choose our platform?</h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Built with performance and developer experience in mind from day one.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Card 1 -->
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-400 transition-colors group">
        <div class="w-14 h-14 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-500 group-hover:text-white dark:group-hover:bg-lime-400 dark:group-hover:text-gray-900 text-gray-900 dark:text-white transition-colors">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Microservices</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Build robust applications using a scalable microservices architecture.</p>
      </div>
      <!-- Card 2 -->
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-400 transition-colors group">
        <div class="w-14 h-14 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-500 group-hover:text-white dark:group-hover:bg-lime-400 dark:group-hover:text-gray-900 text-gray-900 dark:text-white transition-colors">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Database sync</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Keep your data synchronized across multiple regions instantly.</p>
      </div>
      <!-- Card 3 -->
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-400 transition-colors group">
        <div class="w-14 h-14 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-500 group-hover:text-white dark:group-hover:bg-lime-400 dark:group-hover:text-gray-900 text-gray-900 dark:text-white transition-colors">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Advanced Auth</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Secure your app with passwordless logins and role-based access.</p>
      </div>
      <!-- Card 4 -->
      <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-lime-500 dark:hover:border-lime-400 transition-colors group">
        <div class="w-14 h-14 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-500 group-hover:text-white dark:group-hover:bg-lime-400 dark:group-hover:text-gray-900 text-gray-900 dark:text-white transition-colors">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Analytics</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Get detailed insights into your application's usage and performance.</p>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'feature-section-dark-panel',
      name: 'Dark Highlight Panel',
      code: `<div class="py-16 bg-white dark:bg-gray-900 w-full">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-gray-900 dark:bg-gray-800 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
      <!-- Decorative background elements -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-lime-500/20 dark:bg-lime-400/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      
      <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Ready to supercharge your workflow?
          </h2>
          <p class="text-lg text-gray-400 mb-8">
            Join thousands of developers who are already using our platform to build better software faster and more reliably.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-lime-500 hover:bg-lime-600 dark:bg-lime-400 dark:hover:bg-lime-500 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors text-center">
              Start Free Trial
            </button>
            <button class="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-semibold transition-colors text-center">
              View Documentation
            </button>
          </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <svg class="w-8 h-8 text-lime-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 class="text-lg font-bold text-white mb-2">Save Time</h3>
            <p class="text-sm text-gray-400">Reduce development time by up to 50% with pre-built components.</p>
          </div>
          <div class="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm mt-0 sm:mt-8">
            <svg class="w-8 h-8 text-lime-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            <h3 class="text-lg font-bold text-white mb-2">Increase ROI</h3>
            <p class="text-sm text-gray-400">Maximize your return on investment quickly and efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    }
  ],
};
