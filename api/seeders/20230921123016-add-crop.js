'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Crops', [
    {
      cropName: 'Blue Jazz',
      growth: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Cauliflower',
      growth: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Coffee Bean',
      growth: 10,
      regrowth: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Garlic',
      growth: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Green Bean',
      growth: 10,
      regrowth: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Kale',
      growth: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Parsnip',
      growth: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Potato',
      growth: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Rhubarb',
      growth: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Strawberry',
      growth: 8,
      regrowth: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Unmilled Rice (Unirrigated)',
      growth: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Unmilled Rice (Irrigated)',
      growth: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Blueberry',
      growth: 13,
      regrowth: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Corn',
      growth: 14,
      regrowth: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Hops',
      growth: 11,
      regrowth: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Hot Pepper',
      growth: 5,
      regrowth: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Melon',
      growth: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Poppy',
      growth: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Red Cabbage',
      growth: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Starfruit',
      growth: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Summer Spangle',
      growth: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Sunflower',
      growth: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Tomato',
      growth: 11,
      regrowth: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Wheat',
      growth: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Amaranth',
      growth: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Artichoke',
      growth: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Beet',
      growth: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Bok Choy',
      growth: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Cranberries',
      growth: 7,
      regrowth: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Eggplant',
      growth: 5,
      regrowth: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Fairy Rose',
      growth: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Grape',
      growth: 10,
      regrowth: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Pumpkin',
      growth: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Yam',
      growth: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Ancient Fruit',
      growth: 28,
      regrowth: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Cactus Fruit',
      growth: 12,
      regrowth: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Fiber',
      growth: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Pineapple',
      growth: 14,
      regrowth: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Taro Root (Unirrigated)',
      growth: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Taro Root (Irrigated)',
      growth: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Sweet Gem Berry',
      growth: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cropName: 'Tea Leaves',
      growth: 20,
      regrowth: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Crops', null, {});
  }
};
