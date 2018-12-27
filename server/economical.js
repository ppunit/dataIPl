module.exports = {
    economicalBowler:function(data,data1){
	let matchId = data.reduce((file, item) => {
		if (item.season == 2016) {
			file.push(item.id);
		}
		return file;
		}, [])
		
let totalRuns=data1.reduce((file,item)=>{
if(matchId.includes(item.match_id))
{
   file[item.bowler]=(file[item.bowler] || 0)+parseInt(item.total_runs);
 }
return file;
},{})

let balls=data1.reduce((file,item)=>{
	if(matchId.includes(item.match_id))
	{
	   file[item.bowler]=(file[item.bowler] || 0)+1;
	}
	return file;
	},{})
for(let i in totalRuns){
		if(totalRuns[i]){
		totalRuns[i]=(totalRuns[i]/balls[i])*6;
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

var topBowler=sortProperties(totalRuns);
return topBowler;
	}
}
