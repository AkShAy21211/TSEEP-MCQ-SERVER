# MERN Authentication & Test System

This is a full-stack MERN application that includes user authentication (mobile number & password) and an MCQ-based test with a feedback system.

## Project Structure


### Server (Backend)
```bash
📂 server          # Backend (Node.js + Express + MongoDB)
├── 📂 configs     # Configuration files (e.g., database connection)
├── 📂 controllers # Request handlers (Authentication, Test, Feedback)
├── 📂 middlewares # Middleware functions (Auth, Validation, etc.)
├── 📂 models      # Mongoose models (User, Test, Feedback)
├── 📂 routes      # API routes
├── 📂 services    # Business logic
├── 📂 utils       # Utility functions
├── .env          # Environment variables
├── .gitignore    # Files to ignore in Git
├── package.json  # Project dependencies
├── package-lock.json # Dependency lock file
```

## Features
- User Authentication (Register/Login with Mobile Number & Password)
- JWT-based Authentication
- User Role Selection (Student/Employee)
- MCQ Test with 5 questions
- Score Calculation (5 marks per question)
- Emoji-based Feedback System
- Responsive UI using Tailwind CSS

## Tech Stack
- Node.js + Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt.js for password hashing
- CORS & dotenv for security

## Deployment
- **Frontend:** Vercel / Netlify
- **Backend:** Vercel / Render
- **Database:** MongoDB Atlas

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone  https://github.com/AkShAy21211/TSEEP-MCQ-SERVER.git
   cd TSEEP-MCQ-SERVER
   ```
2. Install dependencies
   ```bash
   cd TSEEP-MCQ-SERVER && npm install
   ```
3. Start the development servers:
   ```bash
   npm run dev
   ```

## Contributing
Feel free to fork the repo and create a pull request if you want to improve this project.

## License
This project is open-source and available under the MIT License.
