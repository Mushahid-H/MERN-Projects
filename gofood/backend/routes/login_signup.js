var express = require('express')

var router = express.Router()

const userModel = require('../models/User')

const { body, validationResult } = require('express-validator')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const jwtSec = 'hellomynameisnoneofyourbusiness'

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

    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password, salt)

    try {
      const user = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        location: req.body.location,
      })

      res.json({ success: true })
    } catch {
      console.log('err')
      res.json({ success: false })
    }
  }
)
router.post(
  '/loginuser',
  [
    body('email', 'Not a valid email').isEmail(),
    body('password', 'length musht >=5').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }
    const email = req.body.email
    try {
      const userData = await userModel.findOne({ email })
      if (!userData) {
        return res.status(400).json({ errors: 'Enter correct credentials' })
      }

      const passCompare = bcrypt.compare(req.body.password, userData.password)

      if (!passCompare) {
        return res.status(400).json({ errors: 'Enter correct credentials' })
      }
      const data = {
        user: {
          id: userData.id,
        },
      }
      const authtoken = jwt.sign(data, jwtSec)
      res.json({ success: true, authtoken: authtoken })
    } catch {
      console.log('err')
      res.json({ success: false })
    }
  }
)

module.exports = router
