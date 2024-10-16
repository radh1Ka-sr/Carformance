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

![Screenshot (540)](https://github.com/user-attachments/assets/2380ff0e-1267-45ca-936a-38f92427cfb9)
![Screenshot (541)](https://github.com/user-attachments/assets/676209e6-d8c8-4689-95cf-b4ea34d25e61)
![Screenshot (543)](https://github.com/user-attachments/assets/cb5c92e6-d838-4ab7-b054-9fc52bb49a50)
![Screenshot (545)](https://github.com/user-attachments/assets/f66942fb-3713-4e3a-a2f9-c00fe7dd4924)
![Screenshot (546)](https://github.com/user-attachments/assets/24a9ce96-d8c5-4e87-a472-5c287a34c084)
![Screenshot (547)](https://github.com/user-attachments/assets/102274d1-7e53-4cb8-830e-4ecbeddd13c0) 

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
node server.js

# 6. Navigate to the frontend directory
cd ../frontend

# 7. Install frontend dependencies
npm install

# 8. Run the frontend server
npm start




