const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const router = express.Router();

const app = express();

var port = process.env.PORT || 8080;

app.use(cors());

const db = mysql.createConnection({
    host     : 'us-cdbr-iron-east-02.cleardb.net',
    user     : 'bb5e33437a1122',
    password : 'fa3f3033',
    database : 'heroku_4029d82d6084827'
  });

  db.connect((err) => {
      if(err){
          throw err;
      }
      //console.log('MySQL Connected');
  });


  router.get('/bio/:id', (req, res) => {
    let sql = "SELECT * from people WHERE playerID = '" + req.params.id + "'";
      let query = db.query(sql, (err, results) => {
          if(err) throw err;
          res.send(results);
      })

  });

  router.get('/batting/:id', (req, res) => {
    let sql = "SELECT playerID, yearID, SUM(G) As G, (CASE WHEN AVG(stint) > 1 THEN '-' ELSE teamID END) as team, round(SUM(H) / SUM(AB),3) as BAvg, round((SUM(H + BB + HBP) / SUM(AB + BB + HBP + SF)), 3) as OBP, round((SUM(H + 2B + 2 * 3B + 3 * HR) / SUM(AB)), 3) as SLG, round((SUM(H + BB + HBP) / SUM(AB + BB + HBP + SF)) + (SUM(H + 2B + 2 * 3B + 3 * HR) / SUM(AB)), 3) as OPS, round((SUM(BB) / SUM(AB + BB + HBP + SF + SH)) * 100, 1) as BBpct, round((SUM(SO) / SUM(AB + BB + HBP + SF + SH)) * 100, 1) as Kpct, round((((2B) + (2 * 3B) + ( 3 * HR)) / AB), 3) as ISO FROM `batting` WHERE playerID = '" + req.params.id + "' Group By `yearID` ";
      let query = db.query(sql, (err, results) => {
          if(err) throw err;
          res.send(results);
      })

  });


app.use('/', router);


app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});