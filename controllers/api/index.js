const router = require('express').Router();
const donatorRoutes = require('./donatorRoutes');
const foodPostingRoutes = require('./foodPostingRoutes');

router.use('/donators', donatorRoutes);
router.use('/foodpostings', foodPostingRoutes);

module.exports = router;
