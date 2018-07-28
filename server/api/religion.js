const router = require('express').Router()
const {Religion} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allReligionQuestions = await Religion.findAll()
    res.json(allReligionQuestions)
  } catch (err) {
    next(err)
  }
})
