import { IconChevronDown } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const dropdowns: ComponentType = {
  slug: 'dropdowns',
  name: 'Dropdowns',
  icon: <IconChevronDown stroke={1.5} />,
  description: 'Interactive floating menus and popovers for displaying lists of actions or selections.',
  variants: [
    {
      id: 'dropdown-basic',
      name: 'Basic Dropdown',
      code: `<div class="flex justify-center w-full min-h-[240px] pt-4">
  <div class="relative group inline-block text-left">
  <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
    Options
    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </button>

  <div class="absolute left-0 z-10 pt-2 w-56 origin-top-left invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
    <div class="rounded-lg bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none overflow-hidden">
      <div class="py-1" role="menu" aria-orientation="vertical">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">Account settings</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">Support</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">License</a>
        <form method="POST" action="#">
          <button type="submit" class="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors" role="menuitem">Sign out</button>
        </form>
      </div>
    </div>
  </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'dropdown-divided',
      name: 'Divided & Headers',
      code: `<div class="flex justify-center w-full min-h-[300px] pt-4">
  <div class="relative group inline-block text-left">
  <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-lime-500 dark:bg-lime-300 dark:text-gray-900 dark:hover:bg-lime-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 transition-colors">
    Actions
    <svg class="-mr-1 h-5 w-5 text-lime-100 dark:text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </button>

  <div class="absolute left-0 z-10 pt-2 w-64 origin-top-left invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
    <div class="rounded-lg bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/5 dark:ring-white/10 focus:outline-none">
      <div class="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Signed in as</p>
        <p class="text-sm font-medium text-gray-900 dark:text-white truncate mt-1">tom@example.com</p>
      </div>
      <div class="py-1" role="menu" aria-orientation="vertical">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">Account settings</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">Support</a>
      </div>
      <div class="py-1 border-t border-gray-100 dark:border-gray-800" role="menu" aria-orientation="vertical">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">License</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">API Tokens</a>
      </div>
    </div>
  </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'dropdown-icons',
      name: 'Dropdown with Icons',
      code: `<div class="flex justify-center w-full min-h-[280px] pt-4">
  <div class="relative group inline-block text-left">
  <button type="button" class="inline-flex w-full items-center justify-center rounded-full p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-colors">
    <span class="sr-only">Open options</span>
    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
    </svg>
  </button>

  <div class="absolute right-0 z-10 pt-2 w-56 origin-top-right invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
    <div class="rounded-lg bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none overflow-hidden">
      <div class="p-1" role="menu" aria-orientation="vertical">
        <a href="#" class="group/item flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-lime-50 dark:hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">
          <svg class="h-4 w-4 text-gray-400 group-hover/item:text-lime-600 dark:group-hover/item:text-lime-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
          Edit
        </a>
        <a href="#" class="group/item flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-lime-50 dark:hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">
          <svg class="h-4 w-4 text-gray-400 group-hover/item:text-lime-600 dark:group-hover/item:text-lime-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
          </svg>
          Duplicate
        </a>
        <a href="#" class="group/item flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-lime-50 dark:hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">
          <svg class="h-4 w-4 text-gray-400 group-hover/item:text-lime-600 dark:group-hover/item:text-lime-300" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
          </svg>
          Archive
        </a>
        <div class="h-px my-1 bg-gray-100 dark:bg-gray-800"></div>
        <a href="#" class="group/item flex items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors" role="menuitem">
          <svg class="h-4 w-4 text-red-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          Delete
        </a>
      </div>
    </div>
  </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'dropdown-checked',
      name: 'Active Checked State',
      code: `<div class="flex justify-center w-full min-h-[260px] pt-4">
  <div class="relative group inline-block text-left">
  <button type="button" class="inline-flex w-full items-center justify-between gap-x-2 rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
    Sort by: Date added
    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </button>

  <div class="absolute right-0 z-10 pt-2 w-56 origin-top-right invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
    <div class="rounded-lg bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none overflow-hidden">
      <div class="p-1" role="menu" aria-orientation="vertical">
        <a href="#" class="flex items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" role="menuitem">
          Relevance
        </a>
        <a href="#" class="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium bg-lime-50 dark:bg-lime-500/10 text-lime-700 dark:text-lime-300" role="menuitem">
          Date added
          <svg class="h-5 w-5 text-lime-600 dark:text-lime-300" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" class="flex items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" role="menuitem">
          Name (A-Z)
        </a>
        <a href="#" class="flex items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" role="menuitem">
          Name (Z-A)
        </a>
      </div>
    </div>
  </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'dropdown-profile',
      name: 'Profile / User Menu',
      code: `<div class="flex justify-center w-full min-h-[380px] pt-4">
  <div class="relative group inline-block text-left">
  <button type="button" class="flex items-center gap-x-2 rounded-full bg-white dark:bg-gray-900 p-1 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none">
    <img class="h-8 w-8 rounded-full object-cover" src="https://i.pravatar.cc/150?img=68" alt="" />
    <span class="sr-only">Open user menu</span>
    <svg class="mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </button>

  <div class="absolute left-0 z-10 pt-2 w-72 origin-top-left invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
    <div class="rounded-xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/5 dark:ring-white/10 focus:outline-none overflow-hidden">
      <div class="p-4 flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50">
        <img class="h-10 w-10 rounded-full object-cover ring-2 ring-lime-500 dark:ring-lime-300" src="https://i.pravatar.cc/150?img=68" alt="" />
        <div>
          <p class="text-sm font-semibold text-gray-900 dark:text-white">Alex Johnson</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">Pro Plan Member</p>
        </div>
      </div>
      <div class="p-2" role="menu" aria-orientation="vertical">
        <div class="px-2 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Dashboard</div>
        <a href="#" class="block rounded-md px-2 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-lime-50 dark:hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">View Profile</a>
        <a href="#" class="block rounded-md px-2 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-lime-50 dark:hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">Settings</a>
        <a href="#" class="flex items-center justify-between rounded-md px-2 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-lime-50 dark:hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-300 transition-colors" role="menuitem">
          Notifications
          <span class="inline-flex items-center justify-center rounded-full bg-lime-100 dark:bg-lime-900/30 px-2 py-0.5 text-xs font-medium text-lime-700 dark:text-lime-300">3 new</span>
        </a>
        <div class="h-px my-1 bg-gray-100 dark:bg-gray-800"></div>
        <a href="#" class="block rounded-md px-2 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" role="menuitem">Help Center</a>
        <a href="#" class="block rounded-md px-2 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors" role="menuitem">Log out</a>
      </div>
    </div>
  </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'dropdown-mega',
      name: 'Mega Menu Dropdown',
      code: `<div class="flex justify-center w-full min-h-[280px] pt-4">
  <div class="relative group inline-block text-left">
  <button type="button" class="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
    Resources
    <svg class="h-4 w-4 text-gray-400 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </button>

  <div class="absolute left-1/2 z-10 pt-4 -translate-x-1/2 w-[90vw] max-w-md invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
    <div class="overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/5 dark:ring-white/10">
      <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="#" class="group/item flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-300">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 dark:text-white group-hover/item:text-lime-600 dark:group-hover/item:text-lime-300 transition-colors">Documentation</p>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Everything you need to integrate our API.</p>
          </div>
        </a>
        <a href="#" class="group/item flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-300">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900 dark:text-white group-hover/item:text-lime-600 dark:group-hover/item:text-lime-300 transition-colors">Guides</p>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Step-by-step tutorials to get started.</p>
          </div>
        </a>
      </div>
      <div class="bg-gray-50 dark:bg-gray-800/50 p-4">
        <a href="#" class="flex items-center justify-between text-sm font-medium text-lime-600 dark:text-lime-300 hover:text-lime-500 dark:hover:text-lime-400 transition-colors">
          <span>View all resources</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    }
  ]
};
