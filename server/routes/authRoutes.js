const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { jwtkey, EMAIL_SECRET, user, pass } = require('../keys')
const router = express.Router();
const User = mongoose.model('User');
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  tls: {
    rejectUnauthorized: false
  },
  auth: {
    user: user,
    pass: pass,
  },
});



router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  var userId = 1
  var provider = 'Cotton Sandhai'
  try {
    const user = new User({ userId, email, password, provider });
    await user.save();
    const emailToken = jwt.sign({ email: user.email }, EMAIL_SECRET, { expiresIn: '1d' });
    console.log('token:' + emailToken)
    const url = `http://localhost:3000/confirmation/${emailToken}`;
    const mailOptions = {
      from: 'vrgeeks.technologies@gmail.com', // sender address
      to: email, // list of receivers
      subject: 'Cotton Sandhai - Email verification', // Subject line
      html: `Please click on the link to confirm your email: <a href="${url}">${url}</a>`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info);
    });
    res.send({ token })

  } catch (err) {
    return res.status(422).send(err.message)
  }
})



router.get('/confirmation/:token', async (req, res) => {
  try {
    const { email } = jwt.verify(req.params.token, EMAIL_SECRET)
    console.log('email from token: ' + email)
    await User.updateOne({ 'email': email }, { "$set": {'isVerified': true,'verifiedOn': new Date() }})
    res.send('Congratulations, your email has been verified successfully. We hope you have a wonderful experience using our app.');
  } catch (e) {
    res.send('error');
  }
});


router.post('/signin', async (req, res) => {
  console.log("signin")

  const { email, password } = req.body
  console.log(email)
  console.log(password)
  if (!email || !password) {
    return res.status(422).send({ error: "must provide email or password" })
    console.log("server no data")
  }
  const user = await User.findOne({ email })
  console.log(user)
  if (!user) {
    return res.status(422).send({ error: "must provide email or password" })
    console.log("server user no match")
  }
  if (!user.isVerified) {
    console.log('please verify your email')
    return res.status(422).send({ error: "please verify your email" })
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, jwtkey)
    res.send({ token })
    console.log('Success')
  }
  catch (err) {
    return res.status(422).send({ error: "must provide email or password" })
  }
})


router.post('/addvendor', async (req, res) => {
  const { companyName, nickName } = req.body
  console.log(companyName)
  console.log(nickName)
  res.send('data received successfully')
})

module.exports = router