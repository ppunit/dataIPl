var fs=require('fs')
const data=require('./matches.json');
var bodyparser=require('body-parser');
const data1=require('./deliveries.json');

var economy={}
var id=[]
var k=0;

for(var i=0;i<data.length;i++)
{
    if(data[i].season==='2015')
    {
        id[k++]=parseInt(data[i].id)
    }
    
}

var len=id.length;
console.log(len);
var count=0,balls=0;

module.exports={
    economicalBowler: function(){

for(var j=1;j<data1.length-1;j++)
{
   if((parseInt(data1[j].match_id))>id[1] && (parseInt(data1[j].match_id))<id[id.length-1])
   {

       if(data1[j].bowler===data1[++j].bowler)
         {
          count=parseInt(data1[j].total_runs)+count;
          balls=parseInt(data1[j].ball)+balls;
         j--;
         }
         else
         {
           
            economy[data1[j].bowler]=(((economy[data1[j].bowler]||0)+count)/balls)*6;
            count=0;
            balls=0;
         }

   }
}

function sortProperties(obj)
{
  // convert object into array
	var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); // each item is an array in format [key, value]
	
	// sort items by value
	sortable.sort(function(a, b)
	{
	  return a[1]-b[1]; // compare numbers
	});
	return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}

var topBowler=sortProperties(economy);
return topBowler;
    }
}