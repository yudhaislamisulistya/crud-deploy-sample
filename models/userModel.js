let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

function findAll() {
    return users;
}

function findById(id) {
    return users.find(u => u.id === id);
}

function create(user) {
    users.push(user);
}

function update(id, newUser) {
    let index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users[index] = newUser;
        return newUser;
    }
    return null;
}

function remove(id) {
    let index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
    return null;
}

module.exports = { findAll, findById, create, update, remove };
