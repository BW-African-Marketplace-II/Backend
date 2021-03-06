const db = require('../../data/dbConfig')

module.exports = {
    add,
    edit,
    find,
    findBy,
    findById,
    remove,
  };
  
  function edit(id, changes){
    return db("items")
      .where( { id: id })
      .update(changes)
  }


  function find() {
    return db("items").select("*").orderBy("id");
  }
  
  function findBy(filter) {
    return db("items").where(filter).orderBy("id");
  }
  
  async function add(item) {
    try {
      const [id] = await db("items").insert(item, "id");
      return findById(id);
    } catch (error) {
      throw error;
    }
  }
  
  function findById(id) {
    return db("items").where({ id }).first();
  }

  function remove(id){
    return db("items").where({ id }).del();
  }