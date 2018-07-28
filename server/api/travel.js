const router = require('express').Router()
const {Travel} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allTravelQuestions = await Travel.findAll()
    res.json(allTravelQuestions)
  } catch (err) {
    next(err)
  }
})


