CREATE TABLE comments (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date TIMESTAMPTZ DEFAULT Now(),
  slug VARCHAR(255) NOT NULL,
  parent_comment_id INTEGER,
  text VARCHAR(5000) NOT NULL
);

INSERT INTO
  comments (name, text, slug, parent_comment_id)
VALUES
  ('Dimas', 'Test the awesome comments API', 'how-to-bake-a-server', 0);