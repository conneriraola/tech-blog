const { Post } = require('../models');

const postData = [
    {
        title: "Offerup goes public",
        post_content: "OfferUp is mobile marketplace app where users can buy and sell goods",
        user_id: 3
    },
    {
        title: "Tech Blog update",
        post_content: "Tech Blog will be undergoing updates to the system next week",
        user_id: 3
    },
    {
        title: "Facebook hiring freezr",
        post_content: "Facebook has suspended the hiring for their content moderation team",
        user_id: 3
    },
    {
        title: "Full stack bootcamp registration",
        post_content: "bootcamp registration opens next month",
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;