import { RSVPForm } from "./rsvp-form"

export function Footer() {
  return (
    <footer className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/restaurant-background.png')`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 px-5 md:px-6 py-5 md:py-6">
        <div className="max-w-3xl mx-auto">
          {/* Space is limited text */}
          <p className="text-base md:text-lg font-medium mb-4 md:mb-5" style={{ color: '#f5a623' }}>
            Space is limited.
          </p>
          
          {/* RSVP Form */}
          <div className="mb-6 md:mb-8">
            <RSVPForm variant="dark" />
          </div>
          
          {/* Bottom row with logo and copyright */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
            {/* Logo */}
            <div>
              <span className="text-white text-xl md:text-2xl font-light tracking-wide">
                simpl<span className="text-orange-500 font-normal">i</span>learn
              </span>
            </div>
            
            {/* Copyright */}
            <p className="text-white/90 text-xs md:text-sm">
              © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
