const mongoose = require('mongoose');
const mongooseurl = "mongodb://localhost:27017/";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongooseurl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("DB connected");

        const fetched_data = mongoose.connection.db.collection("food_items");
        const food_items = await fetched_data.find({}).toArray();

        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
        const foodCategory = await foodCategoryCollection.find({}).toArray();

        global.food_items = food_items;
        global.foodCategory = foodCategory;

        console.log(global.food_items);  // Optional: To check if the data is correctly stored
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB;
