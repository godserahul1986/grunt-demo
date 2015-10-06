define(["credits", "products"], function (credits, products) {
	return {	
		  purchaseProduct: function () {
			  console.log("Function purchaseProduct");
			  var credit = credits.getCredits();
			  if (credit > 0) {
				  products.reserveProduct();
				  return true;
			  }
			  return false;
		  }
	};
});
