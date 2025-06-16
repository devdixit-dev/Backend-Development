import mongoose from "mongoose";

const video_schema = new mongoose.Schema({
  videoFile: {
    type: String, // cloudinary url
    required: true
  },
  thumbnail: {
    type: String, // cloudinary url
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number, // cloudinary url
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true})

const Video = mongoose.model("Video", video_schema);

export default Video;