docker compose up -d

cd backend
mvn spring-boot:run

cd frontend
npm install
ng serve

DB-Admin: http://localhost:8081

Swagger: http://localhost:8080/swagger-ui/index.html


POST   /api/todos (TodoResponse + 201)<br>
GET    /api/todos (TodoResponse + 200)<br>
GET    /api/todos/{id} (TodoResponse + 200)<br>
DELETE /api/todos/{id} (204 + No Content)<br>
PATCH  /api/todos/{id}/complete (TodoResponse + 200)<br>