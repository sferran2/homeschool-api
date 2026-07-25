const express = require('express');
const passport = require('passport');

const router = express.Router();

/*  #swagger.tags = ['Authentication']
    #swagger.description = 'Start Google OAuth authentication'
*/
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

/*  #swagger.tags = ['Authentication']
    #swagger.description = 'Google OAuth callback'
*/
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/failure'
  }),
  (req, res) => {
    res.redirect('/auth/success');
  }
);

/*  #swagger.tags = ['Authentication']
    #swagger.description = 'Successful login'
*/
router.get('/success', (req, res) => {
  res.status(200).json({
    message: 'Login successful',
    user: req.user
  });
});

/*  #swagger.tags = ['Authentication']
    #swagger.description = 'Failed login'
*/
router.get('/failure', (req, res) => {
  res.status(401).json({
    message: 'Google authentication failed'
  });
});

/*  #swagger.tags = ['Authentication']
    #swagger.description = 'Check authentication status'
*/
router.get('/status', (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({
      authenticated: true,
      user: req.user
    });
  }

  return res.status(401).json({
    authenticated: false,
    message: 'User is not authenticated'
  });
});

/*  #swagger.tags = ['Authentication']
    #swagger.description = 'Logout current user'
*/
router.get('/logout', (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }

    req.session.destroy((sessionError) => {
      if (sessionError) {
        return next(sessionError);
      }

      res.clearCookie('connect.sid');
      return res.status(200).json({
        message: 'Logout successful'
      });
    });
  });
});

module.exports = router;