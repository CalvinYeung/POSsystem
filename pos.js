jQuery(function(){
	var candy = [
	{name: "Calvin's Crack Candy Cane", price: 133.37},
	{name: "Meiji's Melt In Your Mouth Marsmallows", price: 0.25 },
	{name: "Josh's JellyBeans", price: 0.55 },
	{name: "Harrison's Trixies Treats", price: 1.02 },
	{name: "Brian's Schweddy Balls", price: 0.99 },
	{name: "Ed's Edibles", price: 0.05},
	{name: "Zoe's Zesty Zucchini", price: 0.18 },
	{name: "Jacob Juicy", price: 0.23 },
	{name: "Raquel's Roasted and Toasted Smores", price: 0.54 },
	{name: "Marshall Marshmallow", price: 0.75 },
	{name: "Mohamed KitKat", price: 0.95},
	{name: "Pierre Douce Chocolate", price: 0.21 },
	{name: "Jaskar Jujubes", price: 30.31},
	{name: "Toti's Chocotruffle", price: 0.75},
	{name: "Yuka's Peppermint Patties", price: 0.12 },
	{name: "Eric Kim's Kimchee", price: 0.01},
	{name: "Pam's Pineapple", price: 0.45 },
	{name: "Pan's Pancakes", price: 0.71},
	{name: "Dennis's DubbleBubble", price: 0.25 },
	{name: "Jaden's Jawbreakers", price: 0.23 },
	{name: "Bobby's Frozen Bananas", price: 3.00 },
	{name: "Joy's Soy Candy", price: 0.99 },
	{name: "Steph's Sour Patch Kids", price: 0.43 },
	{name: "Hayleys Honey", price: 0.85},
	{name: "Smither's Chocolate Smothered Cashews", price: 0.65},
	];

	
/////////////////////////////////////////////////
	// Populate the menu with Pieces of Candy
	var menu = $("#menu");
	var makeMenu = function(){
		candy.forEach(function(pieceOfCandy){
	    var menuItemDiv = $("<button>").attr("id", "menuItem");
			menuItemDiv.append(pieceOfCandy.name + "\n" + "$"+ pieceOfCandy.price);
			menu.append(menuItemDiv);
		})
	};
	makeMenu();
/////////////////////////////////////////////////
	// on the click of New order, 
	// prompt the cashier to enter a name.
	// append that name to a variable
	// with an empty array []
	var newOrderButton = $("#newOrderButton");
	var newOrderUL = $("#newOrderUL")
	var newOrderArray = [];

	newOrderButton.on("click", function(event){
		event.preventDefault()
		var newOrderLI = $("<button>").attr("id", "newOrderLI")
		var customerName = prompt("What name would you like under your order?");
		newOrderLI.append(customerName)
		newOrderUL.append(newOrderLI)
	})

/////////////////////////////////////////////////
	// PAY BUTTON FUNCTION 
	// var payButton = $("#payButton")

	// payButton.on("click", function(){
	// 	var cashOrCredit= prompt("Would you like to pay cash or credit?")
	// 	if(cashOrCredit === "credit"){
	// 		alert("Sorry, Cash only")
	// 	}
	// })

});//END OF jQUERY







