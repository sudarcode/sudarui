import { IconPalette, IconMoon, IconAccessible, IconRocket } from '@tabler/icons-react';

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-border/50 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" suppressHydrationWarning></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Joko UI?
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to build modern interfaces, without the bloat.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
              <IconPalette className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Fully Customizable</h3>
            <p className="text-sm text-muted-foreground">Easily adapt the styles to match your brand using standard Tailwind CSS classes.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
              <IconMoon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Dark Mode Ready</h3>
            <p className="text-sm text-muted-foreground">Every component is thoughtfully designed to look perfect in both light and dark themes.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
              <IconAccessible className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Accessible</h3>
            <p className="text-sm text-muted-foreground">Built with semantic HTML and ARIA attributes to ensure usability for everyone.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
              <IconRocket className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Lightweight</h3>
            <p className="text-sm text-muted-foreground">Zero dependencies. Just copy the code and you are ready to ship your product.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
