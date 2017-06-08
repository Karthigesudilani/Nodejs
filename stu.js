var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/stu";

//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
//console.log("Database created!");
  //db.close();
//});

//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //db.createCollection("stumark", function(err, res) {
  //  if (err) throw err;
//console.log("Table created!");
  //  db.close();
  //});
//});

//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //var myobj = [
    //{Name:"mala",Maths_Marks:45,English_Marks:53,Science_Marks:72},
    //{Name:"vanu",Maths_Marks:80,English_Marks:75,Science_Marks:85},
    //{Name:"kala",Maths_Marks:32,English_Marks:46,Science_Marks:53},
    //{Name:"aruli",Maths_Marks:78,English_Marks:85,Science_Marks:80},
    //{Name:"shayu",Maths_Marks:80,English_Marks:76,Science_Marks:65},
    //{Name:"kumaran",Maths_Marks:32,English_Marks:73,Science_Marks:84},
    //{Name:"lucky",Maths_Marks:66,English_Marks:90,Science_Marks:45},
    //{Name:"gva",Maths_Marks:71,English_Marks:75,Science_Marks:56},
  //  {Name:"raam",Maths_Marks:41,English_Marks:65,Science_Marks:88}
  //];
  //db.collection("stumark").insert(myobj, function(err, res) {
    //if (err) throw err;
  //console.log("Number of records inserted: " + res.insertedCount);
    //db.close();
  //});
//});



//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //var myquery = { Name:"mala",Maths_Marks:45,English_Marks:53,Science_Marks:72};
  //var newvalues = { Name:"mala",Maths_Marks:51,English_Marks:53,Science_Marks:72};
  //db.collection("stumark").update(myquery, newvalues, function(err, res) {
    //if (err) throw err;
    //console.log(res.result.nModified + " record updated");
    //db.close();
  //});
//});

//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //db.collection("stumark").find({Maths_Marks:{$gt:50}}).toArray(function(err, result) {
    //if (err) throw err;
    //console.log(result);
    //db.close();
  //});
//});


//MongoClient.connect(url, function(err, db) {
//if (err) throw err;
//var myquery = {Name:"lucky",Maths_Marks:66,English_Marks:90,Science_Marks:45};
//var newvalues = {Name:"lucky",Maths_Marks:66,English_Marks:90,Science_Marks:75};
//db.collection("stumark").update(myquery, newvalues, function(err, res) {
//if (err) throw err;
//console.log(res.result.nModified + " record updated");
//db.close();
//});
//});


//MongoClient.connect(url, function(err, db) {
//if (err) throw err;
//db.collection("stumark").find({Maths_Marks:{$gt:50},English_Marks:{$gt:50},Science_Marks:{$gt:50}}).toArray(function(err, result) {
//if (err) throw err;
//console.log(result);
//db.close()
//});
//});


//MongoClient.connect(url, function(err, db) {
//if (err) throw err;
//db.collection("stumark").find({Maths_Marks:{$lt:50},English_Marks:{$gt:50}}).toArray(function(err, result) {
//if (err) throw err;
//console.log(result);
//db.close()
//});
//});

//MongoClient.connect(url, function(err, db) {
//if (err) throw err;
//db.collection("stumark").find({Maths_Marks:{$lt:40},Science_Marks:{$lt:40}}).toArray(function(err, result) {
//if (err) throw err;
//console.log(result);
//db.close()
//});
//});


//MongoClient.connect(url, function(err, db) {
//if (err) throw err;
//var myquery = {Name:"raam",Maths_Marks:41,English_Marks:65,Science_Marks:88};
//var newvalues = {Name:"raam",Maths_Marks:41,English_Marks:65};
//db.collection("stumark").update(myquery, newvalues, function(err, res) {
//if (err) throw err;
//console.log(res.result.nModified + " record updated");
//db.close();
//});
//});

//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //var myobj = [
  //{Name:"john",Maths_Marks:87,English_Marks:23}

  //];
  //db.collection("stumark").insert(myobj, function(err, res) {
  //if (err) throw err;
  //console.log("Number of records inserted: " + res.insertedCount);
  //db.close();
  //});
//});

//MongoClient.connect(url, function(err, db) {
//if (err) throw err;
var myquery = {Name:"john",Maths_Marks:87,English_Marks:23};
var newvalues = {Name:"john",Maths_Marks:87,Science_Marks:23};
db.collection("stumark").update(myquery, newvalues, function(err, res) {
if (err) throw err;
console.log(res.result.nModified + " record updated");
db.close();
});
});
