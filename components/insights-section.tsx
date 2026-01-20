import Image from "next/image"
import { RSVPForm } from "./rsvp-form"

const insights = [
  "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
  "Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.",
  "Signals for where capability gaps may already be forming in your organization.",
  "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
  "Actionable insights you can take straight into your next exec meeting."
]

export function InsightsSection() {
  return (
    <section className="bg-[#f5f5f0] py-8 md:py-10 px-5 md:px-6">
      <div className="max-w-3xl mx-auto " >
        <h2 className="text-lg md:text-2xl font-bold leading-tight mb-5 md:mb-6" style={{ color: '#f5a623' }}>
          Go behind the curtain with real<br />
          examples and high-scale insights
        </h2>

        <div className="relative">
          {/* Chess image - positioned absolutely on desktop, static on mobile */}
          <div className="relative md:absolute md:right-[-100px] md:top-0 md:w-[350px] w-full flex justify-center md:justify-start mb-6 md:mb-0 md:z-0">
            <Image
              src="/images/chess-pieces.png"
              alt="Chess pieces"
              width={450}
              height={500}
              className="object-contain w-[280px] md:w-[350px] h-auto"
            />
          </div>

          <div className="relative md:z-10">
            <h3 className="text-gray-800 text-sm font-semibold mb-3 md:mb-4 font-bold">You&apos;ll walk away with:</h3>
            <ul className="space-y-3 md:space-y-4">
              {insights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1 bg-amber-400 self-stretch mr-3 flex-shrink-0" />
                  <span className="hidden md:inline-block md:w-[200px]"></span>
                  <span className="text-black text-xs md:text-[13px] leading-relaxed flex-1 font-bold">{insight}</span>
                </li>
              ))}
            </ul>
          </div>


        </div>

        <div className="mt-6 md:mt-8">
          <RSVPForm variant="light" />
        </div>
      </div>
    </section>
  )
}
