const router = require('express').Router();
const { Blog } = require('../models')

// get all the blogs and show the user who created that blog & when is was created 
//WHY WOULDNT THIS BE IN THE DASHBOARD ROUTES?
router.get('/', async (req, res) => {
    const allBlogData = await Blog.findAll({
        include: [
            {
                model: User,
            }
        ]
    });

    const blogs = allBlogData.map((blog) => blog.get({ plain: true }));

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




module.exports = router;
