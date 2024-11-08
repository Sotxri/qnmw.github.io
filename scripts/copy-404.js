const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '../docs/index.html');
const destination = path.join(__dirname, '../docs/404.html');

try {
  fs.copyFileSync(source, destination);
  console.log('Successfully created 404.html');
} catch (err) {
  console.error('Error creating 404.html:', err);
} 