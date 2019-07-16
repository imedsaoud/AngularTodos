//Requete Ajax pour recuperer les données de l'Api 
$.ajax({
  url: 'http://localhost:8080/api',
  dataType: 'JSON',
  type: 'GET',
  success: function(data){
    if(data.name == "MongoError"){
      console.log(data.message);
    } else {
      console.log(data);
    }
  },
  error: function(err){
    console.log(data);
  }
})

