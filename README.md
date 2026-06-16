# Todo Web Application

## Prerequisites

To run this app, make sure the following software is installed:

- Docker & Docker Compose
- Java 25
- Maven 3.9+
- Node.js 22+
- Angular CLI

---

## Getting Started

### 1. Start the database

Start PostgreSQL and pgAdmin using Docker Compose:

```bash
docker compose up -d
```

---

### 2. Start the backend

Navigate to the backend directory and start the Spring Boot application:

```bash
cd backend
mvn spring-boot:run
```

The backend will be available at:

- http://localhost:8090

---

### 3. Start the frontend

Navigate to the frontend directory, install dependencies, and start the Angular development server:

```bash
cd frontend
npm install
ng serve
```

The frontend will be available at:

- http://localhost:4200

---

## Database Administration

pgAdmin is available at:

- http://localhost:8085

Connection settings:

| Property | Value |
|-----------|-----------|
| Server | postgres |
| Username | todo |
| Password | todo |
| Database | webapp |

---

## API Documentation

Swagger UI is available at:

- http://localhost:8090/swagger-ui/index.html

---

## Technology Stack

### Backend
- Java 25
- Spring Boot 4
- PostgreSQL
- Flyway
- MapStruct
- Lombok

### Frontend
- Angular 20
- Angular Material
- TypeScript
- Signals


# Approach

The application is structured into two main components: the backend and the frontend. The backend is built using Spring Boot, which provides a robust framework for building RESTful APIs. The frontend is developed using Angular, which offers a powerful platform for building dynamic web applications.

The backend is responsible for handling business logic, data persistence, and API endpoints. It uses PostgreSQL as the database, with Flyway for database migrations. MapStruct is used for mapping between entities and DTOs, while Lombok helps reduce boilerplate code.

The frontend is designed to provide a user-friendly interface for managing tasks. It uses Angular Material for UI components and follows best practices for state management and component architecture. The application allows users to create, read, update, and delete tasks, with real-time updates using Angular Signals.

The Development approach was as following:
1. **Database Setup**: Start by setting up the PostgreSQL database using Docker Compose. This ensures a consistent environment for development and testing.
2. **Backend Development**: Implemented the REST API with CRUD operations, DTOs, MapStruct mapping, exception handling, validation, and database migrations. Also added JavaDoc documentation, CORS configuration, and project documentation.
3. **Frontend Development**: Built an Angular frontend with routing, reactive forms, shared state management, sorting, and responsive UI components. Added create, overview, update, delete, and status management functionality, including user feedback, navigation, and reusable components.