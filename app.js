const mongoose= require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name is specified"]
      },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit= mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    rating: 8,
    review: "Its so awesome."
});


// fruit.save();

const personSchema= new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person= mongoose.model("Person", personSchema);

const mango= new Fruit({
    name: "Mango",
    rating: 10,
    review: "Very Great fruit"
});

//  mango.save();

 Person.updateOne({name: "Imran"}, {favouriteFruit: mango}, function(err){
    if(err){
            console.log(err);
        }else{
            console.log("Succesfully updated the document");
        }

 });

// const person = new Person({
//     name: "Amy",
//     age: 24,
//     favouriteFruit: pineapple
// });

// person.save();

// const kiwi= new Fruit({
//     name: "Kiwi",
//     rating: 6,
//     review: "Good"
// });

// const orange= new Fruit({
//     name: "Orange",
//     rating: 6,
//     review: "Good"
// });

// const banana= new Fruit({
//     name: "Banana",
//     rating: 9,
//     review: "Very Good"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
// if(err){
//     console.log(err);
// }else{
//     console.log("Succesfully saved all the fruits");
// }

// });

Fruit.find(function(err, fruits){
    if(err){
        console.log(err)
    }else{

        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);   
        });
    }
});

// Fruit.updateOne({_id: "6317b5e6659b2f9f71440c12"}, {name: "Peach"}, function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully updated the document");
//     }
// });

// Fruit.deleteOne({name: "Peach"}, function(err){
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Succesfully deleted the document");
//         }
//     });

// Person.deleteMany({name: "Imran"}, function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully deleted all the document");
//     }
// });