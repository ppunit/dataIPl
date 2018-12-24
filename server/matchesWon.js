var fs=require('fs')
var data=fs.readFileSync('matches.json', 'utf8');
var words=JSON.parse(data);
var bodyparser=require('body-parser');

var matches={};
var teams={};
var count=0,j=0;
var currentYear=words[0].season;
matches[currentYear]=[];

module.exports={
    won: function(){
for(var i=0;i<words.length;i++)
{
currentYear=words[i].season;
    if(i<words.length-1)
    {
    if(words[i].season === words[++i].season)
    {
      teams[words[i].winner]=(teams[words[i].winner] || 0)+1;
      
    i=i-1;
    }
    else{
        
        matches[currentYear]=teams;
        currentYear=words[++i].season;
        matches[currentYear]=[];
        teams={};
        j++;
        i--;
        
    }

}
matches[currentYear]=teams;
}return matches;

    }
}
