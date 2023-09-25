var express = require("express");
var router = express.Router();
const { Op } = require("sequelize");
const { Crop, Season, CropSeason } = require('../models');

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/get-all-crops", async (req, res) => {
    const crops = await Crop.findAll({ 
        attributes: ['id', 'cropName'],
        order: [['cropName', 'ASC']]
    });
    res.send(crops);
});

router.get("/get-crops/:id", async (req, res) => {
    let cropIds = await CropSeason.findAll({ 
        attributes: ['cropId'], 
        where: { seasonId: req.params.id } 
    });
    cropIds = cropIds.map(({cropId}) => cropId);

    const crops = await Crop.findAll({
        attributes: ['id', 'cropName'], 
        where: {
            id: {
                [Op.or]: cropIds
            }
        },
        order: [['cropName', 'ASC']]
    } )
    res.send(crops);
})

module.exports = router;