# LegistAI Task - Full Stack Application

A modern full-stack application with a Python Flask backend and Next.js frontend, featuring JWT authentication and SQL Server integration.

## 🏗️ Project Structure

```
legistai-task/
├── backend/                 # Python Flask API
│   ├── app/
│   │   ├── __init__.py      # Application factory
│   │   ├── config.py        # Configuration settings
│   │   ├── extensions.py    # Flask extensions
│   │   ├── models/          # Database models
│   │   │   ├── __init__.py
│   │   │   └── user.py      # User model
│   │   ├── auth/            # Authentication blueprint
│   │   │   ├── __init__.py
│   │   │   └── routes.py    # Auth routes (login, register, etc.)
│   │   ├── main/            # Main application blueprint
│   │   │   ├── __init__.py
│   │   │   └── routes.py    # General routes
│   │   └── utils/           # Utility modules
│   │       ├── __init__.py
│   │       └── auth.py      # JWT utilities
│   ├── app.py               # Application entry point
│   ├── requirements.txt     # Python dependencies
│   ├── requirements-dev.txt # Development dependencies
│   ├── .env.example         # Environment variables template
│   └── .gitignore          # Git ignore rules
├── client/                  # Next.js Frontend
│   ├── app/                 # Next.js 13+ App Router
│   │   ├── (dashboard)/     # Dashboard routes
│   │   ├── join-us/         # Registration page
│   │   ├── globals.css      # Global styles
│   │   └── layout.tsx       # Root layout
│   ├── components/          # React components
│   │   ├── auth/            # Authentication components
│   │   ├── ui/              # UI components
│   │   └── ...              # Other components
│   ├── lib/                 # Utility libraries
│   │   ├── auth/            # Authentication utilities
│   │   └── utils.ts         # General utilities
│   ├── public/              # Static assets
│   ├── package.json         # Node.js dependencies
│   ├── next.config.ts       # Next.js configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── .gitignore          # Git ignore rules
└── README.md               # This file
```

## ✨ Features

### Backend Features

- **JWT Authentication**: Secure token-based authentication
- **SQL Server Integration**: Database connectivity with SQLAlchemy ORM
- **User Management**: Registration, login, and user verification
- **Environment Configuration**: Flexible configuration management
- **Error Handling**: Comprehensive error handling and logging
- **Health Checks**: Application and database health monitoring
- **CORS Support**: Cross-origin resource sharing for frontend integration

### Frontend Features

- **Next.js 13+ App Router**: Modern React framework with app directory
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first responsive layout
- **Authentication UI**: Login, registration, and protected routes
- **Dashboard Interface**: User dashboard with multiple sections
- **Component Library**: Reusable UI components
- **Modern Styling**: Clean and professional interface

## API Endpoints

### Authentication (`/api/v1/auth/`)

- `POST /register` - Register a new user
- `POST /login` - Login with email and password
- `POST /check-user` - Check if user exists
- `POST /login-or-register` - Login or register if user doesn't exist
- `GET /verify` - Verify JWT token

### General

- `GET /` - Application status
- `GET /health` - Health check
- `POST /init-db` - Initialize database tables

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- Node.js 18+
- SQL Server (or SQL Server Express)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd legistai-task
   ```

2. **Backend Setup**

   ```bash
   cd backend

   # Create virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate

   # Install dependencies
   pip install -r requirements.txt

   # Setup environment variables
   cp .env.example .env
   # Edit .env with your database configuration

   # Run the backend
   python app.py
   ```

   Backend will be available at `http://127.0.0.1:5000`

3. **Frontend Setup**

   ```bash
   cd ../client

   # Install dependencies
   npm install

   # Run the development server
   npm run dev
   ```

   Frontend will be available at `http://localhost:3000`

### Development Workflow

1. Start the backend server first
2. Start the frontend development server
3. The frontend will proxy API requests to the backend automatically

## Environment Variables

- `FLASK_ENV`: Application environment (development/production)
- `SECRET_KEY`: Flask secret key
- `JWT_SECRET_KEY`: JWT signing key
- `DATABASE_URL`: Database connection string

## Database Configuration

The application uses SQL Server with SQLAlchemy ORM. Update the database configuration in `app/config.py` or use environment variables.

## Development

- The application uses Flask's development server by default
- Debug mode is enabled in development environment
- Database tables are created automatically on first run

## Production Deployment

1. Set `FLASK_ENV=production`
2. Update secret keys in environment variables
3. Configure production database
4. Use a production WSGI server (e.g., Gunicorn)

## Security Features

- Password hashing using Werkzeug
- JWT token authentication
- CORS support for cross-origin requests
- Environment-based configuration
- SQL injection protection via SQLAlchemy ORM

## Backend Setup

1.  **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2.  **Create a virtual environment:**

    ```bash
    python3 -m venv venv
    ```

3.  **Activate the virtual environment:**

    - On macOS and Linux:
      ```bash
      source venv/bin/activate
      ```
    - On Windows:
      ```bash
      .\\venv\\Scripts\\activate
      ```

4.  **Install the required packages:**

    ```bash
    pip install -r requirements.txt
    ```

5.  **Run the Flask application:**
    ```bash
    python app.py
    ```
    The backend will be running at `http://127.0.0.1:5000`.

## 🎨 Frontend Technologies

- **Next.js 13+**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Components**: Modular component architecture
- **Authentication**: JWT-based auth integration
- **Responsive Design**: Mobile-first approach

## 📱 Frontend Features

- **Dashboard**: Multi-section user dashboard
- **Authentication Pages**: Login and registration
- **Profile Management**: User profile and settings
- **Calendar Integration**: Calendar functionality
- **File Management**: Drive/file management interface
- **Legal Tools**: Law-related functionality
- **Responsive UI**: Works on all device sizes

## Database

The application uses a SQL Server database on Azure. The connection string is included in the backend code. Make sure you have the necessary ODBC drivers installed.

### Table Schema

The `user` table should have the following schema:

```sql
CREATE TABLE [user] (
    id INT PRIMARY KEY IDENTITY(1,1),
    email NVARCHAR(255) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL
);
```
