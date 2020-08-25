
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, sellerID: 2, buyerID: 1, itemID: 2},
        {id: 2, sellerID: 4, buyerID: 3, itemID: 10},
      ]);
    });
};
