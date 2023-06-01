const {Router} = require('express');
const router = Router();
const recipeControllers = require('../controllers/recipeControllers');

router.get('/addSmoothies' , recipeControllers.addSmoothies_get);
module.exports = router;