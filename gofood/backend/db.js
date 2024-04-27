const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://gofood:gofood@cluster0.8qtgxr7.mongodb.net/go_food?retryWrites=true&w=majority&appName=Cluster0'
  )

  console.log('connected')
  const fetch_collection = await mongoose.connection.db.collection('food_items')

  const data = await fetch_collection.find({}).toArray()
  // console.log(data)
}

module.exports = connectDB
