"use client"

import { useState } from "react"
import { Mail, User, Building, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitRSVP } from "@/app/actions/airtable"

interface RSVPFormProps {
  variant?: "dark" | "light"
}

export function RSVPForm({ variant = "light" }: RSVPFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [showFullForm, setShowFullForm] = useState(false)
  const isDark = variant === "dark"
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const result = await submitRSVP(formData)
    
    if (result.success) {
      setMessage({ type: 'success', text: result.message || 'RSVP submitted successfully!' })
      e.currentTarget.reset()
      setShowFullForm(false)
    } else {
      setMessage({ type: 'error', text: result.error || 'Submission failed' })
    }
    
    setIsSubmitting(false)
  }

  if (!showFullForm) {
    return (
      <div className="flex flex-col sm:flex-row gap-0 max-w-lg w-full">
        <div className={`relative flex-1 flex items-center border sm:rounded-l-md sm:rounded-r-none rounded-t-md sm:rounded-t-none ${
          isDark 
            ? 'bg-white/10 border-white/20' 
            : 'bg-gray-100 border-gray-200'
        }`}>
          <Mail className={`ml-3 w-4 h-4 md:w-5 md:h-5 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
          <input
            type="email"
            name="email"
            placeholder="Enter your work email to confirm your attendance"
            className={`w-full px-2 md:px-3 py-2.5 md:py-3 h-10 md:h-11 text-xs md:text-sm bg-transparent border-none outline-none ${
              isDark 
                ? 'text-white placeholder:text-white/60' 
                : 'text-gray-700 placeholder:text-gray-400'
            }`}
          />
        </div>
        <Button 
          onClick={() => setShowFullForm(true)}
          className="bg-[#f5a623] hover:bg-[#e09515] text-white font-semibold px-4 md:px-6 h-10 md:h-11 sm:rounded-l-none sm:rounded-r-md rounded-b-md sm:rounded-b-none rounded-t-none sm:rounded-t-none whitespace-nowrap text-xs md:text-sm"
        >
          RSVP Now
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-lg w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`relative flex items-center border rounded-md ${
          isDark 
            ? 'bg-white/10 border-white/20' 
            : 'bg-gray-100 border-gray-200'
        }`}>
          <Mail className={`ml-3 w-4 h-4 md:w-5 md:h-5 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
          <input
            type="email"
            name="email"
            placeholder="Work Email *"
            required
            className={`w-full px-2 md:px-3 py-2.5 md:py-3 h-10 md:h-11 text-xs md:text-sm bg-transparent border-none outline-none ${
              isDark 
                ? 'text-white placeholder:text-white/60' 
                : 'text-gray-700 placeholder:text-gray-400'
            }`}
          />
        </div>

        <div className={`relative flex items-center border rounded-md ${
          isDark 
            ? 'bg-white/10 border-white/20' 
            : 'bg-gray-100 border-gray-200'
        }`}>
          <User className={`ml-3 w-4 h-4 md:w-5 md:h-5 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            className={`w-full px-2 md:px-3 py-2.5 md:py-3 h-10 md:h-11 text-xs md:text-sm bg-transparent border-none outline-none ${
              isDark 
                ? 'text-white placeholder:text-white/60' 
                : 'text-gray-700 placeholder:text-gray-400'
            }`}
          />
        </div>

        <div className={`relative flex items-center border rounded-md ${
          isDark 
            ? 'bg-white/10 border-white/20' 
            : 'bg-gray-100 border-gray-200'
        }`}>
          <Building className={`ml-3 w-4 h-4 md:w-5 md:h-5 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
          <input
            type="text"
            name="company"
            placeholder="Company"
            className={`w-full px-2 md:px-3 py-2.5 md:py-3 h-10 md:h-11 text-xs md:text-sm bg-transparent border-none outline-none ${
              isDark 
                ? 'text-white placeholder:text-white/60' 
                : 'text-gray-700 placeholder:text-gray-400'
            }`}
          />
        </div>

        <div className={`relative flex items-center border rounded-md ${
          isDark 
            ? 'bg-white/10 border-white/20' 
            : 'bg-gray-100 border-gray-200'
        }`}>
          <Briefcase className={`ml-3 w-4 h-4 md:w-5 md:h-5 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
          <input
            type="text"
            name="role"
            placeholder="Job Title"
            className={`w-full px-2 md:px-3 py-2.5 md:py-3 h-10 md:h-11 text-xs md:text-sm bg-transparent border-none outline-none ${
              isDark 
                ? 'text-white placeholder:text-white/60' 
                : 'text-gray-700 placeholder:text-gray-400'
            }`}
          />
        </div>

        <div className="flex gap-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#f5a623] hover:bg-[#e09515] text-white font-semibold px-6 h-10 md:h-11 rounded-md whitespace-nowrap text-xs md:text-sm flex-1"
          >
            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowFullForm(false)}
            className={`border ${
              isDark 
                ? 'border-white/20 text-white hover:bg-white/10' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            } font-semibold px-6 h-10 md:h-11 rounded-md whitespace-nowrap text-xs md:text-sm`}
          >
            Cancel
          </Button>
        </div>

        {message && (
          <div className={`p-3 rounded-md text-xs md:text-sm ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}
      </form>
    </div>
  )
}
