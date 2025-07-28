CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
);

INSERT INTO users (name, email) VALUES
('Nikita Kothari', 'nikita@gmail.com'),
('Nidhi Mishra', 'nidhi@gmail.com'),
('Neha Solanki', 'neha@gmail.com'),
('Nikhil Sharma', 'nikhil@gmail.com')
ON CONFLICT DO NOTHING;
