CREATE TABLE comments_additional_info(
    tid INTEGER, -- comment, composite key ?
    zid INTEGER, -- conversation
    pid INTEGER, -- participant
    additional_text VARCHAR(9999), -- maybe should limit this
    link_url VARCHAR(9999),
    date_created DATETIME
);
