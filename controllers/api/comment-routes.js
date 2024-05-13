const router = require('express').Router();
const { Comment } = require('../../models');

//create a comment-post
router.post('/', async (req, res) => {
    try {
        await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json('New comment created!')
    } catch (error) {
        res.status(500).json(error)
    }
})

//edit a comment?-put


module.exports = router