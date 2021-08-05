CREATE DATABASE jobwatch;
\c jobwatch

CREATE TABLE jobs(
  id SERIAL PRIMARY KEY,
<<<<<<< HEAD
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
=======
  FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE;
>>>>>>> 08b738d (session completed)
  role TEXT,
  company TEXT,
  link TEXT,
  close_date DATE,
  contact TEXT,
  notes TEXT,
  status TEXT
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);