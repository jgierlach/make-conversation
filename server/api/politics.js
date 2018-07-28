const router = require('express').Router()
const {Politics} = require('../db/models')
module.exports = router

// get all questions about politics
// route address /api/politics
router.get('/', async (req, res, next) => {
  try {
    const allPoliticsQuestions = await Politics.findAll()
    res.json(allPoliticsQuestions)
  } catch (err) {
    next(err)
  }
})

// get a random question about politics from the database
// route address /api/politics/:randomId
router.get('/:randomId', async (req, res, next) => {
  try {
    const randomId = Math.floor(Math.random() * 6 + 1)
    const randomQuestion = await Politics.findById(randomId)
    res.json(randomQuestion)
  } catch (err) {
    next(err)
  }
})
