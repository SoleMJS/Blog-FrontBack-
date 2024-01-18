module.exports = function (post) {
	return {
		content: comment.content,
		author: comment.author.login,
		id: comment._id,
		publishedAt: comment.createdAt,
	}
}
