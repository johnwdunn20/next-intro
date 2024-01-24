import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";
import { connectToDB } from '@utils/databse';
import User from "@models/user";

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
    try {
      const sessionUser = await User.findOne({ email: session.user.email });

      if (sessionUser) {
        session.user.id = sessionUser?._id.toString();
      }

      return session;

    } catch(e) {
      console.log('Error: ', e);
    }
  },
  async signIn({ profile }) {
    try {
      await connectToDB();

      // check if user exists in db
      const user = await User.findOne({ email: profile.email });
      // if not, create user in db
      if (!user) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(' ', '').toLowerCase(),
          image: profile.picture,
        });
      }

      return true;
    } catch(e) {
      console.log('Error: ', e);
    }
  }
});

export { handler as GET, handler as POST };