CREATE DATABASE jobwatch;
\c jobwatch

CREATE TABLE jobs(
  id SERIAL PRIMARY KEY,
  role TEXT,
  company TEXT,
  close_date DATE,
  contact TEXT,
  notes TEXT,
  status BOOLEAN
);