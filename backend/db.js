
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://someshmishra3436:Somesh%403436@cluster0.otirgr3.mongodb.net/Fooddeliverysite';

module.exports = async function (callback) {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.db.collection("fooditems");
        const categoryCollection = mongoose.connection.db.collection("foodcategory");

        const foodItems = await foodCollection.find({}).toArray();
        const categories = await categoryCollection.find({}).toArray();

        callback(null, foodItems, categories);
        console.log(foodItems)
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        callback(err, null, null);
    }
};
