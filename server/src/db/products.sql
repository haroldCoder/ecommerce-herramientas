CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  description TEXT,
  imgURI VARCHAR(255),
  author VARCHAR(255),
  price NUMERIC(10, 2),
  category VARCHAR(255),
  buys INTEGER,
  created_at TIMESTAMPTZ,
  key_stripe VARCHAR(255)
);