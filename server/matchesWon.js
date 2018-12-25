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
var team={};
var finalArray=[];
var returnArray={};


module.exports={
    won: function(){
for(var i=0;i<words.length;i++)
{
    team[words[i].winner]=0;

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
}
// console.log(matches);


var year=Object.keys(matches);
var noOfMatches=[];

var k=0;
finalArray=Object.keys(team);
var value=Object.values(matches);
for(var i=0;i<finalArray.length;i++)
{
    for(var j=0;j<10;j++)
    {
        if(value[j][finalArray[i]])
        {
        noOfMatches[k]=value[j][finalArray[i]]
        }
        else{
            noOfMatches[k]=0;
        }
        k++;
    }
   returnArray[finalArray[i]]=noOfMatches;
    noOfMatches=[];
     k=0;

    
}return returnArray;

}
}

