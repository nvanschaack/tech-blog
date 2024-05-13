const User = require('./user');
const Blog = require('./blog');
const Comment = require('./comment');

//Blog belongs to User
Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//User has many Comments
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Blog has many Comments through User?
Blog.hasMany(Comment, {
   foreignKey: 'blog_id'
});

module.exports = {
    User,
    Blog,
    Comment
};