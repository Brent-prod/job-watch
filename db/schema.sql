CREATE DATABASE jobwatch;
\c jobwatch

CREATE TABLE jobs(
  id SERIAL PRIMARY KEY,
  role TEXT,
  company TEXT,
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