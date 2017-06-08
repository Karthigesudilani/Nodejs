var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Music";

MongoClient.connect(url, function(err, db) {
 if (err) throw err;
   console.log("Database created!");
   db.close();
 });


MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   db.createCollection("Songdetails", function(err, res) {
     if (err) throw err;
     console.log("Table created!");
     db.close();
   });
});



 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var myobj = [
{SongName:"Thaniye Thananthaniye",Film:"Rhythm",MusicDirector:"A.R.Rahman",MaleSinger:"Shankar mahadevn"},
 {SongName:"Evano Oruvan",Film:"Alai Payuthey",MusicDirector:"A.R.Rahman",FemaleSinger:"Swarnalatha"},
 {SongName:"Roja Poonthottam",Film:"Kannukul Nilavu",MusicDirector:"Ilaiyaraala",MaleSinger:"Unnikrishnan" ,FemaleSinger:" Anurandha Sriram"},
 {SongName:"Vennilavae Vennilavae Vinnaihaandi",Film:"Minsara Kanavu",MusicDirector:"A.R.Rahman",MaleSinger:"Hariharan",FemaleSinger: "Sadhana Sargam"},
 {SongName:"Sollamal Thottu Chellum Thendral",Film:"Dheena",MusicDirector:"Yuvan Shankar Raja",MaleSinger:"Hariharan"}
   ];
 db.collection("Songdetails").insert(myobj, function(err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
     db.close();
 });
 });



//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //var query = { MusicDirector: "A.R.Rahman" };
  //db.collection("songdetails").find(query).toArray(function(err, result) {
  //  if (err) throw err;
    //console.log(result);
    //db.close();
  //});
//})



//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //var query = { MusicDirector: "A.R.Rahman" ,MaleSinger:"Unnikrishnan"};
//  db.collection("songdetails").find(query).toArray(function(err, result) {
  //  if (err) throw err;
    //console.log(result);
    //db.close();
  //});
//})

//var http = require('http');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/music";

//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //var myquery = { SongName: 'Roja Poonthottam' };
  //db.collection("songdetails").remove(myquery, function(err, obj) {
  //  if (err) throw err;
  //  console.log(obj.result.n + " document(s) deleted");
    //db.close();
  //});
//});

//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var myobj = [
//{SongName:"Etho thechcha Oththukkadi",Film:"Anjan",MusicDirector:"A.R.Rahman",MaleSinger:"Aniruth"},
  //];
  // db.collection("songdetails").insert(myobj, function(err, res) {
    // if (err) throw err;
    //console.log("Number of records inserted: " + res.insertedCount);
    // db.close();
  // });
// });



// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var query = { MaleSinger: "Hariharan", Film:"Minsara Kanavu" };
//   db.collection("songdetails").find(query).toArray(function(err, result) {
//     if (err) throw err;
//   //  console.log(result);
//     db.close();
//   });
// });
//



// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var query = { MaleSinger };
//   db.collection("songdetails").find(query).toArray(function(err, result) {
//     if (err) throw err;
//    //console.log(result);
//     db.close();
//   });
// });
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/music";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("songdetails").find({},{singer:1,_id:0}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
