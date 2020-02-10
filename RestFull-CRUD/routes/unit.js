var express = require('express');
var router = express.Router();
const sql = require('mssql')

const config = {
  user: '4dd_23',
  password: 'xxx123##',
  server: "213.140.22.237\\sqlexpress",
  database: '4dd_23'
}

router.get('/', function(req, res, next) {
  sql.connect(config, err => {
    if(err) console.log(err);
    
    let sqlRequest = new sql.Request();
    sqlRequest.query('select * from [cr-unit-attributes]', (err, result) => {
        if (err) console.log(err); 
        res.send(result); 
    });
  });
});
router.get('/search/:unit/', function(req, res, next) {
  sql.connect(config, err => {
    if(err) console.log(err);
    let sqlRequest = new sql.Request();
    sqlRequest.query(`select * from [cr-unit-attributes] where Unit = '${req.params.unit}'`, (err, result) => {
        if (err) console.log(err);

        res.send(result);
    });
  });
});
module.exports = router;