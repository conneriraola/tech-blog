const { User } = require('../models');

const userData = [
    {
        username: "conneriraola",
        twitter: "conneriraola",
        github: "conneriraola",
        email: "conner_iraola@yahoo.com",
        password: "password123"
    },
    {
        username: "seanjohn",
        twitter: "seanjohn",
        github: "seanjohn",
        email: "seanjohn@yahoo.com",
        password: "password1234"
    },
    {
        username: "paulramos",
        twitter: "paulramos",
        github: "paulramos",
        email: "paulramos@yahoo.com",
        password: "password12345"
    },
    {
        username: "taylorgreen",
        twitter: "taylorgreen",
        github: "taylorgreen",
        email: "taylorgreen@yahoo.com",
        password: "password123456"
    },
    {
        username: "reesetungs",
        twitter: "reesetungs",
        github: "reesetungs",
        email: "reesetungs@yahoo.com",
        password: "password1234567"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;