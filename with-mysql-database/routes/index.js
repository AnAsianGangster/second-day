const router = require('express').Router();

// controller
const postController = require('../controller/post');
const userController = require('../controller/user');

module.exports = (app) => {
    app.get('/posts', postController.findAllPosts);

    // create a post
    app.post('/posts', postController.create);

    // create user
    app.post('/sign-up', userController.create);

    // search user
    app.post('/sign-in', userController.findOneUser);
};
