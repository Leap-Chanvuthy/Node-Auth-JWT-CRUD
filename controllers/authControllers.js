const User = require("../models/User");
const jwt = require('jsonwebtoken');

//handle errors 
// const handleErrors = (err) =>{
//   console.log (err.message , err.code);
//   let error = {email : '' , password : '' };
//     if (err.message.include('user validation failed')){
//       console.log (err);
//     }
// }
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) =>{
  return jwt.sign ({ id } , 'vuthy secret code' , {
    expiresIn : maxAge
  })
}

// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  }
  catch(err) {
    res.status(400).json({ errors });
  }
 
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send('user login');
}