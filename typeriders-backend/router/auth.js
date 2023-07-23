const express = require('express');
const {requestLoginHandler, requestSignupHandler, requestGuest} = require('../controller/authentication');
const router = express();

router.post('/signup', requestSignupHandler);

router.post('/login', requestLoginHandler);

router.get('/guest', requestGuest);

router.get('/', (req, res)=>{
    res.render('/home');
})

module.exports = router;