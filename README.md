# CarFormance - Car Wash Booking System 🚗🧼

**CarFormance** is a full-stack web application designed to streamline the car wash booking process. It enables users to book same-day car wash appointments with car centers dynamically sorted by their earliest availability. Car center owners have access to a dedicated dashboard to manage bookings, view service history, and optimize service availability.

## Features ✨

- **User Dashboard**: Book car wash appointments, view past bookings, and check the availability of car centers in real-time.
- **Owner Dashboard**: Manage car wash bookings, track service history, and monitor center availability.
- **Authentication**: Secure login system using JWT (JSON Web Tokens) and Bcrypt.js for password hashing.
- **Real-time Sorting**: Car centers are dynamically sorted by their earliest availability to ensure efficient booking for users.
- **RESTful APIs**: Well-structured and documented APIs for managing users, car centers, and appointments.

## Tech Stack 🛠️

### Frontend:
- **React.js**: Dynamic user interfaces for both users and car center owners.
- **HTML5** & **CSS3**: Responsive and clean design.
  
### Backend:
- **Node.js** & **Express.js**: Server-side logic, API development, and routing.
  
### Database:
- **MongoDB**: NoSQL database for storing user, car center, and appointment data.
  
### Authentication & Security:
- **JWT**: Secure token-based authentication.
- **Bcrypt.js**: Password encryption to ensure data protection.

### API Testing:
- **Postman**: For thorough API testing and validation.

## Getting Started 🚀


To run this project locally, follow these steps:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/carformance.git

# 2. Navigate to the project directory
cd carformance

# 3. Install backend dependencies
cd backend
npm install

# 4. Set up environment variables
# Create a .env file in the backend directory and add the following values:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key

# 5. Run the backend server
npm start
# Backend server will run at http://localhost:5000

# 6. Navigate to the frontend directory
cd ../frontend

# 7. Install frontend dependencies
npm install

# 8. Run the frontend server
npm start
# Frontend server will run at http://localhost:3000
