const data=require('./matches.json');
let winnerList={}
module.exports={
    won: function(){
let matches=data.reduce((file,item)=>{
  
  if(file[item.season]){

    file[item.season][item.winner] =(file[item.season][item.winner]|| 0)+1 ||{};
    winnerList[item.winner]=0;
  }
    else
    file[item.season]={}
    return file;

},{})
let finalvalue ={};
finalvalue['teamNames']=winnerList;
finalvalue['Data']= matches;

return finalvalue;

    }
}

