-- Users will be able to mark comments in a conversation as their favorites
CREATE TABLE user_favorite_comments(
    uid INTEGER NOT NULL REFERENCES users(uid),
    tid INTEGER, -- comment ? this looks like a composite key
    zid INTEGER, -- conversation
    pid INTEGER, -- participant
    position INTEGER, -- Will be used to sort the favorites
    tags VARCHAR(9999), -- Will be used for quick search
    date_created DATETIME
);
