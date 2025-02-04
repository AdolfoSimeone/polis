const sql = require("sql"); // see here for useful syntax: https://github.com/brianc/node-sql/blob/bbd6ed15a02d4ab8fbc5058ee2aff1ad67acd5dc/lib/node/valueExpression.js

const sql_conversations = sql.define({
  name: "conversations",
  columns: [
    "zid",
    "topic",
    "description",
    "participant_count",
    "is_anon",
    "is_active",
    "is_draft",
    "is_public", // TODO remove this column
    "is_data_open",
    "is_slack",
    "profanity_filter",
    "spam_filter",
    "strict_moderation",
    "email_domain",
    "owner",
    "org_id",
    "owner_sees_participation_stats",
    "context",
    "course_id",
    "lti_users_only",
    "modified",
    "created",
    "link_url",
    "parent_url",
    "vis_type",
    "write_type",
    "help_type",
    "socialbtn_type",
    "subscribe_type",
    "bgcolor",
    "help_color",
    "help_bgcolor",
    "style_btn",
    "auth_needed_to_vote",
    "auth_needed_to_write",
    "auth_opt_fb",
    "auth_opt_tw",
    "auth_opt_allow_3rdparty",
  ],
});

// const sql_votes = sql.define({
//   name: 'votes',
//   columns: [
//     "zid",
//     "tid",
//     "pid",
//     "created",
//     "vote",
//   ],
// });

const sql_comments = sql.define({
  name: "comments",
  columns: [
    "tid",
    "zid",
    "pid",
    "uid",
    "created",
    "txt",
    "velocity",
    "active",
    "mod",
    "quote_src_url",
    "anon",
  ],
});

const sql_votes_latest_unique = sql.define({
  name: "votes_latest_unique",
  columns: ["zid", "tid", "pid", "modified", "vote"],
});

const sql_participant_metadata_answers = sql.define({
  name: "participant_metadata_answers",
  columns: ["pmaid", "pmqid", "zid", "value", "alive"],
});

const sql_participants_extended = sql.define({
  name: "participants_extended",
  columns: [
    "uid",
    "zid",
    "referrer",
    "parent_url",
    "created",
    "modified",

    "show_translation_activated",

    "permanent_cookie",
    "origin",
    "encrypted_ip_address",
    "encrypted_x_forwarded_for",
  ],
});

//first we define our tables
const sql_users = sql.define({
  name: "users",
  columns: ["uid", "hname", "email", "created"],
});

const sql_reports = sql.define({
  name: "reports",
  columns: [
    "rid",
    "report_id",
    "zid",
    "created",
    "modified",
    "report_name",
    "label_x_neg",
    "label_x_pos",
    "label_y_neg",
    "label_y_pos",
    "label_group_0",
    "label_group_1",
    "label_group_2",
    "label_group_3",
    "label_group_4",
    "label_group_5",
    "label_group_6",
    "label_group_7",
    "label_group_8",
    "label_group_9",
  ],
});

//New tables here
const sql_user_stats = sql.define({
  name: 'user_stats',
  columns: [
    "uid",
    "invited_count",
    "invited_score",
    "welcome_count",
    "welcome_score",
    "quiz_count",
    "quiz_score",
    "date_created",
    "date_updated"
  ],
});

const sql_user_invites = sql.define({
  name: 'user_invites',
  columns: [
    "uid",
    "uid_invited",
    "date_accepted"
  ],
});

const sql_info_resources = sql.define({
  name: 'info_resources',
  columns: [
    "rid",
    "title",
    "description",
    "link",
    "score",
    "date_created",
    "date_updated"
  ],
});

const sql_user_info_resources = sql.define({
  name: 'user_info_resources',
  columns: [
    "uid",
    "rid",
    "date_viewed"
  ],
});

const sql_quizzes = sql.define({
  name: 'quizzes',
  columns: [
    "qid",
    "rid",
    "question",
    "score"
  ],
});

const sql_quiz_options = sql.define({
  name: 'quiz_options',
  columns: [
    "qid",
    "opid",
    "option_text",
    "is_correct"
  ],
});

const sql_user_quizzes = sql.define({
  name: 'user_quizzes',
  columns: [
    "uid",
    "rid",
    "qid",
    "date_attempt",
    "attempt_count"
  ],
});

module.exports = {
  sql_conversations,
  sql_comments,
  sql_votes_latest_unique,
  sql_participant_metadata_answers,
  sql_participants_extended,
  sql_reports,
  sql_users,
  //New tables
  sql_user_stats,
  sql_user_invites,
  sql_info_resources,
  sql_user_info_resources,
  sql_quizzes,
  sql_quiz_options,
  sql_user_quizzes
};
