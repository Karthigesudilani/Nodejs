var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/students";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
//  console.log("Database created!");
  db.close();
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("studentmark", function(err, res) {
    if (err) throw err;
// console.log("Table created!");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    {Name:"Mala",Maths_Marks:45,English_Marks:53,Science_Marks:72},
    {Name:"Vanu",Maths_Marks:80,English_Marks:75,Science_Marks:85},
    {Name:"Kala",Maths_Marks:32,English_Marks:46,Science_Marks:53},
    {Name:"Aruli",Maths_Marks:78,English_Marks:85,Science_Marks:80},
    {Name:"Shayu",Maths_Marks:80,English_Marks:76,Science_Marks:65},
    {Name:"Kumaran",Maths_Marks:32,English_Marks:73,Science_Marks:84},
    {Name:"Lucky",Maths_Marks:66,English_Marks:90,Science_Marks:45},
    {Name:"Gva",Maths_Marks:71,English_Marks:75,Science_Marks:56},
    {Name:"Raam",Maths_Marks:41,English_Marks:65,Science_Marks:88}
  ];
  db.collection("studentmark").insert(myobj, function(err, res) {
    if (err) throw err;
  //console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("studentmark").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Table deleted");
    db.close();
  });
});
