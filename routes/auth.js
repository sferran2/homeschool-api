const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/google',
  /*
    #swagger.tags = ['Authentication']
    #swagger.description = 'Start Google OAuth authentication'
  */
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get(
  '/google/callback',
  /*
    #swagger.tags = ['Authentication']
    #swagger.description = 'Handle the Google OAuth callback'
  */
  passport.authenticate('google', {
    failureRedirect: '/auth/failure'
  }),
  (req, res) => {
    res.redirect('/auth/success');
  }
);

router.get(
  '/success',
  /*
    #swagger.tags = ['Authentication']
    #swagger.description = 'Return the authenticated user after a successful login'
  */
  (req, res) => {
    res.status(200).json({
      message: 'Login successful',
      user: req.user
    });
  }
);

router.get(
  '/failure',
  /*
    #swagger.tags = ['Authentication']
    #swagger.description = 'Return an authentication failure response'
  */
  (req, res) => {
    res.status(401).json({
      message: 'Google authentication failed'
    });
  }
);

router.get(
  '/status',
  /*
    #swagger.tags = ['Authentication']
    #swagger.description = 'Check the current authentication status'
  */
  (req, res) => {
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
  }
);

router.get(
  '/logout',
  /*
    #swagger.tags = ['Authentication']
    #swagger.description = 'Log out the current user'
  */
  (req, res, next) => {
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
  }
);

module.exports = router;