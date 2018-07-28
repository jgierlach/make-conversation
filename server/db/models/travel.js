const Sequelize = require('sequelize')
const db = require('../db')

const Travel = db.define('travel', {
  question: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Travel
