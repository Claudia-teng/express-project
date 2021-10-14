const express = require('express');
const friendController = require('./controllers/friends-controller');
const messagesController = require('./controllers/messages-controller');

const app = express();
const PORT = 3001;

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

app.get('/friends', friendController.getFriends);
app.get('/friends/:friendId', friendController.getFriend);
app.post('/friends', friendController.postFriend);

app.get('/messages', messagesController.getMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
});