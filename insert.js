var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/uki";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { name: 'Dilani', address: 'Karainagar'},
    { name: 'Minarva', address: 'Jaffna'},
    { name: 'Apiramy', address: 'Sulipuram'},
    { name: 'Janusha', address: 'Eelalai'},
    { name: 'shama', address: 'Jaffna'},
    { name: 'Thuvarakan', address: 'Jaffna'},
    { name: 'Jaksan', address: 'Jaffna'},
    { name: 'Thadchajini', address: 'Nelliyady'},
    { name: 'Mayoori', address: 'Velanai'},
    { name: 'Janarthanan', address: 'Velanai'},
    { name: 'Thaneesan', address: 'Velanai'},
    { name: 'Ramana', address: 'Nelliyady'},
    { name: 'Tharshan', address: 'Nelliyady'},
    { name: 'Shagka', address: 'Savakachcheri'},
    { name: 'Kirthana', address: 'Vavuniya'}
  ];
  db.collection("Student").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
