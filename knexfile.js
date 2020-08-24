const pgConnection = 
  process.env.DATABASE_URL || 'postgresql://postgres@localhost/marketplace'

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/marketplace.db3'
    },
    useNullAsDefault: true,
    migrations:{
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/marketplace.db3'
    },
    useNullAsDefault: true,
    migrations:{
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  development: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations:{
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

};
