'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CropSeason extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CropSeason.belongsTo(models.Crop, { foreignKey: 'cropId' });
      CropSeason.belongsTo(models.Season, { foreignKey: 'seasonId' });
    }
  }
  CropSeason.init({
    cropId: DataTypes.INTEGER,
    seasonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CropSeason',
  });
  return CropSeason;
};