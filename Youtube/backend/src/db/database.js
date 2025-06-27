import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
      .then(() => { console.log(`Database connected ✅`) })
      .catch((e) => { console.log(`Error while connecting ${e}`) });
  }
  catch (e) {
    console.log(`Error connecting database ${e}`);
    throw e;
  }
}

export default connectDB;