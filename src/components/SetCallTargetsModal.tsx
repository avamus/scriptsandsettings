'use client'

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import Image from 'next/image'
import { Info } from 'lucide-react'
import { getMemberData } from "@/utils/memberstack"

type TargetType = {
  name: string;
  min: number;
  max: number;
  unit?: string;
}

const targetTypes: TargetType[] = [
  { name: "Overall Performance", min: 0, max: 100, unit: "%" },
  { name: "Number of calls", min: 0, max: 50 },
  { name: "Call length", min: 5, max: 30, unit: "minutes" }
]

export default function SetCallTargetsModal() {
  const [activeCategory] = useState<'intermediate' | 'expert'>('intermediate')
  const [targets, setTargets] = useState(targetTypes.map(() => ""))
  const [showInfo, setShowInfo] = useState<number | null>(null)
  const [teamId, setTeamId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  // Initialize team data
  useEffect(() => {
    const initializeMemberData = async () => {
      try {
        const { teamId } = await getMemberData()
        setTeamId(teamId)
        
        // Fetch existing goals if any
        if (teamId) {
          const response = await fetch(`/api/performance-goals?teamId=${teamId}`)
          if (response.ok) {
            const data = await response.json()
            if (data) {
              setTargets([
                data.overall_performance_goal.toString(),
                data.number_of_calls_average.toString(),
                targets[2] // Preserve call length value
              ])
            }
          }
        }
      } catch (err) {
        console.error('Member data error:', err)
        setError('Error loading member data. Please refresh the page.')
      }
    }

    initializeMemberData()
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowInfo(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!teamId) {
      setError('Team ID not available. Please refresh the page.')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/performance-goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          teamId,
          overall_performance_goal: Number(targets[0]),
          number_of_calls_average: Number(targets[1])
        })
      })

      if (!response.ok) {
        throw new Error('Failed to save targets')
      }

      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 3000)
    } catch (err) {
      console.error('Error saving targets:', err)
      setError('Failed to save targets. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const getGradientColor = (value: number) => {
    if (value < 50) return 'from-[#50c2aa] to-[#50c2aa]'
    if (value < 80) return 'from-[#f8b923] to-[#f8b923]'
    return 'from-[#ff0000] to-[#ff0000]'
  }

  const updateTargets = (index: number, value: string) => {
    const newTargets = [...targets]
    newTargets[index] = value
    setTargets(newTargets)
  }

  const renderTargetInputs = () => {
    return targetTypes.map((target, index) => (
      <div key={`${activeCategory}-${index}`} className="mb-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Label
              htmlFor={`${activeCategory}-target-${index}`}
              className="text-[#5b06be] text-xs sm:text-sm font-montserrat font-semibold"
            >
              {target.name}
            </Label>
            <div className="relative">
              <Info
                className="w-4 h-4 text-[#5b06be] cursor-pointer"
                onClick={() => setShowInfo(index)}
              />
              {showInfo === index && (
                <div ref={popupRef} className="absolute left-0 mt-2 p-2 bg-white border border-gray-200 rounded-md shadow-md z-10 w-48">
                  <p className="text-xs text-gray-600">This is some information about {target.name}.</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 h-2">
              <div className="absolute inset-0 bg-[#f8b922] rounded-full"></div>
              <div 
                className="absolute inset-0 bg-gradient-to-r rounded-full pointer-events-none" 
                style={{
                  clipPath: `inset(0 ${100 - (Number(targets[index] || target.min) / target.max) * 100}% 0 0)`,
                }}
              >
                <div className={`w-full h-full ${getGradientColor(Number(targets[index] || target.min))}`}></div>
              </div>
              <input
                id={`${activeCategory}-target-${index}`}
                type="range"
                min={target.min}
                max={target.max}
                value={targets[index] || target.min}
                onChange={(e) => {
                  updateTargets(index, e.target.value)
                }}
                className="absolute inset-0 w-full h-full appearance-none bg-transparent focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-300 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-in-out [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-gray-300 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:ease-in-out [&::-moz-range-thumb]:hover:scale-110"
              />
            </div>
            <span className="text-lg font-medium min-w-[30px]">
              {targets[index] || target.min}
            </span>
            {target.unit && (
              <span className="text-lg text-gray-600 min-w-[80px]">
                {target.unit}
              </span>
            )}
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="w-full max-w-[600px] bg-white flex flex-col rounded-[20px] overflow-hidden px-3 sm:px-5 py-2 sm:py-3 relative">
      <div className="w-full bg-white rounded-[20px] px-4 py-2 sm:py-3">
        <div className="flex items-start space-x-2 -mt-1">
          <div className="flex-shrink-0 mt-[2px]">
            <Image
              src="https://res.cloudinary.com/drkudvyog/image/upload/v1733749804/Target_icon_ghep9p.png"
              alt="Target icon"
              width={24}
              height={24}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[18px] md:text-[16px] sm:text-[14px] font-extrabold font-montserrat leading-tight text-[#5b06be] mb-1">
              Set the challenge your team must overcome to unlock a new avatar. 
            </h2>
            <p className="text-[11px] md:text-[10px] sm:text-[9px] font-bold font-montserrat text-gray-600 leading-snug">
              Direct your team to achieve your company’s standards.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col">
          <div className="py-2 sm:py-3 px-8">
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                {error}
              </div>
            )}
            {renderTargetInputs()}
          </div>
          <div className="p-8 border-t flex justify-center mt-auto">
            <Button
  onClick={handleSubmit}
  disabled={isLoading || saveSuccess}
  className={`
    px-6 h-[45px] rounded-[20px] text-lg 
    font-semibold shadow-lg transition-all 
    duration-200 hover:scale-[1.02] 
    w-full max-w-xs border-2
    ${saveSuccess 
      ? 'bg-green-500 text-white border-green-500 hover:bg-green-600' 
      : 'bg-white text-black hover:bg-gray-50'
    }
  `}
>
  {isLoading ? 'Saving...' : saveSuccess ? 'Success!' : 'Save Targets'}
</Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
