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

// -- NEW TABLES SQL DEFINITIONS
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
    "date_updated",
  ],
});

const sql_user_invites = sql.define({
  name: 'user_invites',
  columns: [
    "uid",
    "uid_invited",
    "date_accepted",
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
    "date_updated",
  ],
});

const sql_user_info_resources = sql.define({
  name: 'user_info_resources',
  columns: [
    "uid",
    "rid",
    "date_viewed",
  ],
});

const sql_quizzes = sql.define({
  name: 'quizzes',
  columns: [
    "qid",
    "rid",
    "question",
    "score",
  ],
});

const sql_quiz_options = sql.define({
  name: 'quiz_options',
  columns: [
    "qid",
    "opid",
    "option_text",
    "is_correct",
  ],
});

const sql_user_quizzes = sql.define({
  name: 'user_quizzes',
  columns: [
    "uid",
    "rid",
    "qid",
    "date_attempt",
    "attempt_count",
  ],
});

const sql_user_favorite_comments = sql.define({
  name: 'user_favorite_comments',
  columns: [

  ],
});

const sql_additional_comment_info = sql.define({
  name: 'additional_comment_info',
  columns: [

  ],
});

const sql_categories = sql.define({
  name: 'categories',
  columns: [
    'catid',
    'name',
    'description'
  ],
});

const sql_community_goals = sql.define({
  name: 'community_goals',
  columns: [
    'id',
    'name',
    'description',
    'required_score',
    'accumulated_score'
  ],
});

const sql_user_goals = sql.define({
  name: 'user_goals',
  columns: [
    'uid',
    'gid',
    'score'
  ],
});

const sql_actions = sql.define({
  name: 'actions',
  columns: [
    'key',
    'name',
    'description',
    'score',
  ]
});

const sql_user_actions = sql.define({
  name: 'user_actions',
  columns: [
    'key',
    'uid',
    'count',
  ]
});

const sql_badges = sql.define({
  name: 'badges',
  columns: [],
});

const sql_user_badges = sql.define({
  name: 'user_badges',
  columns: [],
});

module.exports = {
  sql_conversations,
  sql_comments,
  sql_votes_latest_unique,
  sql_participant_metadata_answers,
  sql_participants_extended,
  sql_reports,
  sql_users,
  // -- START NEW TABLES
  // User profile & stats
  sql_user_stats,
  sql_user_invites,
  // Info resources
  sql_info_resources,
  sql_user_info_resources,
  // Quizzes and options
  sql_quizzes,
  sql_quiz_options,
  sql_user_quizzes,
  // Favorites
  sql_user_favorite_comments,
  sql_additional_comment_info,
  // Community goals
  sql_community_goals,
  sql_user_goals,
  // Categories
  sql_categories,
  // Actions
  sql_actions,
  sql_user_actions,
  // Badges
  sql_badges,
  sql_user_badges,
  // -- END NEW TABLES
};
