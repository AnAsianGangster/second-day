const db = require('../model/index');

const User = db.user;

exports.findOneUser = (req, res) => {
    User.findOne({
        where: {
            name: req.body.name,
        },
    })
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found',
                });
            }

            if (user.password != req.body.password) {
                res.status(401).send({
                    message: 'Invalid password',
                });
            }

            res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message,
            });
        });
};

exports.create = (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
        .then((user) => {
            res.status(201).send(user);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message,
            });
        });
};
