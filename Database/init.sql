CREATE TABLE IF NOT EXISTS comments(
    comment_id BIGSERIAL PRIMARY KEY,
    username VARCHAR(255),
    content TEXT
);