docker compose up -d

cd backend
mvn spring-boot:run

cd frontend
npm install
ng serve

DB-Admin: http://localhost:8081 (server: postgres, user: todo, password: todo, database: webapp)

Swagger: http://localhost:8080/swagger-ui/index.html
