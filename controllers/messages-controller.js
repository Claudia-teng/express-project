const path = require('path');

const getMessage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
  // res.send('<ul><li>Hello Albert</li></ul>');
}

module.exports = {
  getMessage
}