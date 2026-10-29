# Student Attendance Management System

A web-based Student Attendance Management System built with **React.js, Tailwind CSS, and Spring Boot REST API**. The system helps teachers manage students and track attendance, while students can log in and view their own attendance records.

## 🌐 Live Demo

- **Frontend:** [Student Attendance System](https://seum-sokneth.github.io/System_Attendance/#/login)
- **Backend API:** [Spring Boot REST API](https://system-attendace.onrender.com)

> Note: The backend may take some time to respond if the hosting service is sleeping. Update these URLs if your deployment addresses change.

## 📌 Project Overview

The Student Attendance Management System is designed to make attendance management easier, faster, and more organized. It provides separate access for teachers and students using role-based authentication.

Teachers can manage student information and attendance records, while students can access their own attendance information.

## ✨ Features

### Authentication and Authorization
- User registration and login.
- JWT-based authentication.
- Role-based access for teachers and students.
- Protected API endpoints.

### Teacher Features
- Manage student information.
- View and search student records.
- Manage attendance records.
- Access attendance information through the dashboard.

### Student Features
- Log in to the system.
- View personal attendance records.
- Access student-specific information.

### Technical Features
- RESTful API architecture.
- Frontend and backend separation.
- Axios for HTTP requests.
- Responsive user interface.
- API integration between React and Spring Boot.
- Deployment using GitHub Pages and Render.

## 🛠️ Technologies Used

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| HTTP Client | Axios |
| Backend | Java, Spring Boot |
| Security | Spring Security, JWT |
| Database | Configured in the backend application |
| Frontend Hosting | GitHub Pages |
| Backend Hosting | Render |
| API Testing | Postman |
| Version Control | Git, GitHub |

## 🏗️ System Architecture

```text
          User
           |
           v
    React.js Frontend
       (Vite + UI)
           |
           | HTTP Requests
           | Axios + JWT
           v
   Spring Boot REST API
           |
           v
    Spring Security
           |
           v
        Database
```

The frontend sends HTTP requests to the backend API. Spring Boot processes requests, validates access permissions, performs database operations, and returns JSON responses.

## 📂 Project Structure

### Frontend

```text
system_attendance/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   │   └── AuthContext
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
├── vite.config.js
└── README.md
```

*Note: Adjust the example structure to match your actual source folders and filenames.*

### Backend

```text
System_Attendace/
├── src/
│   └── main/
│       ├── java/
│       │   └── Api/
│       │       └── System_Attendace/
│       └── resources/
│           └── application.properties
├── pom.xml
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Install the following tools:

- Node.js and npm
- Java Development Kit (JDK)
- IntelliJ IDEA or another Java IDE
- PostgreSQL or the database configured for your backend
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/seum-sokneth/System_Attendance.git
```

Open the project folder in VS Code.

### 2. Install Frontend Dependencies

Open a terminal in the frontend project directory:

```bash
npm install
```

### 3. Configure the API URL

Create or update the frontend `.env` file:

```env
VITE_API_URL=https://system-attendace.onrender.com
```

Make sure your Axios configuration uses this environment variable and appends the appropriate API paths.

For example:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
```

If your backend routes use the `/api` prefix, include it in `baseURL` or in the individual request paths, according to your existing configuration. Avoid adding `/api` twice.

For local development, use the appropriate local Spring Boot URL instead.

### 4. Start the Frontend

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

### 5. Run the Backend

Open the backend project in IntelliJ IDEA and run the main Spring Boot application.

Alternatively, if Maven is installed and the project uses Maven:

```bash
mvn spring-boot:run
```

Configure the database connection, JWT secret, and other required settings before starting the backend. Never commit database passwords or production secrets to GitHub.

## 🔌 API Integration

The React frontend communicates with the Spring Boot backend through REST API endpoints.

Example endpoint categories:

| Method | Purpose |
|---|---|
| POST | Authenticate users |
| GET | Retrieve student information |
| POST | Create student records |
| PUT | Update student information |
| DELETE | Delete student records |
| GET | Retrieve attendance records |
| POST | Create attendance records |

The actual endpoint paths depend on the controller mappings implemented in the backend.

## 🔐 Security

The application uses Spring Security and JSON Web Tokens (JWT) to support authentication and access control.

- Users authenticate before accessing protected resources.
- JWT tokens are used for authenticated requests.
- Teachers and students have different access permissions.
- Backend endpoints enforce authorization rules.

**Security recommendation:** Validate permissions on the backend rather than relying only on frontend route protection.

## 🚀 Deployment

### Frontend — GitHub Pages

1. Push your frontend code to GitHub.
2. Configure the production API URL in the frontend environment.
3. Build the frontend:

   ```bash
   npm run build
   ```

4. Deploy the generated `dist` folder using your configured GitHub Pages deployment workflow.
5. Verify the login page and API requests.

### Backend — Render

1. Push the Spring Boot backend to GitHub.
2. Create a Web Service on Render.
3. Configure the Java build and start commands for your project.
4. Set the required database connection and JWT environment variables.
5. Configure CORS to allow requests from your deployed frontend origin.
6. Deploy the service and test the API endpoints.

Ensure the frontend and backend use compatible production URLs and that the backend database is accessible in the deployment environment.

## 🧪 Testing

Use Postman or the frontend application to test:

- User registration and login.
- JWT authentication.
- Teacher and student authorization.
- Student CRUD operations.
- Student search.
- Attendance creation and retrieval.
- Unauthorized and invalid requests.
- Frontend-to-backend API communication.

## 🎯 Project Objectives

- Apply frontend and backend development skills in a real-world project.
- Understand REST API development and integration.
- Practice authentication and role-based authorization.
- Learn database-backed application development.
- Gain experience deploying a full-stack web application.

## 🔮 Future Improvements

- Attendance reports by date and student.
- Monthly attendance summaries.
- Export attendance reports to PDF or Excel.
- Dashboard statistics and visual charts.
- Pagination and advanced search.
- Improved automated testing and API documentation.

## 👨‍💻 Author

**Student Attendance Management System**

Developed as a full-stack web development project using React.js and Spring Boot.

## 📄 License

This project is intended for educational and learning purposes. Add a license file if you plan to distribute or reuse the project under specific terms.
