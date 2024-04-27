var express = require('express')

var router = express.Router()

const userModel = require('../models/User')

const { body, validationResult } = require('express-validator')

router.post(
  '/createuser',
  [
    body('email', 'Not a valid email').isEmail(),
    body('name', 'Length must be >=5').isLength({ min: 5 }),
    body('password', 'length musht >=5').isLength({ min: 5 }),
  ],

  async (req, res) => {
    console.log('POST request received at /createuser')

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }

    try {
      const user = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      })

      res.json({ success: true })
    } catch {
      console.log('err')
      res.json({ success: false })
    }
  }
)

module.exports = router
