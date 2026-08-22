# 🌍 YourPlaces — Full-Stack MERN Application

A full-stack social location-sharing platform where users can share, view, and manage places they visit with interactive maps, image uploads, and secure authentication.

---

## 🔗 Live Deployments

* **Frontend:** [https://yourplaces-parth.netlify.app](https://yourplaces-parth.netlify.app) (Hosted on Netlify)
* **Backend API:** [Your Live Render API URL](https://your-backend-service.onrender.com) (Hosted on Render)

---

## 🏗️ Architecture & Decoupled Setup

The application is structured into two independent services:

* **Frontend:** React SPA deployed on **Netlify** with client-side routing and integration with the Google Maps JavaScript API.
* **Backend:** REST API built with Node.js/Express deployed on **Render**, connected to **MongoDB Atlas** for database storage and **Cloudinary** for persistent cloud asset storage.

---

## ✨ Features

* **User Authentication:** Secure JWT-based authentication with bcrypt password hashing.
* **Location Sharing:** Create, edit, and delete places with interactive Google Maps integration and reverse geocoding.
* **Cloud Media Storage:** Direct media upload pipeline powered by **Multer** and **Cloudinary** to preserve uploaded images on ephemeral cloud hosting.
* **Responsive UI:** Custom responsive layouts and modal dialogs built with vanilla CSS.

---

## 🛠️ Tech Stack

### Client (Frontend)
* React.js (Hooks, Context API)
* React Router DOM
* Google Maps JavaScript API

### Server (Backend)
* Node.js & Express.js
* MongoDB Atlas & Mongoose
* JSON Web Tokens (JWT) & bcryptjs
* Multer & `multer-storage-cloudinary`
* Google Geocoding API

---

## 🚀 Local Development Setup

### 1. Backend Setup

```bash
git clone [https://github.com/parthdhamejani/YourPlaces-Backend.git](https://github.com/parthdhamejani/YourPlaces-Backend.git)
cd YourPlaces-Backend
npm install
```

Create a `.env` file in the root of the backend directory:
```env
PORT=5000
DB_USER=your_mongodb_user
DB_PASSWORD=your_mongodb_password
DB_NAME=yourplaces
JWT_KEY=your_jwt_secret_key
GOOGLE_API_KEY=your_google_geocoding_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:
```bash
npm start
```

---

### 2. Frontend Setup

```bash
git clone [https://github.com/parthdhamejani/YourPlaces-Frontend.git](https://github.com/parthdhamejani/YourPlaces-Frontend.git)
cd YourPlaces-Frontend
npm install
```

Create a `.env` file in the root of the frontend directory:
```env
REACT_APP_BACKEND_URL=http://localhost:5000/api
REACT_APP_ASSET_URL=http://localhost:5000
REACT_APP_GOOGLE_API_KEY=your_google_maps_api_key
```

Start the React development server:
```bash
npm start
```

---

## 🔒 API Endpoints

### User Routes (`/api/users`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Fetch all registered users | No |
| `POST` | `/signup` | Register a new user with an avatar image | No |
| `POST` | `/login` | Authenticate user & return token | No |

### Places Routes (`/api/places`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/:pid` | Fetch single place by place ID | No |
| `GET` | `/user/:uid` | Fetch all places created by user ID | No |
| `POST` | `/` | Create a new place with image upload | Yes (Bearer Token) |
| `PATCH` | `/:pid` | Update title and description | Yes (Bearer Token) |
| `DELETE` | `/:pid` | Delete place and remove image from Cloudinary | Yes (Bearer Token) |
