const router = require('express').Router();
const { Blog, User, Comment } = require('../models')

// get all the blogs and show the user who created that blog & when is was created 
router.get('/', async (req, res) => {
    const allBlogData = await Blog.findAll({
        include: [
            {
                model: User,
            }
        ]
    });

    const blogs = allBlogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs)
    res.render('home', {
        blogs,
        loggedIn: req.session.logged_in,
    })
})

router.get('/login', (req, res) => {

    res.render('login')
})

router.get('/signup', (req, res) => {

    res.render('signup')
})

router.get('/blog/:id', async (req, res) => {
    const oneBlog = await Blog.findOne({
        where: {
            id: req.params.id
        },
        include: [User, {
            model: Comment,
            include: [User]
        }]
    })
    const blog = oneBlog.get({ plain: true });

    res.render('individualBlog', {
        blog,
        loggedIn: req.session.logged_in,
    })
})



module.exports = router;
