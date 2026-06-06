import { IconUserCircle } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const author_cards: ComponentType = {
  slug: 'author-cards',
  name: 'Author Cards',
  icon: <IconUserCircle stroke={1.5} />,
  description: 'Beautiful author profile cards for displaying writer information',
  variants: [
    {
      id: 'author-card-simple',
      name: 'Simple Profile',
      code: `<div class="max-w-xs w-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center text-center">
  <div class="w-24 h-24 mb-4 relative">
    <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Author" class="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-sm" />
    <span class="absolute bottom-1 right-1 w-4 h-4 bg-lime-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
  </div>
  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Jane Doe</h3>
  <p class="text-sm font-medium text-lime-600 dark:text-lime-300 mb-3">Senior Tech Writer</p>
  <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">Passionate about web development, UI/UX design, and sharing knowledge with the community.</p>
  <div class="flex gap-3 w-full">
    <button class="flex-1 bg-lime-500 hover:bg-lime-600 text-white dark:bg-lime-400 dark:hover:bg-lime-500 dark:text-gray-900 py-2 px-4 rounded-lg text-sm font-semibold transition-colors">Follow</button>
    <button class="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">Message</button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'author-card-horizontal',
      name: 'Horizontal Layout',
      code: `<div class="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 p-5 flex items-start gap-4">
  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Author" class="w-16 h-16 rounded-full object-cover shadow-sm" />
  <div class="flex-1">
    <div class="flex justify-between items-start mb-1">
      <div>
        <h3 class="text-lg font-bold text-gray-900 dark:text-white">Alex Johnson</h3>
        <p class="text-xs font-medium text-lime-600 dark:text-lime-300">Frontend Developer</p>
      </div>
      <button class="text-lime-600 dark:text-lime-300 hover:text-lime-700 dark:hover:text-lime-400 bg-lime-50 dark:bg-lime-900/30 p-1.5 rounded-full transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
      </button>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-3 line-clamp-2">Creating intuitive and performant web experiences. Open source contributor and tech speaker.</p>
    <div class="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
      <span class="flex items-center gap-1"><strong class="text-gray-900 dark:text-white">42</strong> Posts</span>
      <span class="flex items-center gap-1"><strong class="text-gray-900 dark:text-white">12.5k</strong> Followers</span>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'author-card-stats',
      name: 'Stats Focused',
      code: `<div class="max-w-sm w-full bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
  <div class="h-24 bg-gradient-to-r from-lime-400 to-lime-600 dark:from-lime-600 dark:to-lime-800"></div>
  <div class="px-6 pb-6 text-center">
    <div class="flex justify-center -mt-12 mb-3">
      <img src="https://i.pravatar.cc/150?u=a048581f4e29026701d" alt="Author" class="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 object-cover bg-white" />
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white">Sarah Wilson</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">@sarahcodes · UX/UI Designer</p>
    <p class="text-sm text-gray-600 dark:text-gray-300 mb-6">Designing interfaces that are not just beautiful, but also functional and accessible to everyone.</p>
    
    <div class="flex justify-around py-4 border-t border-b border-gray-100 dark:border-gray-800 mb-6">
      <div>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">156</p>
        <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Articles</p>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">8.2k</p>
        <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Followers</p>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">4.9</p>
        <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Rating</p>
      </div>
    </div>
    
    <button class="w-full bg-gray-900 hover:bg-gray-800 dark:bg-lime-400 dark:hover:bg-lime-500 text-white dark:text-gray-900 py-2.5 rounded-lg text-sm font-semibold transition-colors">View Profile</button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'author-card-minimal',
      name: 'Modern Minimal',
      code: `<div class="max-w-xs w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 group cursor-pointer hover:border-lime-500 dark:hover:border-lime-400 transition-colors">
  <div class="flex items-center gap-3 mb-4">
    <img src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="Author" class="w-12 h-12 rounded-full object-cover" />
    <div>
      <h3 class="text-base font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors">David Chen</h3>
      <p class="text-xs text-gray-500 dark:text-gray-400">Software Engineer</p>
    </div>
  </div>
  <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">Specializing in building scalable backend systems and robust APIs. Frequent contributor to open source projects.</p>
  <div class="flex flex-wrap gap-2 mb-4">
    <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">Node.js</span>
    <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">Python</span>
    <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">AWS</span>
  </div>
  <a href="#" class="inline-flex items-center text-sm font-medium text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300">
    Read articles
    <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
  </a>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'author-card-glass',
      name: 'Glassmorphism',
      code: `<div class="max-w-md relative p-[1px] rounded-2xl bg-gradient-to-br from-white/50 to-white/10 dark:from-white/10 dark:to-white/5 overflow-hidden shadow-xl">
  <!-- Subtle background glow -->
  <div class="absolute -top-10 -right-10 w-32 h-32 bg-lime-400/30 dark:bg-lime-500/20 rounded-full blur-3xl"></div>
  <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
  
  <div class="relative h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-[15px] p-6 flex items-center gap-5">
    <div class="relative">
      <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Author" class="w-20 h-20 rounded-2xl object-cover shadow-sm border border-white/50 dark:border-gray-700/50" />
      <div class="absolute -bottom-2 -right-2 bg-lime-500 text-white dark:bg-lime-400 dark:text-gray-900 p-1 rounded-lg shadow-sm">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
    </div>
    
    <div class="flex-1">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white leading-tight">Elena Rodriguez</h3>
          <p class="text-sm font-medium text-lime-600 dark:text-lime-300">Editor in Chief</p>
        </div>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-3">Curating the best content on product design, engineering leadership, and tech culture.</p>
      
      <button class="px-4 py-1.5 bg-gray-900/5 dark:bg-white/5 hover:bg-lime-500 hover:text-white dark:hover:bg-lime-400 dark:hover:text-gray-900 text-sm font-medium rounded-lg transition-colors border border-gray-200/50 dark:border-gray-700/50 w-full">
        Subscribe to Newsletter
      </button>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'author-card-social',
      name: 'Social Links Card',
      code: `<div class="max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden group">
  <div class="p-6">
    <div class="flex justify-between items-start mb-4">
      <img src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="Author" class="w-16 h-16 rounded-full object-cover border-2 border-gray-50 dark:border-gray-700 group-hover:border-lime-500 dark:group-hover:border-lime-400 transition-colors" />
      <span class="px-3 py-1 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-300 text-xs font-semibold rounded-full flex items-center gap-1">
        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        Top Voice
      </span>
    </div>
    
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Marcus Johnson</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Cloud Architect & Content Creator</p>
    
    <p class="text-sm text-gray-600 dark:text-gray-300 mb-6">Demystifying cloud computing and serverless architectures. Sharing weekly tutorials and insights.</p>
    
    <div class="flex gap-3 mb-6">
      <a href="#" class="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-lime-100 hover:text-lime-600 dark:hover:bg-lime-900/30 dark:hover:text-lime-400 transition-colors">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
      </a>
      <a href="#" class="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-lime-100 hover:text-lime-600 dark:hover:bg-lime-900/30 dark:hover:text-lime-400 transition-colors">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <a href="#" class="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-lime-100 hover:text-lime-600 dark:hover:bg-lime-900/30 dark:hover:text-lime-400 transition-colors">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
    </div>
  </div>
  <a href="#" class="block w-full py-3 bg-gray-50 dark:bg-gray-700/50 text-center text-sm font-semibold text-lime-600 dark:text-lime-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
    Read Latest Articles
  </a>
</div>`,
      contributor: 'rayasabari',
    }
  ],
};
