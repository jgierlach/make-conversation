const Sequelize = require('sequelize')
const db = require('../db')

const Religion = db.define('religion', {
  question: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Religion
