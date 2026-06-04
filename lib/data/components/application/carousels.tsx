import { IconSlideshow } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const carousels: ComponentType = {
  slug: 'carousels',
  name: 'Carousels',
  icon: <IconSlideshow stroke={1.5} />,
  description: 'Interactive sliders and swipeable content areas for images and cards.',
  variants: [
    {
      id: 'carousel-basic-gallery',
      name: 'Basic Swipeable Gallery',
      code: `<div class="w-full max-w-2xl mx-auto">
  <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    <div class="snap-center shrink-0 w-full sm:w-[80%]">
      <img src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80" alt="Landscape 1" class="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-sm" />
    </div>
    <div class="snap-center shrink-0 w-full sm:w-[80%]">
      <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80" alt="Landscape 2" class="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-sm" />
    </div>
    <div class="snap-center shrink-0 w-full sm:w-[80%]">
      <img src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80" alt="Landscape 3" class="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-sm" />
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'carousel-cards',
      name: 'Cards Carousel with Controls',
      code: `<div class="relative w-full max-w-4xl mx-auto group">
  <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 px-2 -mx-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    <!-- Card 1 -->
    <div class="snap-start shrink-0 w-72 sm:w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div class="w-12 h-12 rounded-full bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400 mb-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Fast Performance</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Optimized for speed and minimal bundle size. Built with modern standards.</p>
    </div>
    <!-- Card 2 -->
    <div class="snap-start shrink-0 w-72 sm:w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div class="w-12 h-12 rounded-full bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400 mb-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">High Security</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Built following best practices to ensure your data is always secure.</p>
    </div>
    <!-- Card 3 -->
    <div class="snap-start shrink-0 w-72 sm:w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div class="w-12 h-12 rounded-full bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400 mb-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Scalable Database</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Designed to scale with your business needs. Connect easily.</p>
    </div>
     <!-- Card 4 -->
    <div class="snap-start shrink-0 w-72 sm:w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div class="w-12 h-12 rounded-full bg-lime-100 dark:bg-lime-900/30 flex items-center justify-center text-lime-600 dark:text-lime-400 mb-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      </div>
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Clean API</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Integrate our services seamlessly using our developer-friendly API.</p>
    </div>
  </div>
  
  <button class="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-md border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all hover:text-lime-500 dark:hover:text-lime-400 z-10 hidden sm:flex">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
  </button>
  <button class="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-md border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all hover:text-lime-500 dark:hover:text-lime-400 z-10 hidden sm:flex">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  </button>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'carousel-hero',
      name: 'Hero Carousel with Indicators',
      code: `<div class="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden group shadow-sm border border-gray-100 dark:border-gray-800">
  <div class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    <!-- Slide 1 -->
    <div id="hero-slide-1" class="snap-start shrink-0 w-full relative h-[400px]">
      <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80" alt="Nature" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent flex flex-col justify-end p-8">
        <span class="inline-block px-3 py-1 bg-lime-500 text-white text-xs font-bold rounded-full mb-3 w-max tracking-wide">NEW</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-2">Explore the Wilderness</h2>
        <p class="text-gray-200 max-w-md text-sm sm:text-base">Discover the most breathtaking natural landscapes and untouched beauty of our planet.</p>
      </div>
    </div>
    <!-- Slide 2 -->
    <div id="hero-slide-2" class="snap-start shrink-0 w-full relative h-[400px]">
      <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80" alt="Coffee" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent flex flex-col justify-end p-8">
        <span class="inline-block px-3 py-1 bg-lime-500 text-white text-xs font-bold rounded-full mb-3 w-max tracking-wide">LIFESTYLE</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-2">Morning Essentials</h2>
        <p class="text-gray-200 max-w-md text-sm sm:text-base">Start your day right with the perfect brew and a moment of peaceful mindfulness.</p>
      </div>
    </div>
    <!-- Slide 3 -->
    <div id="hero-slide-3" class="snap-start shrink-0 w-full relative h-[400px]">
      <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80" alt="Journey" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent flex flex-col justify-end p-8">
        <span class="inline-block px-3 py-1 bg-lime-500 text-white text-xs font-bold rounded-full mb-3 w-max tracking-wide">TRAVEL</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-2">Unforgettable Journeys</h2>
        <p class="text-gray-200 max-w-md text-sm sm:text-base">Experience the world from a completely new perspective and make memories.</p>
      </div>
    </div>
  </div>
  
  <!-- Indicators -->
  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
    <a href="#hero-slide-1" class="w-8 h-1.5 rounded-full bg-lime-500 transition-all hover:bg-lime-400"></a>
    <a href="#hero-slide-2" class="w-2 h-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-all"></a>
    <a href="#hero-slide-3" class="w-2 h-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-all"></a>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'carousel-testimonials',
      name: 'Testimonial Carousel',
      code: `<div class="w-full max-w-4xl mx-auto py-4">
  <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 -mx-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    <!-- Testimonial 1 -->
    <div class="snap-center shrink-0 w-full sm:w-[85%] md:w-[70%] bg-lime-50 dark:bg-lime-900/10 border border-lime-100 dark:border-lime-900/30 rounded-3xl p-8 sm:p-10 relative shadow-sm">
      <div class="absolute top-8 right-8 text-lime-200 dark:text-lime-900/40">
        <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
      </div>
      <div class="flex gap-1 text-lime-500 dark:text-lime-400 mb-6">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      </div>
      <p class="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white leading-relaxed mb-8 relative z-10">
        "JokoUI has completely transformed how our team builds interfaces. The components are beautiful, accessible out of the box, and incredibly easy to customize."
      </p>
      <div class="flex items-center gap-4">
        <img src="https://i.pravatar.cc/150?img=32" alt="Avatar" class="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover" />
        <div>
          <h4 class="font-semibold text-gray-900 dark:text-white">Sarah Jenkins</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Lead Designer, TechCorp</p>
        </div>
      </div>
    </div>
    <!-- Testimonial 2 -->
    <div class="snap-center shrink-0 w-full sm:w-[85%] md:w-[70%] bg-lime-50 dark:bg-lime-900/10 border border-lime-100 dark:border-lime-900/30 rounded-3xl p-8 sm:p-10 relative shadow-sm">
      <div class="absolute top-8 right-8 text-lime-200 dark:text-lime-900/40">
        <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
      </div>
      <div class="flex gap-1 text-lime-500 dark:text-lime-400 mb-6">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      </div>
      <p class="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white leading-relaxed mb-8 relative z-10">
        "The attention to detail in the lime theme and the smooth micro-interactions give our web app a truly premium feel. Highly recommended for any serious project."
      </p>
      <div class="flex items-center gap-4">
        <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" class="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover" />
        <div>
          <h4 class="font-semibold text-gray-900 dark:text-white">Marcus Chen</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">Frontend Developer, InnovateHub</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'carousel-product',
      name: 'Product Carousel',
      code: `<div class="w-full max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
  <div class="relative w-full aspect-square bg-gray-50 dark:bg-gray-800/50">
    <div class="flex overflow-x-auto snap-x snap-mandatory h-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div id="product-slide-1" class="snap-start shrink-0 w-full h-full flex items-center justify-center p-8">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" alt="Shoe 1" class="w-full h-full object-contain drop-shadow-xl" />
      </div>
      <div id="product-slide-2" class="snap-start shrink-0 w-full h-full flex items-center justify-center p-8">
        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80" alt="Shoe 2" class="w-full h-full object-contain drop-shadow-xl" />
      </div>
    </div>
    <div class="absolute top-4 right-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:text-lime-500 dark:hover:text-lime-400 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50 z-10">
      <a href="#product-slide-1" class="w-2 h-2 rounded-full bg-lime-500 hover:bg-lime-400 transition-colors"></a>
      <a href="#product-slide-2" class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-lime-400 transition-colors"></a>
    </div>
  </div>
  <div class="p-6">
    <div class="flex justify-between items-start mb-6">
      <div>
        <h3 class="font-bold text-xl text-gray-900 dark:text-white">Nike Air Max</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">Men's Running Shoes</p>
      </div>
      <span class="font-bold text-xl text-gray-900 dark:text-white">$129</span>
    </div>
    <button class="w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-lime-500 dark:hover:bg-lime-400 hover:text-white dark:hover:text-gray-900 transition-colors shadow-sm">
      Add to Cart
    </button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'carousel-gallery-thumbnails',
      name: 'Gallery with Thumbnails',
      code: `<div class="w-full max-w-3xl mx-auto space-y-3">
  <!-- Main Viewport -->
  <div class="w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="flex overflow-x-auto snap-x snap-mandatory h-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div id="gallery-img-1" class="snap-start shrink-0 w-full h-full">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80" alt="Beach" class="w-full h-full object-cover" />
      </div>
      <div id="gallery-img-2" class="snap-start shrink-0 w-full h-full">
        <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1000&q=80" alt="Beach 2" class="w-full h-full object-cover" />
      </div>
      <div id="gallery-img-3" class="snap-start shrink-0 w-full h-full">
        <img src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?w=1000&q=80" alt="Beach 3" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
  
  <!-- Thumbnails -->
  <div class="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    <a href="#gallery-img-1" class="block snap-start shrink-0 w-24 sm:w-32 aspect-video rounded-xl overflow-hidden cursor-pointer ring-2 ring-lime-500 ring-offset-2 dark:ring-offset-gray-950 shadow-sm relative transition-all">
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80" alt="Beach thumb" class="w-full h-full object-cover" />
    </a>
    <a href="#gallery-img-2" class="block snap-start shrink-0 w-24 sm:w-32 aspect-video rounded-xl overflow-hidden cursor-pointer border border-transparent hover:border-lime-300 dark:hover:border-lime-700 opacity-70 hover:opacity-100 transition-all relative">
      <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=300&q=80" alt="Beach 2 thumb" class="w-full h-full object-cover" />
    </a>
    <a href="#gallery-img-3" class="block snap-start shrink-0 w-24 sm:w-32 aspect-video rounded-xl overflow-hidden cursor-pointer border border-transparent hover:border-lime-300 dark:hover:border-lime-700 opacity-70 hover:opacity-100 transition-all relative">
      <img src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?w=300&q=80" alt="Beach 3 thumb" class="w-full h-full object-cover" />
    </a>
    <div class="snap-start shrink-0 w-24 sm:w-32 aspect-video rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-800 hover:border-lime-300 dark:hover:border-lime-700 opacity-80 hover:opacity-100 transition-all relative bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center">
       <span class="text-sm font-medium text-gray-600 dark:text-gray-400">+3</span>
    </div>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
  ],
};
