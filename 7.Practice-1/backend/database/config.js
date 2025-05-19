import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {dbName: process.env.DB_NAME})
  .then(() => { console.log(`Database connected`) })
  .catch((e) => { console.log(`Error while connecting database: ${e}`) });
}

export default connectDB;