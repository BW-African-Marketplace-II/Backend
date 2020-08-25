
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, name: 'sandals', price: 3, location: 'cairo', description: 'sturdy sandals!', isActive: true, sellerID: 2},
        {id: 2, name: 'cheap sandals', price: 1, location: 'cairo', description: 'the cheapest sandals you can find', isActive: false, sellerID: 2},
        {id: 3, name: 'mutton', price: 10, location: 'lagos', description: 'yummy', isActive: true, sellerID: 3},
        {id: 4, name: 'mutton', price: 10, location: 'lagos', description: 'delicious', isActive: true, sellerID: 3},
        {id: 5, name: 'wool', price: 4, location: 'lagos', description: 'high quality wool', isActive: true, sellerID: 3},
        {id: 6, name: 'scarf', price: 0, location: '', description: '', isActive: true, sellerID: 5},
        {id: 7, name: 'milk', price: 2, location: 'lagos', description: 'goat milk', isActive: true, sellerID: 3},
        {id: 8, name: '$1 million', price: 0, location: 'abuja', description: 'im a prince and I need your help getting my inheritance, you will be rewarded', isActive: true, sellerID: 7},
        {id: 9, name: 'gold coins', price: 150, location: 'nairobi', description: 'authentic gold coins to protect your investments', isActive: true, sellerID: 4},
        {id: 10, name: 'gold bracelet', price: 87, location: 'nairobi', description: 'fine jewlery for ceremony or casual wear', isActive: false, sellerID: 4},
        {id: 11, name: 'eggs', price: 2, location: 'lagos', description: '12 eggs', isActive: true, sellerID: 3},
        {id: 12, name: 'gold diamond ring', price: 200, location: 'nairobi', description: 'perfect for any engagement', isActive: true, sellerID: 4},
      ]);
    });
};
