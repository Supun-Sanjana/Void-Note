'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthStateChange = async () => {
      // Supabase automatically handles the OAuth callback
      // We just need to redirect the user
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session) {
        router.push('/dashboard') // or wherever you want to go after login
      } else {
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