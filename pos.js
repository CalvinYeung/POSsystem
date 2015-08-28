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
	{name: "Eric's altoid-shaped questionable orange tablet candy", price: 0.01},
	{name: "Pam's Pineapple", price: 0.45 },
	{name: "Pan's Pancakes", price: 0.71},
	{name: "Dennis's DubbleBubble", price: 0.25 },
	{name: "Jaden's Jawbreakers", price: 0.23 },
	{name: "Bobby's Frozen Bananas", price: 3.00 },
	{name: "Joy's Soy Candy", price: 0.99 },
	{name: "Steph's Sour Patch Kids", price: 0.43 },
	{name: "Jennifers Blue Sesame Pop", price: 0.85},
	{name: "Smither's Chocolate Smothered Cashews", price: 0.65},
	];

	
/////////////////////////////////////////////////
	// Populate the menu with Pieces of Candy
	var menu = $("#menu");
	var orderArray = [];

	var makeMenu = function(){
		candy.forEach(function(pieceOfCandy, index){
	    var menuItemDiv = $("<button>", {id: index, class: "menuItem"});
	    
		menuItemDiv.append(pieceOfCandy.name + "\n" + "$"+ pieceOfCandy.price);
		menu.append(menuItemDiv);
		})
	};

	makeMenu();
/////////////////////////////////////////////////
	
	var newOrderButton = $("#newOrderButton");
	var newOrderUL = $("#newOrderUL");

	//creates the buttons for each order
	newOrderButton.on("click", function(event){
		event.preventDefault();
		var customerName = prompt("What name would you like under your order?");
		orderArray.push({name:customerName});
		var newOrderLI = $("<button>", {class: "newOrderLI", id: orderArray.length -1});

		//appending
		newOrderLI.append(customerName);
		newOrderUL.append(newOrderLI);
		console.log(orderArray);

		//opens the order object
	 	$("#newOrderUL > .newOrderLI ").on("click",function(event){
			 var id = $(event.currentTarget).attr("id");
			 console.log(orderArray[id].name);
			});
	});

	$(".menuItem").on("click", function(event){
		event.preventDefault();
		var receiptUL = $("#receipt");
		var id = $(event.currentTarget).attr("id");
		console.log(candy[id]);

		var receiptLI = $("<li>").attr("class", "receiptItem");
		receiptLI.append(candy[id].name +" "+candy[id].price);
		receiptUL.append(receiptLI);
	})

	 




});//END OF jQUERY


