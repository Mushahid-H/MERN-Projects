var express = require('express')

var router = express.Router()

router.post('/food_data', (req, res) => {
  try {
    res.send([global.food_items, global.food_category])
  } catch (error) {
    console.error(error.message)
    res.send('server error')
  }
})

module.exports = router
