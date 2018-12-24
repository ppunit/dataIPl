const express = require('express')
const app = express()
const port = 5000
 var matchesPlayed=require('./number_of_matches.js');
 var matches_won=require('./matchesWon.js');
 var extraRuns=require('./extraRuns.js');
 var economical_bowler=require('./economical.js');
var path=require('path');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => res.sendFile('index.html',{root:path.join(__dirname,'../client')}));

app.get('/matchesplayed',(req,res)=>res.send(matchesPlayed.numberOfMatches()));

app.get('/matchesWon',(req,res)=>res.send(matches_won.won()));
app.get('/extraRuns',(req,res)=>res.send(extraRuns.extra()));

app.get('/economical',(req,res)=>res.send(economical_bowler.economicalBowler()));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.get('/',function(req,res){
//     res.sendFile('index.html')
// })

