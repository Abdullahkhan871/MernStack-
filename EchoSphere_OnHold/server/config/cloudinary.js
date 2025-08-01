import { config, v2 as cloudinary } from 'cloudinary';

const cloudinaryConfig = () => config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinaryConfig, cloudinary };
