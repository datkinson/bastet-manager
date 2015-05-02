// setup new pouch database
var db = new PouchDB('kittens');

// create a new document
var doc = {
  "_id": "mittens",
  "name": "Mittens",
  "occupation": "kitten",
  "age": 3,
  "hobbies": [
    "playing with balls of yarn",
    "chasing laser pointers",
    "lookin' hella cute"
  ]
};

// put document in the database
db.put(doc);

// get document out and console log it
db.get('mittens').then(function (doc) {
  console.log(doc);
  jQuery('.result').html(doc.hobbies);
});