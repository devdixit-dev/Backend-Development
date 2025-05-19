import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String
});

const User = mongoose.model('users', user_schema);

export default User