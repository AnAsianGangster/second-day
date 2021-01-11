const db = require('../model/index');

// const User = db.user;
const Post = db.post;

exports.findAllPosts = (req, res) => {
    Post.findAll()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message,
            });
        });
};

exports.create = (req, res) => {
    Post.create({
        name: req.body.name,
        title: req.body.title,
        content: req.body.content,
        tag: req.body.tag,
    })
        .then((post) => {
            res.status(201).send(post);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message,
            });
        });
};
