import { v2 as cloudinary } from 'cloudinary';
import config from '../config/config';
const { cloudinaryConfig: cloudConfig } = config;

cloudinary.config({
  cloud_name: cloudConfig.cloud_name,
  api_key: cloudConfig.api_key,
  api_secret: cloudConfig.api_secret,
});

export default cloudinary;
