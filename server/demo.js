var fs=require('fs')
var data=fs.readFileSync('matches.json', 'utf8');
var words=JSON.parse(data);
var bodyparser=require('body-parser');

var matches={};
var teams={};
var count=0,j=0;
var currentYear=words[0].season;
matches[currentYear]=[];
var unique;


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
         unique = Object.keys(teams).filter( onlyUnique );
        matches[currentYear]=teams;
        currentYear=words[++i].season;
        matches[currentYear]=[];
        teams={};
        j++;
        i--;
        
    }

}
matches[currentYear]=teams;
}
console.log(unique);

// var year=Object.keys(matches);
// var team=Object.values(matches);

// var teamate=[];
// var j=0;
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// usage example:

// var unique = Object.values(team).filter( onlyUnique ); // returns ['a', 1, 2, '1']

// console.log(unique);
