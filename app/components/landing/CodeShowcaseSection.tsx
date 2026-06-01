import CopyButton from "../CopyButton";

export default function CodeShowcaseSection() {
  const articleHtmlCode = `<div class="max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden group">
  <div class="h-48 overflow-hidden relative">
    <div class="w-full h-full bg-gradient-to-br from-lime-400 to-green-600 group-hover:scale-105 transition-transform"></div>
    <div class="absolute top-4 left-4">
      <span class="px-3 py-1 bg-white/90 text-lime-600 text-xs font-bold rounded-full">Tech</span>
    </div>
  </div>

  <div class="p-6">
    <h3 class="text-xl font-bold mb-2 group-hover:text-lime-500">Building the Web</h3>
    <p class="text-gray-500 text-sm mb-6 line-clamp-2">Discover the latest trends in frontend.</p>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-lime-300 to-lime-500 flex items-center justify-center text-xs font-bold text-gray-900">AJ</div>
        <span class="text-sm font-medium">Alex J.</span>
      </div>
      <button class="text-sm font-bold text-lime-600 flex items-center gap-1">
        Read more <svg class="w-4 h-4">...</svg>
      </button>
    </div>
  </div>
</div>`;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 lg:order-1 relative flex items-center justify-center min-h-[400px] min-w-0">
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10 w-full flex justify-center">
                {/* Joko UI Component Sample: Article Card */}
                <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden group">
                  <div className="h-48 overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-lime-400 to-green-600 group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">Development</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-lime-500 transition-colors">Building the Web of Tomorrow</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2">Discover the latest trends in frontend development, from modern CSS features to powerful new JavaScript frameworks.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-300 to-lime-500 ring-2 ring-white dark:ring-gray-800 flex items-center justify-center text-xs font-bold text-gray-900">BL</div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Buah Lil</span>
                      </div>
                      <button className="text-sm font-bold text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 transition-colors flex items-center gap-1 group/btn">
                        Read more 
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="order-2 lg:order-2 space-y-6 min-w-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Beautifully crafted, <br/><span className="text-primary">ready to copy.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Skip the boilerplate. Our components are designed to drop seamlessly into your project with zero configuration. Just raw HTML & Tailwind.
            </p>
            <div className="glass-card rounded-xl font-mono text-sm overflow-hidden text-muted-foreground relative border border-border/50 shadow-lg group/code">
              <div className="flex gap-2 p-4 border-b border-border/50 bg-background/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <CopyButton text={articleHtmlCode} />
              <div className="p-5 overflow-auto custom-scrollbar h-[130px]">
                <pre className="text-gray-300 leading-relaxed">
                  <code>
<span className="text-blue-400">&lt;div</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden group"</span><span className="text-blue-400">&gt;</span>{"\n"}
{"  "}<span className="text-blue-400">&lt;div</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"h-48 overflow-hidden relative"</span><span className="text-blue-400">&gt;</span>{"\n"}
{"    "}<span className="text-blue-400">&lt;div</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"w-full h-full bg-gradient-to-br from-lime-400 to-green-600 group-hover:scale-105 transition-transform"</span><span className="text-blue-400">&gt;&lt;/div&gt;</span>{"\n"}
{"    "}<span className="text-blue-400">&lt;div</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"absolute top-4 left-4"</span><span className="text-blue-400">&gt;</span>{"\n"}
{"      "}<span className="text-blue-400">&lt;span</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"px-3 py-1 bg-white/90 text-lime-600 text-xs font-bold rounded-full"</span><span className="text-blue-400">&gt;</span>Tech<span className="text-blue-400">&lt;/span&gt;</span>{"\n"}
{"    "}<span className="text-blue-400">&lt;/div&gt;</span>{"\n"}
{"  "}<span className="text-blue-400">&lt;/div&gt;</span>{"\n\n"}
{"  "}<span className="text-blue-400">&lt;div</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"p-6"</span><span className="text-blue-400">&gt;</span>{"\n"}
{"    "}<span className="text-blue-400">&lt;h3</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"text-xl font-bold mb-2 group-hover:text-lime-500"</span><span className="text-blue-400">&gt;</span>Building the Web<span className="text-blue-400">&lt;/h3&gt;</span>{"\n"}
{"    "}<span className="text-blue-400">&lt;p</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"text-gray-500 text-sm mb-6 line-clamp-2"</span><span className="text-blue-400">&gt;</span>Discover the latest trends in frontend.<span className="text-blue-400">&lt;/p&gt;</span>{"\n\n"}
{"    "}<span className="text-blue-400">&lt;div</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"flex items-center justify-between"</span><span className="text-blue-400">&gt;</span>{"\n"}
{"      "}<span className="text-blue-400">&lt;div</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"flex items-center gap-3"</span><span className="text-blue-400">&gt;</span>{"\n"}
{"        "}<span className="text-blue-400">&lt;div</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"w-8 h-8 rounded-full bg-gradient-to-br from-lime-300 to-lime-500 flex items-center justify-center text-xs font-bold text-gray-900"</span><span className="text-blue-400">&gt;</span>BL<span className="text-blue-400">&lt;/div&gt;</span>{"\n"}
{"        "}<span className="text-blue-400">&lt;span</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"text-sm font-medium"</span><span className="text-blue-400">&gt;</span>Buah Lil<span className="text-blue-400">&lt;/span&gt;</span>{"\n"}
{"      "}<span className="text-blue-400">&lt;/div&gt;</span>{"\n"}
{"      "}<span className="text-blue-400">&lt;button</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"text-sm font-bold text-lime-600 flex items-center gap-1"</span><span className="text-blue-400">&gt;</span>{"\n"}
{"        "}Read more <span className="text-blue-400">&lt;svg</span> <span className="text-green-300">class</span>=<span className="text-yellow-300">"w-4 h-4"</span><span className="text-blue-400">&gt;</span>...<span className="text-blue-400">&lt;/svg&gt;</span>{"\n"}
{"      "}<span className="text-blue-400">&lt;/button&gt;</span>{"\n"}
{"    "}<span className="text-blue-400">&lt;/div&gt;</span>{"\n"}
{"  "}<span className="text-blue-400">&lt;/div&gt;</span>{"\n"}
<span className="text-blue-400">&lt;/div&gt;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
