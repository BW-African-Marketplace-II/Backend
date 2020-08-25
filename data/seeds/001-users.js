
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username:'sandallover10', password: 'iluvsandal', email: 'sendmesandals@fake.com', location: 'cairo', userRole:'baseUser'},
        {id: 2, username:'sandalgod', password: 'sssandals!', email: 'pro@sandals.com', location: 'cairo', userRole:'seller'},
        {id: 3, username:'shepherdman', password: 'baabaablacksheep', email: 'thelord@sheep.com', location: 'lagos', userRole:'seller'},
        {id: 4, username:'goldmint', password: 'printergobrr', email: 'dali@thepeople.com', location: 'nairobi', userRole:'seller'},
        {id: 5, username:'stitches', password: 'makeitnice', email: 'stitches@gmail.com', location: 'kigali', userRole:'seller'},
        {id: 6, username:'doctorman', password: 'curetheplague', email: 'mrdoctor@pandemic.com', location: 'kinshasa', userRole:'baseUser'},
        {id: 7, username:'nigerianprince999', password: 'password123', email: 'prince@nigeria.com', location: 'abuja', userRole:'seller'},
        {id: 8, username:'johanboi', password: 'fuuutboool', email: 'messifan@fake.com', location: 'johannesburg', userRole:'baseUser'},
      ]);
    });
};
