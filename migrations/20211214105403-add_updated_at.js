'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'updated_at', {
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn('items', 'updated_at', {
      type: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
