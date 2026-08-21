const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Cloudinary storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'yourplaces_uploads',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    public_id: (req, file) => {
      const fileName = file.originalname.split('.')[0];
      return `${fileName}-${Date.now()}`;
    },
  },
});

const fileUpload = multer({
  limits: { fileSize: 5000000 }, // 5MB limit
  storage: storage,
  fileFilter: (req, file, cb) => {
    const isValid = ['image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype);
    let error = isValid ? null : new Error('Invalid mime type!');
    cb(error, isValid);
  },
});

module.exports = fileUpload;