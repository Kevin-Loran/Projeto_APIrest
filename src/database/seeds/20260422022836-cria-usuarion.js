const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Luiz',
        email: 'luiz1@gmail.com',
        password_hash: await bcryptjs.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Carlos2',
        email: 'Carlos2@gmail.com',
        password_hash: await bcryptjs.hashSync('657239', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Davi3',
        email: 'Davi3@gmail.com',
        password_hash: await bcryptjs.hashSync('7864943', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),
  down: () => {},
};
