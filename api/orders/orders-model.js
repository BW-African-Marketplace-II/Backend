const db = require('../../data/dbConfig')

module.exports = {
    add,
    find,
    findBy,
    findById,
  };

  function find() {
    return db("orders").select("*").orderBy("id");
  }
  
  function findBy(filter) {
    return db("orders").where(filter).orderBy("id");
  }
  
  async function add(order, itemID) {
    try {
        db("items").where({id: itemID}).update({isActive:false})
        const [id] = await db("orders").insert(order, "id");
        return findById(id);
    } catch (error) {
        throw error;
    }
  }
  
  function findById(id) {
    return db("orders ").where({ id }).first();
  }
