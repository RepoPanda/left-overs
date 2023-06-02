const router = require('express').Router();
const withAuth = require('../utils/auth');
const {FoodPosting} = require('../models');
require('dotenv').config();

router.get('/', async (req, res) => {
  try {
    const dbRes = await FoodPosting.findAll();
    const foodPostings = dbRes.map(posting => {
      return posting.get({ plain: true });
    });
    console.log(foodPostings);
    
    res.render('homepage', {
      logged_in: req.session.logged_in,
      first_name: req.session.first_name,
      foodPostings: foodPostings,
      API_KEY: process.env.API_KEY
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/foodadd',withAuth, (req, res) => {

  res.render('loggedInDonator', {
    logged_in: req.session.logged_in,
    first_name: req.session.first_name
  });
});

module.exports = router;
