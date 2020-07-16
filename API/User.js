const express = require('express');
const mongoose = require('mongoose');
const User = require('../DataBase/User');
const route = express.route();


route.post('./', async (req, res) => {
    const { firsName,LastName } = req.body;

    let user = {};

    user.firsName = firsName;
    user.LastName = LastName;

    let userModel = new User(user);
    await userModel.save();

    res.json(userModel);
});