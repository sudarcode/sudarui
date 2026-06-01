import Link from 'next/link';
import Logo from './Logo';
import { IconHeartFilled, IconBrandGithub, IconBrandDiscord } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden mt-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-24 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <Logo className="mb-2" />
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Beautifully designed, open-source Tailwind CSS components. Build fast, responsive, and modern websites without the hassle of setup or configuration.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/rayasabari/joko-ui" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass-card text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">
                <IconBrandGithub stroke={1.5} className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/YFDPRs35Gt" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass-card text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">
                <IconBrandDiscord stroke={1.5} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Components</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/components/application" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    Application
                  </Link>
                </li>
                <li>
                  <Link href="/components/marketing" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    React
                  </a>
                </li>
                <li>
                  <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Next.js
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JokoUI. Released under the MIT License.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Crafted with
            <IconHeartFilled className="w-4 h-4 text-red-500 animate-pulse mx-1" />
            by
            <a href="https://rayasabari.com" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors ml-1">
              RYSB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
