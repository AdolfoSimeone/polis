-- Actions which add score to player
CREATE TABLE actions (
    key VARCHAR(150) PRIMARY KEY,
    score INTEGER,
    max_count INTEGER DEFAULT 1, -- 0 = infinite
    date_created DATETIME,
    date_updated DATETIME
);

-- Actions performed by each user. Some actions may be performed multiple times if max_count above is not 1
CREATE TABLE user_actions (
    key VARCHAR(150) REFERENCES actions(key),
    uid INTEGER REFERENCES users(uid),
    count INTEGER DEFAULT 1,
    date_created DATETIME,
    date_updated DATETIME
);

-- Achievement badges
CREATE TABLE badges (
    id SERIAL PRIMARY KEY,
    name VARCHAR(500),
    max_count INTEGER DEFAULT 1, -- 0 = infinite
    description VARCHAR(9999),
    date_created DATETIME,
    date_updated DATETIME
);

-- Action(s) required for a badge to be obtained
CREATE TABLE badges_actions (
    bid INTEGER REFERENCES badges(id),
    key VARCHAR(150) REFERENCES actions(key),
    count INTEGER DEFAULT 1,
    date_created DATETIME,
    date_updated DATETIME
);

-- Badges owned by each user. Some badges may be obtained multiple times
CREATE TABLE user_badges (
    bid INTEGER REFERENCES badges(id),
    uid INTEGER REFERENCES users(uid),
    count INTEGER DEFAULT 0,
    date_created DATETIME,
    date_updated DATETIME
);

-- TODO define user's progress towards a given badge
