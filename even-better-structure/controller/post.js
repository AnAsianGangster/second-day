// db
const { posts, users } = require('../config/db');

exports.findAllPosts = (req, res) => {
    res.status(200).json(posts);
};
