var fs = require('fs');

fs.appendFile('ukinode.txt', 'In uki There 15 students. Our lectures are vithu anna and harsi akka',
 function (err) {
  if (err) throw err;
  console.log('Saved!');
});
