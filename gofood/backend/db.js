const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://gofood:gofood@cluster0.8qtgxr7.mongodb.net/go_food?retryWrites=true&w=majority&appName=Cluster0'
  )

  console.log('connected')
  const fetch_items_collection = await mongoose.connection.db.collection(
    'food_items'
  )
  const food_item_data = await fetch_items_collection.find({}).toArray()

  const fetch_category_col = await mongoose.connection.db.collection(
    'food_category'
  )
  const food_cat_data = await fetch_category_col.find({}).toArray()

  global.food_items = food_item_data
  global.food_category = food_cat_data
  // console.log(data)
}

module.exports = connectDB
