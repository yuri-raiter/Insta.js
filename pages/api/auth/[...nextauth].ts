import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from "next-auth/providers/github"


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID!,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    // })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    async session({ session, token, user }) {
      const nameArray = session.user.name?.split(' ')
      const nameArrayLength = nameArray![nameArray!.length - 1]
      const username = nameArray![0].concat(nameArrayLength).toLocaleLowerCase()

      session.user.username = username
      session.user.uid = token.sub

      return session
    }
  }
})