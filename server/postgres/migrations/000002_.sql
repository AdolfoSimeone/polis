-- User stats, they will score by inviting/welcoming people, by viewing given information links and completing quizzes
CREATE TABLE user_stats(
    uid INTEGER NOT NULL REFERENCES users(uid),
    invited_count INTEGER NOT NULL DEFAULT 0,
    invited_score INTEGER NOT NULL DEFAULT 0,
    welcome_count INTEGER NOT NULL DEFAULT 0,
    welcome_score INTEGER NOT NULL DEFAULT 0
);

-- Keep track of users invited
CREATE TABLE user_invites(
    uid INTEGER NOT NULL REFERENCES users(uid),
    uid_invited NOT NULL REFERENCES users(uid),
    date_sent DATETIME,
    date_accepted DATETIME
);

-- Information links
CREATE TABLE info_resources(
    rid SERIAL,
    link VARCHAR(9999) NOT NULL
);

-- Info resources viewed by each user
CREATE TABLE user_info_resources(
    uid INTEGER NOT NULL REFERENCES users(uid),
    rid INTEGER NOT NULL REFERENCES info_resources(rid),
    date_viewed DATETIME
);

-- Quizzes related to each given info resource
CREATE TABLE quizzes(
    qid SERIAL,
    rid INTEGER NOT NULL REFERENCES info_resources(rid),
    question VARCHAR(9999) NOT NULL
);

-- Options for each quiz
CREATE TABLE quizzes_options(
    qid INTEGER NOT NULL REFERENCES info_resources_quizzes(qid);
    opid SERIAL,
    option_text VARCHAR(9999) NOT NULL,
    is_correct BOOLEAN DEFAULT FALSE
);

-- Quizzes completed by each user
CREATE TABLE user_quizzes(
    uid INTEGER NOT NULL REFERENCES users(uid),
    rid INTEGER NOT NULL REFERENCES info_resources(rid),
    qid INTEGER NOT NULL REFERENCES quizzes(qid),
    attempt_count INTEGER NOT NULL DEFAULT 0
)