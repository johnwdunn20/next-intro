import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  // mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI || '', {
      dbName: "social-media",
    })

    isConnected = true;
    console.log('=> using new database connection');

  } catch (e) {
    console.log('=> an error occurred when connecting to the database', e);
  }
}