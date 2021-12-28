CREATE TABLE custom_flags (
    key varchar(150),
    is_active BOOLEAN DEFAULT FALSE,
    date_created DATETIME,
    date_updated DATETIME,
)

CREATE TABLE conversation_flags (
    zid REFERENCES conversations(zid),
    key REFERENCES custom_flags(key),
    is_active BOOLEAN DEFAULT FALSE,
    date_created DATETIME,
    date_updated DATETIME,
);

