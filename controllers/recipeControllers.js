const Recipe = require('../models/Recipe');
const User = require('../models/User');

module.exports.addSmoothies_get = (req , res , next) =>{
    const user = new User();
    res.render ('addSmoothies' , {footer : user});

}