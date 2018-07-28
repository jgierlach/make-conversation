const Sequelize = require('sequelize')
const db = require('../db')

const Politics = db.define('politics', {
  question: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Politics

