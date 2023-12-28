const { Router } = require('express');
const authController = require('../controllers/authController');
const contactController = require('../controllers/contactController');

const router = Router();

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);
router.post('/contactus', contactController.contact_post);

module.exports = router;