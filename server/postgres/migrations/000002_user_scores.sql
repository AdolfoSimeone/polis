-- User stats, they will score by inviting/welcoming people, by viewing given information links and completing quizzes
CREATE TABLE user_stats(
    uid INTEGER NOT NULL REFERENCES users(uid),
    invited_count INTEGER NOT NULL DEFAULT 0,
    invited_score INTEGER NOT NULL DEFAULT 0,
    welcome_count INTEGER NOT NULL DEFAULT 0,
    welcome_score INTEGER NOT NULL DEFAULT 0,
    quiz_count INTEGER NOT NULL DEFAULT 0,
    quiz_score INTEGER NOT NULL DEFAULT 0,
    date_created DATETIME,
    date_updated DATETIME
);

-- Keep track of users invited
CREATE TABLE user_invites(
    uid INTEGER NOT NULL REFERENCES users(uid),
    uid_invited NOT NULL REFERENCES users(uid),
    date_accepted DATETIME
);

-- Information links
CREATE TABLE info_resources(
    rid SERIAL,
    title VARCHAR(9999) NOT NULL,
    description VARCHAR(9999) NOT NULL,
    link VARCHAR(9999) NOT NULL,
    score INTEGER NOT NULL DEFAULT 1,
    date_created DATETIME,
    date_updated DATETIME
);

-- Info resources viewed by each user
CREATE TABLE user_info_resources(
    uid INTEGER NOT NULL REFERENCES users(uid),
    rid INTEGER NOT NULL REFERENCES info_resources(rid),
    score INTEGER NOT NULL DEFAULT 0,
    date_viewed DATETIME
);

-- Quizzes related to each given info resource
CREATE TABLE quizzes(
    qid SERIAL,
    rid INTEGER NOT NULL REFERENCES info_resources(rid),
    question VARCHAR(9999) NOT NULL,
    score INTEGER NOT NULL DEFAULT 1
);

-- Options for each quiz
CREATE TABLE quiz_options(
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
    date_attempt DATETIME,
    attempt_count INTEGER NOT NULL DEFAULT 0
);