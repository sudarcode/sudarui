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
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {[
            { name: 'React', icon: IconBrandReact, color: 'text-[#61DAFB]' },
            { name: 'Next.js', icon: IconBrandNextjs, color: '' },
            { name: 'Vue', icon: IconBrandVue, color: 'text-[#4FC08D]' },
            { name: 'Nuxt', icon: IconBrandNuxt, color: 'text-[#00DC82]' },
            { name: 'Svelte', icon: IconBrandSvelte, color: 'text-[#FF3E00]' },
            { name: 'Angular', icon: IconBrandAngular, color: 'text-[#DD0031]' },
            { name: 'Astro', icon: IconBrandAstro, color: 'text-[#FF5D01]' },
            { name: 'Laravel', icon: IconBrandLaravel, color: 'text-[#FF2D20]' },
            { name: 'HTML', icon: IconBrandHtml5, color: 'text-[#E34F26]' },
          ].map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="flex items-center gap-2 md:gap-3 font-medium text-sm md:font-bold md:text-2xl">
                <Icon className={`w-6 h-6 md:w-10 md:h-10 ${tech.color}`} /> {tech.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
