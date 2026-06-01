import { IconFilter2Search, IconCopy, IconClipboardCopy } from '@tabler/icons-react';

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center glass-card p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
              <IconFilter2Search stroke={1.5} className="size-7" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">
              Browse Components
            </h3>
            <p className="text-muted-foreground relative z-10 text-sm md:text-base">
              Explore our collection and find the perfect component for your
              project.
            </p>
          </div>

          <div className="text-center glass-card p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
              <IconCopy stroke={1.5} className="size-7" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">
              Copy the Code
            </h3>
            <p className="text-muted-foreground relative z-10 text-sm md:text-base">
              Click the copy button to copy the component code to your
              clipboard.
            </p>
          </div>

          <div className="text-center glass-card p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
              <IconClipboardCopy stroke={1.5} className="size-7" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">
              Paste & Customize
            </h3>
            <p className="text-muted-foreground relative z-10 text-sm md:text-base">
              Paste the code into your project and customize it to match your
              design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
