docker compose up -d

cd backend
mvn spring-boot:run

cd frontend
npm install
ng serve