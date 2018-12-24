var fs=require('fs')
var data=fs.readFileSync('matches.json', 'utf8');
var words=JSON.parse(data);
var bodyparser=require('body-parser');
let year={};
let count=0;
module.exports={
 numberOfMatches: function(){
     for(var i=0;i<words.length;i++)
{
    if(i<words.length-1)
    {
       if(words[i].season ===words[++i].season)
        {
          count++;
          i=i-1; 
        }
        else
        {
          year[words[i-1].season]=count+1;
          count=1;
       }
    }  
}
return year;
}
}