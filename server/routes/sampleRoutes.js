const express = require('express')
const router1 = express.Router();
const sqlDS = require('../store/sqlDataStore');

console.log(sqlDS);

router1.get('/states/', async (req, res) => {
  console.log("******************* Entered Routes ********************************");
  var states = [];

  try {
    sqlDS.getStates().then(
      function(result) {
        states = result;
        res.status(200).json(states);
        console.log("******************* Exited Routes Successfully ********************************");
      }
    ).catch(function(err) {
      console.log("Promise rejection error: " + err.stack);
      res.status(500, "Internal Server Error");
      console.log("******************* Exited Routes With Failure ********************************");
      }
    );
  } catch(e) {
    console.log(e)
    res.status(500, "Internal Server Error");
  }
});

router1.post('/state', async (req, res) => {
  console.log("******************* Entered Routes ********************************");
  var { code, state } = req.body;
  var state = {};
  state["code"] = code;
  state["state"] = state;
  try {
    sqlDS.createState(state).then(
      function(result) {
        res.status(200).send('Ok');
        console.log("******************* Exited Routes Successfully ********************************");
      }
    ).catch(function(err) {
      console.log("Promise rejection error: " + err.stack);
      res.status(500, "Internal Server Error");
      console.log("******************* Exited Routes With Failure ********************************");
      }
    );
  } catch(e) {
    console.log(e)
    res.status(500, "Internal Server Error");
  }

})


router1.post('/signin', async (req, res) => {
  const { email, password } = req.body
  console.log(email)
  console.log(password)
  if (!email || !password) {
    return res.status(422).send({ error: "must provide email or password" })
  }
  const user = await User.findOne({ email })
  console.log(user)
  if (!user) {
    return res.status(422).send({ error: "must provide email or password" })
  }
  if (!user.isVerified) {
    console.log('please verify your email')
    return res.status(422).send({ error: "please verify your email" })
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, jwtkey)
    res.send({ token })
  }
  catch (err) {
    return res.status(422).send({ error: "must provide email or password" })
  }
})


router1.post('/addvendor', async (req, res) => {
  const { companyName, nickName } = req.body
  console.log(companyName)
  console.log(nickName)
  res.send('data received successfully')
})

module.exports = router1
