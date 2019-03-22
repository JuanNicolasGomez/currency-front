
var CurrencyControllerModule = (function () {
  var rates = 0;

  var getCurrencies = function () {


    var callback = {

        onSuccess: function(ordersList){
			rates = ordersList.rates;
            var box = document.getElementById('selectBox');
			for (var key in ordersList.rates){
				var op = document.createElement('option');
				op.innerHTML = key;
				box.appendChild(op);
			}
			
			var box = document.getElementById('selectBox2');
			for (var key in ordersList.rates){
				var op = document.createElement('option');
				op.innerHTML = key;
				box.appendChild(op);
			}
            //body.innerHTML = ordersList.rates;
            /*for (var i = 0; i<ordersList.length;i++){
             showOrder(ordersList[i]);
            }*/

            },
        onFailed: function(exception){
            //console.log(exception);
            var body = document.getElementById('orders');
            body.innerHTML = "There is a problem with our servers. We apologize for the inconvenience, please try again later";
        }
    };
    //RestControllerModule.getOrders(callback);
    RestControllerModule.getCurrencies(callback);
	
	//var updateValues = function(){};

  };

  var getCurrenciesTable = function () {



      var callback = {

          onSuccess: function(ordersList){
  			rates = ordersList.rates;

             var body = document.getElementById('tablaBody');
             var i =1;
  			for (var key in rates){
  				var tr1 = document.createElement('tr');
                var th1 = document.createElement('th');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');

                th1.setAttribute('scope', 'row');
                th1.innerHTML = i;
                tr1.appendChild(th1);
                td1.innerHTML = key;
                tr1.appendChild(td1);
                td2.innerHTML = rates[key];
                tr1.appendChild(td2);

                body.appendChild(tr1);
                i++;
  			}



              //body.innerHTML = ordersList.rates;
              /*for (var i = 0; i<ordersList.length;i++){
               showOrder(ordersList[i]);
              }*/

              },
          onFailed: function(exception){
              //console.log(exception);
              var body = document.getElementById('orders');
              body.innerHTML = "There is a problem with our servers. We apologize for the inconvenience, please try again later";
          }
      };
      //RestControllerModule.getOrders(callback);
      RestControllerModule.getCurrencies(callback);

  	//var updateValues = function(){};

    };
  
  var updateCurrency = function(order){
      var amount1 = document.getElementById("amount1").value;
      var amount2 = document.getElementById("amount2").value;
      var cur1 = document.getElementById("selectBox").value;
      var cur2 = document.getElementById("selectBox2").value;

      var a = rates[cur1];
      var b = rates[cur2];
      if(cur1 != '' && cur2 != ''){
          if(order == 'reversed'){
              
              var res = (amount2/b)*a;
              document.getElementById("amount1").value = res.toFixed(3);
          }else{
              var res = (amount1/a)*b;
              document.getElementById("amount2").value = res.toFixed(3);
          }
      }
      
      
      
  };

    return {
      getCurrencies: getCurrencies,
      getCurrenciesTable: getCurrenciesTable,
      updateCurrency: updateCurrency

    };
  
})();
