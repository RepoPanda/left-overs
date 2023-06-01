const router = require('express').Router();
const {FoodPosting} = require('../../models');

router.post('/', async (req, res) => {
  try {
    const dbRes = await FoodPosting.create({
      donator_id: req.session.user_id,
      address: req.body.address,
      food_types: req.body.food_types,
      allergens: req.body.allergens,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      comment: req.body.comment
    });
    res.status(200).json(dbRes);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;