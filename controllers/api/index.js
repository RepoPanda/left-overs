const router = require('express').Router();
const donatorRoutes = require('./donatorRoutes');

router.use('/donators', donatorRoutes);

module.exports = router;
