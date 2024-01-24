import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";

// console.log('CLIENTID: ', process.env.GOOGLE_CLIENT_ID);

// configured google here: https://console.cloud.google.com/apis/credentials/consent?project=social-media-412203

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_CLIENT_ID || '',
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
    //   issuer: process.env.AUTH0_DOMAIN || '',
    // }),
  ],

  async session({session}) {

  },
  async signIn({ profile }) {
    try {
      
    } catch (e) {

    }
  }
});

export { handler as GET, handler as POST };