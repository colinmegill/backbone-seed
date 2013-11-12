var path = require("path"),
    express = require("express");

var app = express()
            .use(express.static(__dirname, 
                                path.join(__dirname, "bower_components"),
                                path.join(__dirname, "js")));



var ingredients = [

	{id: "1", name: "ground turkey", category: "meat", store: "PCC", eater: "all", season: "1234"},
	{id: "2", name: "apples", category: "fruit", store: "PCC", eater: "all", season: "134"},
	{id: "3", name: "darigold 4% cottage cheese", category: "dairy", store: "QFC", eater: "all", season: "1234"},
	{id: "4", name: "medium tillimook cheddar (baby loaf)", category: "dairy", store: "QFC", eater: "all", season: "1234"},
	{id: "5", name: "loose leaf spinach", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{id: "6", name: "gluten free tortillas", category: "grain", store: "PCC", eater: "colin", season: "1234"},
	{id: "7", name: "oats", category: "bulk", store: "either", eater: "all", season: "1234"},
	{id: "8", name: "almond milk", category: "beverage", store: "either", eater: "all", season: "1234"},
	{id: "9", name: "oat milk", category: "beverage", store: "either", eater: "all", season: "1234"},
	{id: "10", name: "cheddar bunnies (annies)", category: "snack", store: "QFC", eater: "dante", season: "1234"},
	{id: "11", name: "pork loin", category: "meat", store: "Bill the Butcher", eater: "all", season: "1234"},
	{id: "12", name: "olive oil", category: "bulk", store: "PCC", eater: "all", season: "1234"},
	{id: "13", name: "m&ms", category: "snack", store: "QFC", eater: "christie", season: "1234"},
	{id: "14", name: "yellow onions", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{id: "15", name: "eggs", category: "bulk", store: "PCC", eater: "all", season: "1234"},
	{id: "16", name: "bananas", category: "fruit", store: "PCC", eater: "dante", season: "1234"},
	{id: "17", name: "whole wheat pasta", category: "grain", store: "PCC", eater: "all", season: "1234"},
	{id: "18", name: "mochi", category: "grain", store: "PCC", eater: "colin", season: "1234"},
	{id: "19", name: "butternut squash", category: "vegetable", store: "PCC", eater: "all", season: "34"},
	{id: "20", name: "acorn squash", category: "vegetable", store: "PCC", eater: "all", season: "34"},
	{id: "21", name: "blueberries", category: "fruit", store: "PCC", eater: "all", season: "1234"},
	{id: "22", name: "strawberries", category: "fruit", store: "PCC", eater: "all", season: "1234"},
	{id: "23", name: "figs", category: "fruit", store: "PCC", eater: "all", season: "1234"},
	{id: "24", name: "oranges", category: "fruit", store: "PCC", eater: "colin", season: "1234"},
	{id: "25", name: "grapefruit", category: "fruit", store: "PCC", eater: "colin", season: "1234"},
	{id: "26", name: "cabbage", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{id: "27", name: "saurkraut", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{id: "28", name: "fingerling potatoes", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{id: "29", name: "red potatoes", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{id: "30", name: "yukon gold potatoes", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{id: "31", name: "chicken sausage", category: "meat", store: "PCC", eater: "all", season: "1234"},
	{id: "32", name: "pork sausage", category: "meat", store: "PCC", eater: "all", season: "1234"},
	{id: "33", name: "shitaake", category: "mushrooms", store: "PCC", eater: "all", season: "1234"},
	{id: "34", name: "portobello", category: "mushrooms", store: "PCC", eater: "all", season: "1234"},
	{id: "35", name: "chantrelle", category: "mushrooms", store: "PCC", eater: "all", season: "1234"},
	{id: "36", name: "white button mushrooms", category: "mushrooms", store: "PCC", eater: "all", season: "1234"},
	{id: "37", name: "squeezies", category: "fruit", store: "PCC", eater: "dante", season: "1234"},
	{id: "38", name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{id: "39", name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{id: "40", name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{id: "41", name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{id: "42", name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{id: "43", name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{id: "44", name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{id: "45", name: "", category: "", store: "PCC", eater: "all", season: "1234"},

]




app.get("/hello", function(req, res) {
    res.send("Hello, Christie!");
    console.log(res)
});

app.get("/ingredients", function(req, res){
		res.json(ingredients);
		console.log(ingredients)
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log("Started server on port " + port);