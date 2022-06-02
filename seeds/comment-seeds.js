const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is great!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "wow, great job!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome work!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Great news!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Very helpful!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Can't wait to see the new feature!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Very cool!"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;