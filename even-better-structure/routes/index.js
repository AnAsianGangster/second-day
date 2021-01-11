const router = require('express').Router();

// db
const { posts, users } = require('../config/db');

// controller
const postController = require('../controller/post');

module.exports = (app) => {
    app.get('/posts', postController.findAllPosts);

    // create a post
    app.post('/posts', (req, res) => {
        const { name, title, content, tag } = req.body;
        posts.push({
            name: name,
            title: title,
            content: content,
            tag: tag,
        });
        res.status(201).json({ Message: 'Successfully created new post!' });
    });

    // create user
    app.post('/sign-up', (req, res) => {
        const { name, password, email } = req.body;
        let userExists = users.some((item) => item.name === name || item.email === email);
        if (userExists) {
            res.status(403).json({ Message: 'Name / email already taken' });
        } else {
            users.push({
                name: name,
                password: password,
                email: email,
            });
            res.status(201).json({ Message: 'Successfully created new account!' });
        }
        return;
    });

    // search user
    app.post('/sign-in', (req, res) => {
        const { name, password } = req.body;
        let user = users.filter((item) => item.name === name && item.password === password)[0];
        if (!user) {
            res.status(404).json({ Message: 'User not found' });
        } else {
            const response = {
                name: user.name,
                email: user.email,
            };
            res.status(200).json(response);
        }
        return;
    });
};
