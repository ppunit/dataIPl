var fs=require('fs')
var data=fs.readFileSync('matches.json', 'utf8');
var words=JSON.parse(data);
var bodyparser=require('body-parser');
let year={};
year[0]=[];


for(var i=0;i<words.length;i++)
{
console.log(words[i].season);

}