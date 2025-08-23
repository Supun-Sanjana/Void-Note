'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthStateChange = async () => {
      console.log('📌 Callback page loaded !!!')

      // Get session
      const { data: { session }, error } = await supabase.auth.getSession()

      if (error) {
        console.error('❌ Error getting session:', error)
      } else {
        console.log('✅ Session data:', session)
      }

      if (session) {
        console.log('➡️ Redirecting to /dashboard')
        router.push('/dashboard')
      } else {
        console.log('⚠️ No session, redirecting to /login?error=auth_failed')
        router.push('/login?error=auth_failed')
      }
    }

    handleAuthStateChange()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Signing you in...</p>
      </div>
    </div>
  )
}

