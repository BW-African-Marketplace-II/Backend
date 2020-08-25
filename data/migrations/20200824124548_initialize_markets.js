exports.up = function(knex) {
    return knex.schema
      .createTable('users', (tbl) => {
          tbl.increments('id');
          tbl.string('username', 32).unique().notNullable();
          tbl.string('password', 256).unique().notNullable();
          tbl.string('email', 32).unique().notNullable();
          tbl.string('location', 32).notNullable();
          tbl.string('userRole').defaultTo('baseUser');
      })
      .createTable('items', (tbl) => {
          tbl.increments('id');
          tbl.string('name', 32).notNullable();
          tbl.integer('price').notNullable();
          tbl.string('location', 32).notNullable();
          tbl.string('description');
          tbl.boolean('isActive').defaultTo(true);
          tbl
            .integer('sellerID')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
      })
      .createTable('orders', (tbl) => {
          tbl.increments();
          tbl
              .integer('sellerID')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('users')
              .onDelete('CASCADE');
          tbl
              .integer('buyerID')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('users')
              .onDelete('CASCADE');
          tbl
              .integer('itemID')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('users')
              .onDelete('CASCADE');
      })
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists("orders")
          .dropTableIfExists("items")
          .dropTableIfExists("users");
          
  };
  