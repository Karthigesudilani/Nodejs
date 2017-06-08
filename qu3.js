var fs = require('fs');

fs.writeFile('ukinode.txt', 'I studty at Uki in more than 1 month. This class is very important.', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
