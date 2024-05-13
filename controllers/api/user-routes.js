const router = require('express').Router();
const { User } = require('../../models')

//add a user to the database
router.post('/', async (req, res) => {
    try {
        //newUser is the created user from the req.body 
        const newUser = await User.create(req.body)
        //req.session.save is saving the new user's id and username in a session table
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.username = newUser.username;
            req.session.logged_in = true

            res.status(200).json({ user: newUser, message: `${newUser.username} is now logged in.` })
        })

    } catch (error) {
        res.status(500).json('Cannot log in')
    }
})
//login a user
router.post('/login', async (req,res) => {
    //userData is an instance of User where we find one user who's username in the database matches the username passed in the req.body
    const userData = await User.findOne({
        where: {
            username: req.body.username
        }
    })
//if userData is falsey, meaning the username passed does not match the username in the db, an error will be supplied
    if (!userData) {
        res.status(400).json('Incorrect username')
        return
    }
//else, we move on to check the password passed through req.body by accessing the checkPassword method in the instance of the User, called userData
    const checkedPassword = await userData.checkPassword(req.body.password)
    if (!checkedPassword) {
        res.status(400).json('Password incorrect')
        return
    }
//if the password is not falsey, we will save the userData id and username to the session
    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true

        res.status(200).json({ user: userData, message: `${userData.username} is now logged in.` })
    })


});

//logout a user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // TODO: Add a comment describing the functionality of this method
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router