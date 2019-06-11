import express  from 'express';
const router   = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index',{title:'盐城市机器人学会'})
});

router.get('/error', function(req, res, next) {
  res.render('error', { title: 'error' });
});

module.exports = router;
