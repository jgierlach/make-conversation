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

// get a random question about politics from the database
// route address /api/politics/:randomId
router.get('/:randomId', async (req, res, next) => {
  try {
    const randomId = Math.floor(Math.random() * 6 + 1)
    const randomQuestion = await Religion.findById(randomId)
    res.json(randomQuestion)
  } catch (err) {
    next(err)
  }
})
