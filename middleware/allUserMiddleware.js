
const User = require('../models/User');

const fetchDataUser = ( async (req , res , next) => {
    try {
        const userCount = await User.countDocuments();
        res.locals.userCount = userCount;
        next();
    }
    catch (err){
        console.log (err);
        res.status(404).send('Internal server error');
    }

})

module.exports = fetchDataUser;