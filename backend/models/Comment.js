const mongoose = require("mongoose");
const ROLES = require("../constants/roles");

const CommentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      default: ROLES.USER,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
