const express = require('express');
const app = express();
const PORT = 3001;

const friends = [
  {
    id: 0,
    name: 'Isaac'
  },
  {
    id: 1,
    name: 'Albert'
  },
  {
    id: 2,
    name: 'Alex'
  }
]

// First middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  // actions go here...
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
})

// Second middleware
app.use(express.json());

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

app.post('/friends', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend\'s name'
    })
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length
  }
  friends.push(newFriend);

  res.json(newFriend);
})

app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello Albert</li></ul>');
});

app.get('/messages', (req, res) => {
  res.send('Updating messages...');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
});