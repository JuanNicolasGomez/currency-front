var RestControllerModule = (function () {

  var getCurrencies = function(callback){
        axios.get('https://gpmfk4dnsk.execute-api.us-east-1.amazonaws.com/prod/currencies')
        .then(function(response){
            console.log("Currencies obtained successfully");
            callback.onSuccess(response["data"]);
          })
		  .catch(function (error) {
			if(callback != null){
				callback.onFailed(error);
			}else{
				console.log(error);
			}

		  });
    };



  return {

	getCurrencies: getCurrencies
  };
  
})();