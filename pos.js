jQuery(function(){
	var candy = [
	{name: "Calvin's Crack Candy Cane", price: 13337},
	{name: "Meiji's Melt In Your Mouth Marsmallows", price: 25 },
	{name: "Josh's JellyBeans", price: 55 },
	{name: "Harrison's Trixies Treats", price: 10.00 },
	{name: "Brian's Schweddy Balls", price: 99 },
	{name: "Ed's Edibles", price: 5},
	{name: "Zoe's Zesty Zucchini", price: 8 },
	{name: "Jacob Juicy", price: 23 },
	{name: "Raquel's Roasted and Toasted Smores", price: 54 },
	{name: "Marshall Marshmallow", price: 75 },
	{name: "Mohamed KitKat", price: 95},
	{name: "Pierre Douce Chocolate", price: 21 },
	{name: "Jaskar Jujubes", price: 31},
	{name: "Toti's Chocotruffle", price: 75},
	{name: "Yuka's Peppermint Patties", price: 12 },
	{name: "Eric's altoid-shaped questionable orange tablet candy", price: 1},
	{name: "Pam's Pineapple", price: 45 },
	{name: "Pan's Pancakes", price: 71},
	{name: "Dennis's DubbleBubble", price: 25 },
	{name: "Jaden's Jawbreakers", price: 23 },
	{name: "Bobby's Frozen Bananas", price: 30 },
	{name: "Joy's Soy Candy", price: 99 },
	{name: "Steph's Sour Patch Kids", price: 43 },
	{name: "Jennifers Blue Sesame Pop", price: 85},
	{name: "Smither's Chocolate Smothered Cashews", price: 65},
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
	var orderToBePopulated;
	//creates the buttons for each order
	newOrderButton.on("click", function(event){
		event.preventDefault();
		var customerName = prompt("What name would you like under your order?");
		orderArray.push({customerName:customerName, items:[]});
		var newOrderLI = $("<button>", {class: "newOrderLI", id: orderArray.length -1});
		orderToBePopulated = orderArray[orderArray.length -1].items
		//appending
		newOrderLI.append(customerName);
		newOrderUL.append(newOrderLI);
		console.log(orderArray);


		//clicking the openOrders
		newOrderLI.on("click",function(event){
			var id = $(event.currentTarget).attr("id");
			console.log(orderArray[id].items)
			orderToBePopulated = orderArray[id].items
			showOrder();
			});

		});

		$(".menuItem").on("click", function(event){
			event.preventDefault();
			var id = $(event.currentTarget).attr("id");
			orderToBePopulated.push(candy[id])
			console.log(candy[id]);
			showOrder();

		})

		var payButton = $("#payButton");



		var showOrder = function(){
				var receiptUL = $("#receipt");
				var subtotal = $("#subtotal");
				var tax = $("#tax");
				var total = $("#total");

				receiptUL.empty();
				var sum = 0;
				var timesTax = 0.08875;

				orderToBePopulated.forEach(function(element){
				var receiptLI = $("<li>").attr("class", "receiptItem");
				receiptLI.append(element.name +" "+element.price);
				receiptUL.append(receiptLI);
				sum += element.price

			});
				subtotal.val(sum)
				tax.val(Math.round((sum * timesTax)*100)/100)
				total.val(Math.round((sum + (sum * timesTax))*100)/100 )

				payButton.on("click", function(event){
					event.preventDefault()
					var getMoney = prompt("How much you got?");
					alert("your change is " + parseInt(getMoney) - total.val())
				})
		};
});//END OF jQUERY


