const mongoose = require("mongoose");
const mapComment = require("./mapComment");

module.exports = function (post) {
  return {
    title: post.title,
    id: post.id,
    imageUrl: post.imageUrl,
    content: post.content,
    comments: post.comments.map((comment) =>
      mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment)
    ),
    publishedAt: post.createdAt,
  };
};
