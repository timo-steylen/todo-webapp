docker compose up -d

cd backend
mvn spring-boot:run

cd frontend
npm install
ng serve

DB-Admin: http://localhost:8081

Swagger: http://localhost:8080/swagger-ui/index.html


POST   /api/todos<br>
GET    /api/todos<br>
GET    /api/todos/{id}<br>
PUT    /api/todos/{id}<br>
DELETE /api/todos/{id}<br>
PATCH  /api/todos/{id}/complete<br>