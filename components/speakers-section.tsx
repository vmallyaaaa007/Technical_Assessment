import Image from "next/image"

const speakers = [
  {
    name: "Rob Lauber",
    image: "/images/RobLauber 1.png",
    bio: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI."
  },
  {
    name: "Krishna Kumar",
    image: "/images/Krishna Kumar.png",
    bio: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today."
  },
  {
    name: "Sudipto Mitra",
    image: "/images/Sudipto Mitra.png",
    bio: "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion."
  }
]

export function SpeakersSection() {
  return (
    <section 
      className="py-6 md:py-8 px-5 md:px-6"
      style={{
        background: 'linear-gradient(180deg, #3b82f6 0%, #2563eb 30%, #1d4ed8 60%, #1e40af 100%)'
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 
          className="text-lg md:text-xl font-bold mb-5 md:mb-6"
          style={{ color: '#f5a623' }}
        >
          Featured Speakers
        </h2>
        
        <div className="space-y-5 md:space-y-5">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex gap-3 md:gap-4">
              {/* Photo with blue gradient overlay */}
              <div className="flex-shrink-0 relative w-[100px] h-[100px] md:w-[130px] md:h-[130px]">
                <Image
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  width={130}
                  height={130}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 
                  className="font-bold text-sm md:text-[15px] mb-1 md:mb-1.5"
                  style={{ color: '#00FFFF' }}
                >
                  {speaker.name}
                </h3>
                <p className="text-white text-[11px] md:text-[12px] leading-[1.5] md:leading-[1.6]">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
