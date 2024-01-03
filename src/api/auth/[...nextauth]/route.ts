import NextAuth, { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { BackendURL } from '~/shared/config/constants'
import { decode } from 'next-auth/jwt'
import jwt from 'jsonwebtoken'

import { cookies } from 'next/headers'

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // session: { strategy: 'jwt' },
  pages: {
    signIn: '/auth',
    error: '/auth/error',
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      id: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'joe.doe@gmail.com',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials, request) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const dto = JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        })
        const response = await fetch(
          `${BackendURL}/api/auth/local/signin`,
          {
            method: 'POST',
            body: dto,
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        if (response.status === 401) {
          console.log(response.statusText)
          return null
        }

        const tokens = await response.json()

        Object.entries<string>(tokens).forEach(([key, value]) => {
          cookies().set({
            name: key,
            value: value,
            httpOnly: true,
          })
        })

        const user = jwt.verify(
          tokens.access_token,
          process.env.NEXTAUTH_SECRET || 'access-token',
        )

        // if (typeof user === 'object') {
        //   return { ...tokens, ...user }
        // }

        return {...tokens}
      },
    }),
  ],
  callbacks: {
    async jwt(params) {
      console.log(params, 'JWT')
      if (params.user) {
        return { ...params.user, ...params.token }
      }
      return params.token
    },

    async session(params) {
      const jwtObject = jwt.verify(
        params.token.access_token,
        process.env.NEXTAUTH_SECRET || 'access-token',
      )

      if (typeof jwtObject === 'object') {
        params.session.user = jwtObject.user
      }

      return params.session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
