import { IconChevronDown } from '@tabler/icons-react';

export default function FaqSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" suppressHydrationWarning></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>
        <div className="space-y-4">
          <details className="group glass-card rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-semibold text-foreground">
              Is it really free?
              <IconChevronDown className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-primary" />
            </summary>
            <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4 mt-2">
              Yes, absolutely! Joko UI is open-source and free to use for both personal and commercial projects. You don't need to pay anything or add attribution, though it's always appreciated!
            </div>
          </details>
          <details className="group glass-card rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-semibold text-foreground">
              Do I need to install any npm packages?
              <IconChevronDown className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-primary" />
            </summary>
            <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4 mt-2">
              No installations required. Joko UI follows a copy-and-paste philosophy. Just copy the code of the component you want and paste it directly into your project. You have full ownership of the code.
            </div>
          </details>
          <details className="group glass-card rounded-2xl [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-semibold text-foreground">
              Which frameworks are supported?
              <IconChevronDown className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180 text-muted-foreground group-hover:text-primary" />
            </summary>
            <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4 mt-2">
              The components are built with React and Tailwind CSS. They work perfectly with Next.js, Vite, Create React App, Remix, and any other React-based framework that supports Tailwind.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
