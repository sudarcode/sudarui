import Link from "next/link";
import {
  IconWand,
  IconDownload,
  IconSettings,
  IconStar,
  IconFlower
} from '@tabler/icons-react';

interface HeroSectionProps {
  totalComponents: number;
}

export default function HeroSection({ totalComponents }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh opacity-100 dark:opacity-80" suppressHydrationWarning></div>
      <div className="absolute inset-0 bg-gray-400/10 dark:bg-gray-900/40 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" suppressHydrationWarning></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" suppressHydrationWarning></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-foreground">
              {totalComponents}+ Free Components
            </span>
          </div>

          {/* Heading */}
          <div className="flex items-center gap-1 justify-center mb-6">
            <IconFlower className='size-[55px] sm:size-[64px] md:size-[78px] lg:size-[98px] text-primary animate-spin [animation-duration:5s]' />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground  leading-tight">
              Template
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                UI
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl font-semibold text-foreground max-w-xl mx-auto mb-4 lg:mb-10">
            Free Tailwind Components for  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text font-semibold text-transparent">
              Sat-set
            </span> Developers
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Copy-paste ready components to build beautiful, responsive websites faster. No installation required — just Tailwind CSS.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-foreground">
              <IconWand stroke={1.5} className="text-green-500 w-5 h-5" />
              <span className="font-medium">No Config</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <IconDownload stroke={1.5} className="text-green-500 w-5 h-5" />
              <span className="font-medium">No Install</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <IconSettings stroke={1.5} className="text-green-500 w-5 h-5" />
              <span className="font-medium">No Setup</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#categories"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-accent to-primary dark:from-accent dark:to-primary text-white dark:text-zinc-950 font-bold rounded-full
                       hover:shadow-[0_0_40px_-10px_rgba(132,204,22,0.5)] active:scale-[0.98] hover:-translate-y-0.5
                       transition-all duration-300 flex items-center justify-center gap-2"
            >
              Browse Components
            </Link>
            <a
              href="https://github.com/sudarcode/sudarui"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 glass-button rounded-full font-semibold
                       inline-flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98]"
            >
              <IconStar stroke={1.5} className="w-5 h-5 group-hover:text-yellow-500 transition-colors" />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
