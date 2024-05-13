const router = require('express').Router();

router.get('/', (req,res) => {

    res.render('home', {
        loggedIn: req.session.logged_in
    })
})

router.get('/login', (req,res) => {

    res.render('login')
})

router.get('/signup', (req,res) => {

    res.render('signup')
})

module.exports = router;