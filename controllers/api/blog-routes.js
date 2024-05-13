const router = require('express').Router();
const { Blog } = require('../../models');

//create a new blog post-post
router.post('/', async (req, res) => {
    try {
        await Blog.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json('New blog post created!')
    } catch (error) {
        res.status(500).json(error)
    }
});

//edit a blog post-put
router.put('/:id', async (req, res) => {
    try {
        await Blog.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json('Successfully edited blog post')
    } catch (error) {
        res.status(500).json(error)
    }
});

//delete a blog post-delete
router.delete('/:id', async (req, res) => {
    try {
        await Blog.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json('Successfully deleted blog post.')
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router