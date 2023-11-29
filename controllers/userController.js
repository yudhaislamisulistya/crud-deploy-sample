const userModel = require('../models/userModel');

const getUsers = (req, res) => {
    res.send(userModel.findAll());
};

const getUser = (req, res) => {
    const user = userModel.findById(parseInt(req.params.id));
    if (!user) return res.status(404).send({ error: 'User not found', code: 404 });
    res.send(user);
};

const createUser = (req, res) => {
    const newUser = {
        id: userModel.findAll().length + 1,
        name: req.body.name
    };
    userModel.create(newUser);
    res.status(201).send(newUser);
};

const updateUser = (req, res) => {
    const updatedUser = userModel.update(parseInt(req.params.id), { id: parseInt(req.params.id), name: req.body.name });
    if (!updatedUser) return res.status(404).send({ error: 'User not found', code: 404 });
    res.send(updatedUser);
};

const deleteUser = (req, res) => {
    const user = userModel.remove(parseInt(req.params.id));
    if (!user) return res.status(404).send({ error: 'User not found', code: 404 });
    res.send(user);
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
