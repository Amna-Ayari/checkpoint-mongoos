const mongoose = require("mongoose");
const Person = require("./models/Person");


// Connecting to DB:
const uri = "mongodb+srv:mongodb+srv://ayariamna:<password>@cluster0.c6f2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(() => {
    console.log("connected to database")
  })
  .catch(err => console.log(err));


 //create a person document with dataprovided
Person.create({
  name: "user name",
  aged: 25,
  favoriteFoods: ["pasta", "pizza", "ijja"],
}).then((person) =>
  person.save((err, data) => {
    log(data, err);
  })
);

let arrayOfPeople = [
  { name: "user", aged: 25, favoriteFoods: ["pasta", "pizza", "ijja"] },
  { name: "dhia", aged: 26, favoriteFoods: ["pasta", "pizza"] },
  { name: "user", aged: 27, favoriteFoods: ["pasta", "pizza", "ijja","mekla"] },
  { name: "wahd", aged: 28, favoriteFoods: ["pasta", "ijja"] },
  { name: "3alayna", aged: 29, favoriteFoods: ["pasta", "pizza", "ham"] },
  { name: "yezi", aged: 15, favoriteFoods: ["mekla", "scalope", "ijja"] },
];
//create and save many people documents
Person.create(arrayOfPeople).then((persons)=>persons.forEeach((person)=>{
    person.save((err,data)=>{
        console.log(err,data)
    })
}))
//finding people with name "user"
Person.find({name:'user'}).then((persons)=>{
    console.log(persons);
})
//find person that like pizza
Person.findOne({favoriteFoods:"pizza"}).then((person)=>{
    console.log(person);
})
//find a person with an Id = personId
let personId=""
Person.findById(personId).then((person)=>{
    console.log(person);
})
//adding loubiya as a favoritefood to the person with personId
Person.findById(personId).then((person)=>{
    person.favoriteFoods.push("loubiya")
    person.save()
})
//edit the age of person with name personName to 25
let personName=""
Person.findOneAndUpdate({name:personName},{age:20},{ new: true })
//delete the person with specified Id
Person.findByIdAndRemove(personId)
//delet all person with name  'Marry'
Person.remove({name: "Mary"},(err, data)  => {
              try {
                   console.log("person removed")
               } catch (error) {
                   console.log(error)
              }
           })