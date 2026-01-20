import { History, LayoutGrid, BarChart2, ShieldCheck, FileCog, Rocket } from "lucide-react"

const topics = [
  {
    icon: History,
    title: "Skills Decay",
    line1: "every 2-3 years",
    line2: "faster for technical skills",
    color: "#1e6cf0"
  },
  {
    icon: LayoutGrid,
    title: "Manager Role Shift",
    line1: "orchestrating",
    line2: "people + AI agents",
    color: "#1e6cf0",
    image: "/images/manager.png"
  },
  {
    icon: BarChart2,
    title: "Leaders + AI Co-Pilots",
    line1: "requires sensemaking",
    line2: "and systems thinking",
    color: "#1e6cf0",
    image: "/images/leaders.png"
  },
  {
    icon: ShieldCheck,
    title: "Frontline Capability",
    line1: "now depends",
    line2: "on digital fluency",
    color: "#1e6cf0"
  },
  {
    icon: FileCog,
    title: "Core Human Capabilities",
    line1: "analytical reasoning",
    line2: "and scenario planning",
    color: "#1e6cf0",
    image: "/images/core.png"
  },
  {
    icon: Rocket,
    title: "Winning Organizations",
    line1: "predict skills",
    line2: "ahead of demand",
    color: "#1e6cf0"
  }
]

export function ExploreSection() {
  return (
    <section className="bg-[#dce5f0] py-8 md:py-10 px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="block mt-1 font-bold" style={{ fontSize: '28px', lineHeight: '1.05', letterSpacing: '-0.01em', color: '#FFA500' }}>What We'll Explore</h2>
        <p className="text-sm md:text-[15px] mb-5 md:mb-6 font-bold" style={{ color: '#2c2c2c' }}>The critical shifts every enterprise must plan for:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white p-4 md:p-5 rounded-none border border-[#e7ebf3]">
              <div className="flex items-center gap-2.5 mb-2 md:mb-3">
                {topic.image ? (
                  <img 
                    src={topic.image} 
                    alt={topic.title}
                    className="w-5 h-5 object-contain"
                  />
                ) : (
                  <topic.icon className="w-5 h-5" strokeWidth={1.5} style={{ color: topic.color }} />
                )}
                <h3 className="font-bold text-sm md:text-[15px]" style={{ color: '#000000' }}>{topic.title}</h3>
              </div>
              <div className="text-xs md:text-[13px] leading-relaxed font-bold" style={{ color: '#000000' }}>
                <div className="font-bold">{topic.line1}</div>
                <div className="font-bold">{topic.line2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
