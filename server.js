const express = require('express');
const friendsRouter = require('./routes/friends.routes');
const messagesRouter = require('./routes/messages.routes');

const app = express();
const PORT = 3001;

// First middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  // actions go here...
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

// Second middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    id: 1,
    name: 'Sir Isaac Newton'
  });
});

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
});