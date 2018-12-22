fetch('deliveries.json').then(function(response){
    console.log('Status:',response.status);
    response.json().then(function(data){
        console.log('FETCH RESULT:',data);
    }).catch(function(err){
        console.log('FETCH parsing error',err)
    })
})