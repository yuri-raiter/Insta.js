import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      username?: string | null
      uid?: string | null
    } & DefaultSession['user']
  }
}