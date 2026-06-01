import Link from "next/link";
import ComponentCard from "../ComponentCard";
import { getAllComponents } from "@/lib/data/components";

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Component Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautifully designed, production-ready
            Tailwind CSS components.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {getAllComponents().map((category) => {
            const displayComponents = category.components.slice(0, 4);
            const hasMore = category.components.length > 4;

            return (
              <div key={category.slug} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span> {category.name} Components
                </h3>
                <div className="relative">
                  <div className="grid gap-4">
                    {displayComponents.map((component) => (
                      <ComponentCard
                        key={component.slug}
                        title={component.name}
                        count={component.variants.length}
                        icon={component.icon}
                        href={`/components/${category.slug}/${component.slug}`}
                        description={component.description}
                      />
                    ))}
                  </div>
                  {hasMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/90 to-transparent flex items-end justify-center pb-4 z-10 backdrop-blur-[2px]">
                      <Link
                        href={`/components/${category.slug}`}
                        className="px-6 py-2.5 rounded-full glass-button text-primary text-sm font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                      >
                        See more
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
