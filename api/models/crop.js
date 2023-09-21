'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Crop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Crop.belongsToMany(models.Season, {
        through: models.CropSeason,
        foreignKey: 'cropId',
        otherKey: 'seasonId'
      })
    }
  }
  Crop.init({
    cropName: DataTypes.STRING,
    growth: DataTypes.INTEGER,
    regrowth: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Crop',
  });
  return Crop;
};