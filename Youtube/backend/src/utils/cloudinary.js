import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

const uploadOnCloudinary = async(localFilePath) => {
  try {
    if(!localFilePath) return null
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath,
      { resource_type: 'auto' }
    )
    // file has been uploaded
    console.log(`File is uploaded on cloudinary: ${response}`)
    return response
  } catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally saved temp file as the upload operation got failed
    return null
  }
}

export default uploadOnCloudinary;