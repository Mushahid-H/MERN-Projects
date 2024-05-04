var express = require('express')

var router = express.Router()

const OrderModel = require('../models/Orders')

router.post('/orderData', async (req, res) => {
  let data = req.body.order_data
  await data.splice(0, 0, { Order_date: req.body.order_date })

  let eId = await OrderModel.findOne({
    email: req.body.email,
  })

  if (eId === null) {
    try {
      await OrderModel.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true })
      })
    } catch (error) {
      console.log('error', error)
    }
  } else {
    try {
      await OrderModel.findOneAndUpdate(
        {
          email: req.body.email,
        },
        {
          $push: { order_data: data },
        }
      ).then(() => {
        res.json({ success: true })
      })
    } catch (error) {
      console.log('err')
      // res.send('Server Error', error.message)
    }
  }
})

module.exports = router
