module.exports={
numberOfMatches:function(data){
let year={};
year=data.reduce(function(all,item){
    all[item.season]=(all[item.season] ||0)+1;
    return all;
  },{})
return year;
}
}