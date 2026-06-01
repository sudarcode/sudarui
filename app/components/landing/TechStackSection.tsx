import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandVue,
  IconBrandNuxt,
  IconBrandSvelte,
  IconBrandAngular,
  IconBrandAstro,
  IconBrandLaravel,
  IconBrandHtml5
} from '@tabler/icons-react';

export default function TechStackSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest">Works seamlessly with</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3 font-bold text-2xl"><IconBrandReact className="w-12 h-12 text-[#61DAFB]" /> React</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><IconBrandNextjs className="w-12 h-12" /> Next.js</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><IconBrandVue className="w-12 h-12 text-[#4FC08D]" /> Vue</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><IconBrandNuxt className="w-12 h-12 text-[#00DC82]" /> Nuxt</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><IconBrandSvelte className="w-12 h-12 text-[#FF3E00]" /> Svelte</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><IconBrandAngular className="w-12 h-12 text-[#DD0031]" /> Angular</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><IconBrandAstro className="w-12 h-12 text-[#FF5D01]" /> Astro</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><IconBrandLaravel className="w-12 h-12 text-[#FF2D20]" /> Laravel</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><IconBrandHtml5 className="w-12 h-12 text-[#E34F26]" /> HTML</div>
        </div>
      </div>
    </section>
  );
}
