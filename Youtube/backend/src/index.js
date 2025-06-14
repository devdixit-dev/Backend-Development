import 'dotenv/config';
import connectDB from "./db/database.js";
import app from './app.js';

connectDB()
.then(() => {
  app.on('error', (error) => { console.log(`ERROR in App: ${error}`) });
  app.listen(process.env.PORT || 8000, () => { console.log(`Express App is running on port ${process.env.PORT} 🚀`) });
})
.catch((e) => { console.log(`MongoDB connection failed ${e}`) })

// // this method called efi's (() => {}) ()
// ;( async() => {
//   try{
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//     .then(() => { console.log(`Database connected ✅`) })
//     .catch((e) => { console.log(`Error while connecting ${e}`) });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on ${process.env.PORT} 🚀`);
//     });
//   }
//   catch(e) {
//     console.log(`Error connecting database ${e}`);
//     throw e;
//   }
// } ) ()