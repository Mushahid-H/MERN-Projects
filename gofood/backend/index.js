const express = require('express')

const app = express()

const port = 5000

const mongoDB = require('./db')

mongoDB()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', (req, res) => {
  res.send('HEllo world')
})

app.use(express.json())
app.use('/api', require('./routes/login_signup'))
app.use('/api', require('./routes/main_data'))
app.use('/api', require('./routes/order_data'))

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})
