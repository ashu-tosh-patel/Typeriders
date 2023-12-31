const express = require('express');
const {requestLoginHandler, requestSignupHandler, requestGuest} = require('../controller/authentication');
const router = express();
const rateLimit = require('express-rate-limit');


const createAccountLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 5, // Limit each IP to 5 create account requests per `window` (here, per hour)
	message: 'Too many accounts created from this IP, please try again after an hour',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});


router.post('/signup', createAccountLimiter, requestSignupHandler);

router.post('/login',  requestLoginHandler);

router.get('/guest',  requestGuest);

router.get('/logout');

module.exports = router;