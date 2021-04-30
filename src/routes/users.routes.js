const { Router } = require('express');
const router = Router();

const {
    renderSingUpForm,
    renderSinginForm,
    singin,
    singup,
    logout
} = require('../controller/users.controller')

router.get('/users/singup', renderSingUpForm);

router.post('/users/singup', singup);

router.get('/users/singin', renderSinginForm);

router.post('/users/singin', singin);

router.get('/users/logout', logout)




module.exports = router;