const agendaItems = [
  {
    title: "Welcome & Opening",
    speaker: "Sudipto Mitra, CRO Simplilearn",
    description: "Why capability-building is now a board-level issue and what's changing in the workforce landscape."
  },
  {
    title: "Keynote:",
    subtitle: "What Enterprise Leaders Are Seeing on the Ground",
    speaker: "Rob Lauber, Former CLO McDonald's",
    description: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
  },
  {
    title: "Lunch & Executive Conversation",
    speaker: "Industry Experts Invited",
    description: "What large enterprise talent ecosystems are learning about capability-building at scale."
  }
]

export function AgendaSection() {
  return (
    <section className="py-8 md:py-12 px-5 md:px-6" style={{ backgroundColor: '#00e5e5' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-8" style={{ color: '#1D4DF4' }}>
          Event Agenda
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 md:p-8 h-full flex flex-col min-h-[320px]"
            >
              <h3 className="font-bold text-lg md:text-xl mb-4 leading-tight min-h-[60px] md:min-h-[140px]" style={{ color: '#1D4DF4' }}>
                {item.title}
                {item.subtitle && (
                  <span className="block mt-1" style={{ color: '#1D4DF4' }}>{item.subtitle}</span>
                )}
              </h3>
              <div>
                <p className="text-black text-sm md:text-base font-bold mb-3 md:mb-4">{item.speaker}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
