const model = require('../models/friends.model');

const getFriends = (req, res) => {
  res.json(model);
}

const getFriend = (req, res) => {
  const friendId = +req.params.friendId;
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(400).json({
      error: 'Does not exist!'
    });
  }
}

const postFriend = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend\'s name'
    })
  }

  const newFriend = {
    name: req.body.name,
    id: model.length
  }
  friends.push(newFriend);

  res.json(newFriend);
}

module.exports = {
  getFriends,
  getFriend,
  postFriend
}