<h1 align="center">HeartSync ✨</h1>

<p align="center">
  <img src="/client/public/readme-login.png" alt="Demo App" />
</p>

## About This Project

HeartSync is a dating app that allows users to connect, chat, and build meaningful relationships. This project showcases modern web development techniques and features essential for a successful dating platform.

### Key Features

- 🔐 **Secure Authentication**: Implemented using JWT for user security.
- 🛡️ **Route Protection**: Ensures that users can only access their profiles and chats.
- 👤 **User Profiles**: Create and update personal profiles with images and details.
- 🖼️ **Image Uploads**: Users can upload profile pictures easily.
- 🔄 **Swipe Functionality**: Swipe right to like or left to pass on profiles.
- 💬 **Real-time Chat**: Instant messaging feature for users to connect.
- 🔔 **Notifications**: Get real-time alerts for new matches and messages.
- 🤝 **Matching Algorithm**: Smart algorithm for connecting compatible users.
- 📱 **Responsive Design**: Optimized for mobile and desktop viewing.
- ⌛ **And much more!**

## Setup Instructions

### Environment Variables

Create a `.env` file in the root of your project and add the following configuration:

````bash
PORT=5000
MONGO_URI=<your_mongo_uri>

JWT_SECRET=<your_very_strong_secret>

NODE_ENV=development
CLIENT_URL=http://localhost:5173

CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>


### Run this app locally

- Set `NODE_ENV=production` and build the app 👇

```shell
npm run build
````

### Start the app

```shell
npm run start
```
