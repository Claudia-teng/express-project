const express = require('express');
const app = express();
const PORT = 3001;

const friends = [
  {
    id: 0,
    name: 'Isaac'
  },
  {
    id: 2,
    name: 'Albert'
  },
  {
    id: 3,
    name: 'Alex'
  }
]

app.get('/', (req, res) => {
  res.send({
    id: 1,
    name: 'Sir Isaac Newton'
  });
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = +req.params.friendId;
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(400).json({
      error: 'Does not exist!'
    });
  }
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello Albert</li></ul>');
});

app.get('/messages', (req, res) => {
  res.send('Updating messages...');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
});