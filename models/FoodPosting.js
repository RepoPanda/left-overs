const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FoodPosting extends Model {

}

FoodPosting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    donator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'donator',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    food_types: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allergens: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    hooks: {
    
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'food_posting',
  }
);

module.exports = FoodPosting;
