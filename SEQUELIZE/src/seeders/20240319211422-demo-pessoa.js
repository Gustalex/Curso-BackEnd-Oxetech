'use strict';

/** @type {import('sequelize-cli').Migration} */
      module.exports = {
        async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('pessoas', [
        {
        nome: 'Ulpio Docente',
        email: 'ulpio@email.com',
        cpf: '63058133022',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        nome: 'Mariah Estudante',
        email: 'Mariah@email.com',
        cpf: '99018205028',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
        }
        ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
