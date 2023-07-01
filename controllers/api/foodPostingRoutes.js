const router = require('express').Router();
const {FoodPosting} = require('../../models');
require('dotenv').config();
const NodeGeocoder = require('node-geocoder');
const Op = require('sequelize').Op;

router.get('/', async (req, res) => {
  try {
    const dbRes = await FoodPosting.findAll({
      where: {
        end_time: {
          [Op.gt]: Date.now()
        }
      }
    });
    res.json(dbRes);
  } catch (error) {
    res.json({err: 'Uh oh...'});
  }
});

router.post('/', async (req, res) => {
  try {

    const geocoder = NodeGeocoder({ provider: 'google', apiKey: process.env.API_KEY });

    
    const [{latitude,longitude}] = await geocoder.geocode(req.body.address);

    console.log({latitude,longitude});
    


    const dbRes = await FoodPosting.create({
      donator_id: req.session.user_id,
      address: req.body.address,
      food_types: req.body.food_types,
      allergens: req.body.allergens,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      comment: req.body.comment,
      latitude,
      longitude
    });
    res.status(200).json(dbRes);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;