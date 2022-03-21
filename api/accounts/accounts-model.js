const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
}

const getById = id => {
 return db('accounts').where({id})

}

const create = account => {
 return db('account').insert({name: 'account- 15', budget: 3000})
}
const updateById = (id, account) => {
  return db('account').where({id}).update({ name: '', budget: number})
}

const deleteById = id => {
return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
