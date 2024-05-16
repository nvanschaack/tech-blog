const router = require('express').Router();
const { Blog } = require('../models');
const withAuth =  require('../utils/auth')


router.get('/', withAuth, async (req, res) => {
    //get all the blog postings from a specific user (user_id)
    const allBlogs = await Blog.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
    //map over all of the particular users' blog posts
    const blogs = allBlogs.map((blog) => blog.get({ plain: true }))

    //dashboard.handlebars will show the blog posts from a particular user (if they are logged in)
    res.render('dashboard', {
        blogs,
        loggedIn: req.session.logged_in
    })
})

router.get('/new', withAuth,(req, res) => {

    res.render('newBlogPost')
})

router.get('/edit/:id', withAuth, async (req,res) => {
    const blogData = await Blog.findByPk(req.params.id)

    const blog = blogData.get({ plain:true })

    
    res.render('editBlog', {
        blog, 
        loggedIn: req.session.logged_in
    })
    console.log(blog)
})

module.exports = router;
