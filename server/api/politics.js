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
