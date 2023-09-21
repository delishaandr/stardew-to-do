'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Season.belongsToMany(models.Crop, {
        through: models.CropSeason,
        foreignKey: 'seasonId',
        otherKey: 'cropId'
      })
    }
  }
  Season.init({
    seasonName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Season',
  });
  return Season;
};