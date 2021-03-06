require("../models/MessageModel");
const mongoose = require("mongoose");
const Message = mongoose.model("messages");

// @Description: checks only message collection for all messages from an email
// @return: all messages found, or {msg: "Not Found"} (used for testing purposes)
const getByEmail = (req, res) => {
  Message.find({ email: req.body.email }).then((message) =>
    message
      ? res.status(200).json(message)
      : res.status(404).json({ msg: "Not Found" })
  );
};

// @return: JSON with all items in messages collection
const getAllMessages = (req, res) => {
  Message.find((err, messages) => {
    if (err) return console.debug(err);
    console.debug(`Inside controller:getAllMessages(): \n${messages}`);
  })
    .then((message) => res.json(message))
    .catch((err) => console.debug(err));
};

// @Description: post Message(model) JSON to messages collection
// @return: JSON with all items in messages collection
const postMessage = (req, res) => {
  if (req.body.email === null) new Error(res.send(req.body));
  if (req.body.email === undefined) new Error(res.send(req.body));

  console.debug(`postMessage:\n
  name: ${req.body.name}
  email: ${req.body.email}
  message: ${req.body.message}
  `);

  let message = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  message
    .save()
    .then((res) => {
      console.debug(res);
      JSON.stringify(res);
    })
    .catch((error) => {
      console.debug(error);
      res.json(error);
    });
  res.json(res.body);
};
module.exports = { getByEmail, getAllMessages, postMessage };
