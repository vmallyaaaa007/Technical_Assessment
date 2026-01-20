import { Calendar, MapPin } from "lucide-react"
import { RSVPForm } from "./rsvp-form"

export function HeroSection() {
  return (
    <section className="relative min-h-[400px] md:min-h-[320px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundPosition: 'center center'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 py-6 md:py-8">
        {/* Header with Logo */}
        <div className="mb-2">
          {/* Logo */}
          <img
            src="/new_logo 2.png"
            alt="Simplilearn"
            className="h-8 md:h-10 w-auto"
          />
        </div>

        {/* Subtitle line with Invite-Only Badge */}
        <div className="flex items-center mb-4">
          <div
            className="mr-2 md:mr-3 border flex items-center justify-center rounded-lg bg-[#00FFFF] border-[#0b1b4c] h-8 md:h-10"
            style={{
              minWidth: '120px',
              boxShadow: '0 10px 22px rgba(0, 0, 0, 0.45)',
              padding: '6px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="/Invite-Only.png"
              alt="Invite-Only"
              className="h-5 md:h-6"
              style={{
                width: 'auto',
                display: 'block'
              }}
            />
          </div>
          <p
            className="text-cyan-400 text-sm md:text-lg"
            style={{
              fontWeight: '300',
              lineHeight: '100%',
              letterSpacing: '0%',
              textShadow: '1px 0 #0b1b4c, -1px 0 #0b1b4c, 0 1px #0b1b4c, 0 -1px #0b1b4c, 0 3px 8px rgba(0, 0, 0, 0.45)'
            }}
          >
            An Executive Roundtable · Lunch
          </p>
        </div>

        {/* Title */}
        <h1 className="mb-6 md:mb-8 text-start">
          <span className="block text-[28px] md:text-[42px]" style={{ fontWeight: '700', lineHeight: '1.05', letterSpacing: '-0.01em', color: '#FFA500' }}>The Skills That Matter Next:</span>
          <span className="block mt-1 text-[28px] md:text-[42px]" style={{ fontWeight: '300', lineHeight: '1.05', letterSpacing: '-0.01em', color: '#FFA500' }}>Preparing Your Workforce</span>
          <span className="block mt-1 text-[28px] md:text-[42px]" style={{ fontWeight: '300', lineHeight: '1.05', letterSpacing: '-0.01em', color: '#FFA500' }}>& Leaders for the AI Era</span>
        </h1>

        {/* Event Details */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2 text-white">
            <Calendar className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-lg md:text-2xl" style={{ fontWeight: '700' }}>February 20, 2026</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-lg md:text-2xl" style={{ fontWeight: '700' }}>Chamberlain&apos;s Steak & Fish House, Dallas</span>
          </div>
        </div>

        {/* RSVP Form in hero for mobile */}
        <div className="md:hidden">
          <RSVPForm variant="dark" />
        </div>
      </div>
    </section>
  )
}
