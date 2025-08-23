import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  // Skip middleware for public routes
  if (
    pathname.startsWith('/auth/callback') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/registration')
  ) {
    return NextResponse.next()
  }

  // Protect API routes
  if (!token && pathname.startsWith('/api')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.next()
}
