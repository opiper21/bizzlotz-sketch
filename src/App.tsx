import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Restaurants', 'Auto', 'Retail', 'Services', 'Health'];

  const businesses = [
    { name: "Tomball Auto Repair", category: "Auto", plot: "A-12", views: 1240, logo: "🔧" },
    { name: "Rosa's Mexican Kitchen", category: "Restaurants", plot: "B-04", views: 2103, logo: "🌮" },
    { name: "Main Street Boutique", category: "Retail", plot: "C-08", views: 876, logo: "🛍️" },
    { name: "Prime Cuts Barbershop", category: "Services", plot: "A-21", views: 1567, logo: "💈" },
    { name: "Tomball Family Dental", category: "Health", plot: "D-03", views: 942, logo: "🦷" },
    { name: "Lone Star Coffee Co.", category: "Restaurants", plot: "B-15", views: 3012, logo: "☕" },
    { name: "Precision Auto Detailing", category: "Auto", plot: "A-30", views: 708, logo: "🚗" },
    { name: "The Green Garden", category: "Retail", plot: "C-22", views: 634, logo: "🌱" },
    { name: "Bright Smile Ortho", category: "Health", plot: "D-11", views: 1102, logo: "😁" },
  ];

  const filtered = businesses.filter((b) => {
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">

      {/* HEADER */}
      <header className="border-b border-white/10 sticky top-0 bg-[#0B1220]/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚓</span>
            <span className="font-bold text-xl tracking-tight">BizzLotz</span>
            <span className="hidden md:inline text-sm text-white/40 ml-2">— Digital Main Street for Tomball, TX</span>
          </div>
          <a
            href="#claim"
            className="bg-[#00D4FF] hover:bg-[#00B8E0] text-[#0B1220] font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
          >
            Claim Free Plot
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center">
        <span className="inline-block bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          🎉 42 founding plots still free
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Discover Tomball businesses
          <br />
          <span className="text-[#00D4FF]">in one clean directory.</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg mb-8">
          Skip the 3D explorer for now — browse every BizzLotz business by name, category, or popularity. One click to visit their plot.
        </p>

        {/* SEARCH */}
        <div className="max-w-xl mx-auto relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search businesses..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00D4FF] focus:bg-white/[0.07] transition-colors"
          />
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#00D4FF] text-[#0B1220]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* BUSINESS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((biz, i) => (
              <div
                key={i}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#00D4FF]/50 hover:bg-white/[0.06] transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-[#00D4FF]/10 rounded-xl flex items-center justify-center text-2xl">
                    {biz.logo}
                  </div>
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-1 rounded">
                    PLOT {biz.plot}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-[#00D4FF] transition-colors">
                  {biz.name}
                </h3>
                <p className="text-sm text-white/50 mb-4">{biz.category}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-white/40">👁️ {biz.views.toLocaleString()} views</span>
                  <span className="text-xs font-semibold text-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity">
                    Visit Plot →
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-white/40">
            <p className="text-2xl mb-2">No businesses found 🔍</p>
            <p className="text-sm">Try a different search or category</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section id="claim" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-[#00D4FF]/20 via-[#00D4FF]/5 to-transparent border border-[#00D4FF]/30 rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Own a Tomball business?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Founding plots are <span className="text-[#00D4FF] font-semibold">free</span> for the first businesses. Get discovered on the digital main street.
          </p>
          <a
            href="#"
            className="inline-block bg-[#00D4FF] hover:bg-[#00B8E0] text-[#0B1220] font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Claim Your Free Plot →
          </a>
          <p className="text-xs text-white/40 mt-4">No credit card. No commitment. Just visibility.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm">
        <p>Concept sketch by <span className="text-white">PiperX</span> · React + TypeScript + Tailwind</p>
        <p className="mt-1">Built for BizzLotz · {new Date().getFullYear()}</p>
      </footer>

    </div>
  );
}

export default App;