const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/travel', require('./travel'))
router.use('/religion', require('./religion'))
router.use('/politics', require('./politics'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
