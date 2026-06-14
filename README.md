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

- http://localhost:8080/swagger-ui/index.html

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
