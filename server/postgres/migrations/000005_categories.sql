CREATE table categories (
    catid SERIAL PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    description VARCHAR(9999),
    date_created DATETIME,
    date_updated DATETIME
);

ALTER TABLE conversations ADD COLUMN catid INTEGER REFERENCES categories(catid);