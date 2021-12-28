CREATE TABLE community_goals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(500),
    description VARCHAR(9999),
    required_score INTEGER,
    accumulated_score INTEGER,
    date_created DATETIME,
    date_updated DATETIME,
    date_start DATETIME,
    date_end DATETIME
);

CREATE TABLE user_goals (
    uid INTEGER REFERENCES users(uid),
    gid INTEGER REFERENCES community_goals(id),
    score INTEGER,
    date_created DATETIME,
    date_updated DATETIME
);
