import Image from 'next/image'

export function ExpertPerspectives() {
  return (
    <section 
      className="px-5 md:px-6 pb-5 md:pb-6"
      style={{
        background: 'linear-gradient(180deg, #1e40af 0%, #1d4ed8 100%)'
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div 
          className="rounded-md px-4 md:px-5 py-3 md:py-4 relative"
        >
          {/* Background image overlay */}
          <Image
            src="/images/try%20SLH%2B.png"
            alt="Additional Expert Perspectives Background"
            fill
            className="object-cover rounded-md"
            style={{ zIndex: 0 }}
          />
          
          {/* Content overlay */}
          <div className="relative z-10">
            <h2 
              className="font-bold text-xs md:text-sm mb-1"
              style={{ color: '#00FFFF' }}
            >
              Additional Expert Perspectives
            </h2>
            <p 
              className="text-[11px] md:text-[12px] leading-relaxed"
              style={{ color: '#FFFFFF' }}
            >
              Invited experts from leading consulting and enterprise learning organizations will contribute
              short perspectives, offering insight into how large organizations are evolving skills and leadership
              models in the AI era.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
