const Donator = require('./Donator');
const FoodPosting = require('./FoodPosting');

Donator.hasMany(FoodPosting, {
  foreignKey: 'donator_id'
});

FoodPosting.belongsTo(Donator, {
  foreignKey: 'donator_id'
});

module.exports = { Donator, FoodPosting };
