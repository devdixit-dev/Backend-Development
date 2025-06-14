import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
      .then(() => { console.log(`Database connected ✅`) })
      .catch((e) => { console.log(`Error while connecting ${e}`) });
  }
  catch (e) {
    console.log(`Error connecting database ${e}`);
    throw e;
  }
}

export default connectDB;