import { IconPremiumRights } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const pricing: ComponentType = {
  slug: 'pricing',
  name: 'Pricing',
  icon: <IconPremiumRights stroke={1.5} />,
  description: 'Pricing tables and cards for SaaS products',
  variants: [
    {
      id: 'pricing-simple',
      name: 'Simple Pricing',
      code: `<div class="max-w-sm mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Pro Plan</h3>
  <p class="text-gray-600 dark:text-gray-400 mb-6">For growing businesses</p>
  <div class="mb-6">
    <span class="text-5xl font-bold text-gray-900 dark:text-white">$29</span>
    <span class="text-gray-600 dark:text-gray-400">/month</span>
  </div>
  <ul class="space-y-3 mb-8">
    <li class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
      <svg class="w-5 h-5 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      Unlimited projects
    </li>
    <li class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
      <svg class="w-5 h-5 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      Priority support
    </li>
    <li class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
      <svg class="w-5 h-5 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      Advanced analytics
    </li>
  </ul>
  <button class="w-full py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 dark:bg-lime-400 dark:text-gray-900 dark:hover:bg-lime-500 transition-colors">
    Get Started
  </button>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'pricing-featured',
      name: 'Featured Pricing',
      code: `<div class="max-w-sm mx-auto relative">
  <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-lime-600 to-lime-500 dark:from-lime-400 dark:to-lime-300 text-white dark:text-gray-900 text-sm font-medium rounded-full">
    Most Popular
  </div>
  <div class="p-8 bg-gradient-to-br from-lime-600 to-lime-700 dark:from-lime-400 dark:to-lime-500 rounded-2xl shadow-2xl">
    <h3 class="text-xl font-semibold text-white dark:text-gray-900 mb-2">Enterprise</h3>
    <p class="text-lime-100 dark:text-lime-900 mb-6">For large teams</p>
    <div class="mb-6">
      <span class="text-5xl font-bold text-white dark:text-gray-900">$99</span>
      <span class="text-lime-100 dark:text-lime-900">/month</span>
    </div>
    <ul class="space-y-3 mb-8">
      <li class="flex items-center gap-3 text-white dark:text-gray-900">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Everything in Pro
      </li>
      <li class="flex items-center gap-3 text-white dark:text-gray-900">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Custom integrations
      </li>
      <li class="flex items-center gap-3 text-white dark:text-gray-900">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Dedicated support
      </li>
    </ul>
    <button class="w-full py-3 bg-white text-lime-600 dark:bg-gray-900 dark:text-lime-400 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      Contact Sales
    </button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'pricing-toggle',
      name: 'Toggle Pricing',
      code: `<div class="max-w-xl mx-auto">
  <div class="flex justify-center mb-8">
    <div class="relative flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
      <button class="relative w-32 py-2 text-sm font-medium text-white dark:text-gray-900 bg-lime-600 dark:bg-lime-400 rounded-full shadow-sm transition-all">Monthly</button>
      <button class="relative w-32 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all">Annually</button>
    </div>
  </div>
  <div class="grid md:grid-cols-2 gap-8">
    <div class="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Basic</h3>
      <div class="mt-4 flex items-baseline text-5xl font-extrabold text-gray-900 dark:text-white">
        $15
        <span class="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">/mo</span>
      </div>
      <p class="mt-4 text-gray-500 dark:text-gray-400">Perfect for side projects.</p>
      <ul class="mt-6 space-y-4">
        <li class="flex gap-3 text-gray-600 dark:text-gray-300">
          <svg class="w-5 h-5 shrink-0 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          1 user
        </li>
        <li class="flex gap-3 text-gray-600 dark:text-gray-300">
          <svg class="w-5 h-5 shrink-0 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          10 projects
        </li>
      </ul>
      <button class="mt-8 w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">Choose Basic</button>
    </div>
    <div class="p-8 bg-lime-600 dark:bg-lime-400 rounded-2xl shadow-xl ring-2 ring-lime-600 dark:ring-lime-400">
      <h3 class="text-xl font-semibold text-white dark:text-gray-900">Pro</h3>
      <div class="mt-4 flex items-baseline text-5xl font-extrabold text-white dark:text-gray-900">
        $49
        <span class="ml-1 text-xl font-medium text-lime-100 dark:text-gray-700">/mo</span>
      </div>
      <p class="mt-4 text-lime-100 dark:text-gray-800">For growing teams.</p>
      <ul class="mt-6 space-y-4">
        <li class="flex gap-3 text-white dark:text-gray-900">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          Unlimited users
        </li>
        <li class="flex gap-3 text-white dark:text-gray-900">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          Unlimited projects
        </li>
      </ul>
      <button class="mt-8 w-full py-3 bg-white dark:bg-gray-900 text-lime-600 dark:text-lime-400 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Choose Pro</button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'pricing-cards',
      name: 'Pricing Cards',
      code: `<div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
  <div class="flex flex-col p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Starter</h3>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">All the basics for starting a new business</p>
    <div class="mt-4 flex-1">
      <span class="text-4xl font-extrabold text-gray-900 dark:text-white">$12</span>
      <span class="text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
    </div>
    <ul class="mt-6 space-y-3 flex-1 text-sm text-gray-600 dark:text-gray-300">
      <li class="flex gap-2"><svg class="w-4 h-4 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 2 Team members</li>
      <li class="flex gap-2"><svg class="w-4 h-4 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 20GB Storage</li>
    </ul>
    <button class="mt-6 w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">Buy Starter</button>
  </div>
  <div class="flex flex-col p-6 bg-white dark:bg-gray-800 border-2 border-lime-600 dark:border-lime-400 rounded-2xl relative shadow-lg">
    <div class="absolute top-0 right-6 transform -translate-y-1/2">
      <span class="bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 text-xs font-bold px-3 py-1 rounded-full">Popular</span>
    </div>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Professional</h3>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Everything you need for a growing business</p>
    <div class="mt-4 flex-1">
      <span class="text-4xl font-extrabold text-gray-900 dark:text-white">$32</span>
      <span class="text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
    </div>
    <ul class="mt-6 space-y-3 flex-1 text-sm text-gray-600 dark:text-gray-300">
      <li class="flex gap-2"><svg class="w-4 h-4 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 5 Team members</li>
      <li class="flex gap-2"><svg class="w-4 h-4 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 100GB Storage</li>
      <li class="flex gap-2"><svg class="w-4 h-4 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Priority Support</li>
    </ul>
    <button class="mt-6 w-full py-2 px-4 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 rounded-lg hover:bg-lime-700 dark:hover:bg-lime-500 transition-colors font-medium">Buy Professional</button>
  </div>
  <div class="flex flex-col p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Enterprise</h3>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Advanced features for scaling teams</p>
    <div class="mt-4 flex-1">
      <span class="text-4xl font-extrabold text-gray-900 dark:text-white">$99</span>
      <span class="text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
    </div>
    <ul class="mt-6 space-y-3 flex-1 text-sm text-gray-600 dark:text-gray-300">
      <li class="flex gap-2"><svg class="w-4 h-4 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Unlimited members</li>
      <li class="flex gap-2"><svg class="w-4 h-4 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Unlimited Storage</li>
      <li class="flex gap-2"><svg class="w-4 h-4 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 24/7 Phone Support</li>
    </ul>
    <button class="mt-6 w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">Contact Sales</button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'pricing-split',
      name: 'Split Pricing',
      code: `<div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col md:flex-row">
  <div class="p-8 md:p-12 md:w-2/3">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Lifetime Access</h3>
    <p class="mt-4 text-gray-600 dark:text-gray-400">Get unlimited access to all features, updates, and community support forever with a single payment. No recurring fees.</p>
    <div class="mt-8 flex flex-col sm:flex-row gap-6">
      <ul class="space-y-4 flex-1">
        <li class="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
          <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-lime-100 dark:bg-lime-900/50 text-lime-600 dark:text-lime-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          All current features
        </li>
        <li class="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
          <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-lime-100 dark:bg-lime-900/50 text-lime-600 dark:text-lime-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          Future updates included
        </li>
      </ul>
      <ul class="space-y-4 flex-1">
        <li class="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
          <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-lime-100 dark:bg-lime-900/50 text-lime-600 dark:text-lime-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          Premium support
        </li>
        <li class="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
          <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-lime-100 dark:bg-lime-900/50 text-lime-600 dark:text-lime-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          Private community
        </li>
      </ul>
    </div>
  </div>
  <div class="bg-gray-50 dark:bg-gray-800/50 p-8 md:p-12 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center text-center">
    <span class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Pay once, own it forever</span>
    <div class="mt-4 flex items-baseline text-6xl font-extrabold text-gray-900 dark:text-white">
      $299
    </div>
    <button class="mt-8 w-full py-4 px-8 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 font-bold rounded-xl hover:bg-lime-700 dark:hover:bg-lime-500 transition-colors shadow-lg shadow-lime-600/20 dark:shadow-lime-400/20">
      Get Lifetime Access
    </button>
    <p class="mt-4 text-xs text-gray-500 dark:text-gray-400">30-day money-back guarantee</p>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'pricing-table',
      name: 'Pricing Table',
      code: `<div class="max-w-5xl mx-auto overflow-hidden border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800">
  <table class="w-full text-left text-sm text-gray-600 dark:text-gray-300">
    <thead class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
      <tr>
        <th scope="col" class="p-6 font-semibold text-gray-900 dark:text-white w-1/3">Features</th>
        <th scope="col" class="p-6 text-center w-1/3 border-l border-gray-200 dark:border-gray-700">
          <span class="block text-lg font-bold text-gray-900 dark:text-white">Starter</span>
          <span class="block mt-1 text-sm text-gray-500 dark:text-gray-400">Free forever</span>
          <button class="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium">Get Started</button>
        </th>
        <th scope="col" class="p-6 text-center w-1/3 border-l border-gray-200 dark:border-gray-700 relative">
          <div class="absolute top-0 left-0 right-0 h-1 bg-lime-600 dark:bg-lime-400"></div>
          <span class="block text-lg font-bold text-gray-900 dark:text-white">Pro</span>
          <span class="block mt-1 text-sm text-gray-500 dark:text-gray-400">$19/month</span>
          <button class="mt-4 w-full py-2 bg-lime-600 dark:bg-lime-400 text-white dark:text-gray-900 rounded-lg hover:bg-lime-700 dark:hover:bg-lime-500 transition-colors font-medium">Upgrade to Pro</button>
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr>
        <td class="p-6 font-medium text-gray-900 dark:text-white">Projects</td>
        <td class="p-6 text-center border-l border-gray-200 dark:border-gray-700">Up to 3</td>
        <td class="p-6 text-center border-l border-gray-200 dark:border-gray-700 font-medium">Unlimited</td>
      </tr>
      <tr>
        <td class="p-6 font-medium text-gray-900 dark:text-white">Users</td>
        <td class="p-6 text-center border-l border-gray-200 dark:border-gray-700">1 User</td>
        <td class="p-6 text-center border-l border-gray-200 dark:border-gray-700 font-medium">Up to 10</td>
      </tr>
      <tr>
        <td class="p-6 font-medium text-gray-900 dark:text-white">Analytics</td>
        <td class="p-6 text-center border-l border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500">
          <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
        </td>
        <td class="p-6 text-center border-l border-gray-200 dark:border-gray-700 text-lime-600 dark:text-lime-400">
          <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        </td>
      </tr>
      <tr>
        <td class="p-6 font-medium text-gray-900 dark:text-white">Custom Domain</td>
        <td class="p-6 text-center border-l border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500">
          <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
        </td>
        <td class="p-6 text-center border-l border-gray-200 dark:border-gray-700 text-lime-600 dark:text-lime-400">
          <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
      contributor: 'rayasabari',
    },
  ],
};
