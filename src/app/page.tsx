'use client'
import { useState, useEffect } from 'react'
import ScriptUploader from '@/components/ScriptUploader'
import LoadingSpinner from '@/components/LoadingSpinner'
import { getMemberData } from "@/utils/memberstack"
import { scriptService } from '@/services/scriptService'
import { categories } from '@/components/CategorySelector'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const preloadData = async () => {
      try {
        // Get member data
        const { teamId, memberstackId } = await getMemberData()
        // Preload scripts
        const scriptsPromises = categories.map(category => 
          scriptService.getScripts(teamId, memberstackId, category)
        )
        await Promise.all(scriptsPromises)
        // Wait additional 1 second to ensure smooth transition
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsLoading(false)
      } catch (err) {
        console.error('Error preloading:', err)
        // Still hide loader after 2 seconds even if there's an error
        setTimeout(() => setIsLoading(false), 2000)
      }
    }
    preloadData()
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-0.5">
      <div className="w-full max-w-7xl flex justify-center p-3">
        <ScriptUploader />
      </div>
    </main>
  )
}
