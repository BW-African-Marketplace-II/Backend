const db = require('../../data/dbConfig')

module.exports = {
    add,
    find,
    findBy,
    findById,
  };
  
  function find() {
    return db("items").select("*").orderBy("id");
  }
  
  function findBy(filter) {
    return db("items").where(filter).orderBy("id");
  }
  
  async function add(user) {
    try {
      const [id] = await db("items").insert(user, "id");
  
      return findById(id);
    } catch (error) {
      throw error;
    }
  }
  
  function findById(id) {
    return db("items").where({ id }).first();
  }