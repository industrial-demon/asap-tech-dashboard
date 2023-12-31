import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      lastName: string
      createdAt:  string
      name: string
      email: string
      status: string
      roles: string
      jobDescription?: string
      profileImage?: string
    }
    access_token: string
    refresh_token: string
  }
}

import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string
    refresh_token: string

    user: {
      id: string
      lastName: string
      createdAt:  string
      name: string
      email: string
      status: string
      roles: string
      jobDescription?: string
      profileImage?: string
    }
  }
}
