const fs = require('fs');
console.log('pexels-20413840.jpg exists:', fs.existsSync('images/pexels-20413840.jpg'));
if (fs.existsSync('images/pexels-20413840.jpg')) {
  console.log('size:', fs.statSync('images/pexels-20413840.jpg').size);
}

