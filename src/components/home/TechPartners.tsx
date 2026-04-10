const partners = ["TheraNest", "SimplePractice", "Office Ally", "NextGen", "eClinicalWorks", "CharmHealth", "Kareo", "Athenahealth", "Allscripts", "AdvancedMD", "Epic", "Cerner"];

const TechPartners = () => (
  <section className="py-24 bg-[#f8fafb] overflow-hidden border-t border-primary/5">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
          Integrations
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-foreground">We Work With <span className="text-primary italic">Your Existing EHR</span></h3>
      </div>
      
      <div className="relative">
        {/* Gradient Mask for Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <div key={`${p}-${i}`} className="mx-12 flex items-center justify-center group min-w-[160px]">
              <span className="text-2xl font-black text-muted-foreground/20 group-hover:text-primary/60 transition-all duration-500 cursor-default transform group-hover:scale-110 tracking-tighter">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm font-bold text-muted-foreground italic">
          + Over 50 other specialty-specific platforms supported
        </p>
      </div>
    </div>
  </section>
);

export default TechPartners;
