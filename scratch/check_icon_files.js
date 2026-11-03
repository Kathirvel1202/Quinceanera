const fs = require('fs');
console.log('images/QS.png exists:', fs.existsSync('images/QS.png'));
console.log('favicon.ico exists:', fs.existsSync('favicon.ico'));
console.log('favicon.png exists:', fs.existsSync('favicon.png'));
if (fs.existsSync('images/QS.png')) {
  console.log('images/QS.png size:', fs.statSync('images/QS.png').size);
}
if (fs.existsSync('favicon.ico')) {
  console.log('favicon.ico size:', fs.statSync('favicon.ico').size);
}
if (fs.existsSync('favicon.png')) {
  console.log('favicon.png size:', fs.statSync('favicon.png').size);
}

