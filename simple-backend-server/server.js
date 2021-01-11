const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.use(bodyParser.json());

// db
let posts = [];

let users = [];

// routes and handlers

// get all posts
app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

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

/* app.get('/', (req, res) => {
    console.log('================ time ==================================');
    for (let i = 0; i < 100000; i++) {
        for (let i = 0; i < 100000; i++) {
            let trash = 0;
        }
    }
    console.log('================ ==== ==================================');
    console.log('==================== request ip ========================');
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
    console.log('==================== ======= ===========================');

    res.json({
        message: 'Hello World!',
    });
}); */

app.listen(port, () => {
    console.log('Listening on port', port);
});
