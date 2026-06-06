CREATE TABLE todo (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(2000),
  tags VARCHAR(500),
  created_at TIMESTAMP NOT NULL,
  deadline_date DATE,
  completed BOOLEAN NOT NULL DEFAULT FALSE
);