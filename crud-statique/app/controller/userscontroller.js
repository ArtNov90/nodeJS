let { users, maxId } = require("../model/users");

const getById = (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id == id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found!" });
    }
};

const getAll = (req, res) => {
    res.json(users);
};

const create = (req, res) => {
    const user = { ...req.body, id: maxId };
    users.push(user);
    maxId++;

    res.status(201).json({
        message: "User created",
        user
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((u) => u.id == id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found!" });
    }

    const updatedUser = { ...req.body, id: parseInt(id) };
    users[index] = updatedUser;

    res.json({
        message: "User updated",
        user: updatedUser
    });

}

const destroy = (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((u) => u.id == id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found!" });
    }

    users.splice(index, 1);
    res.json({ message: "User deleted!" });


};
module.exports = { getById, getAll, create, update, destroy };