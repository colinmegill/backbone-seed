var path = require("path"),
    express = require("express");

var app = express()
            .use(express.static(__dirname, 
                                path.join(__dirname, "bower_components"),
                                path.join(__dirname, "js")));



var ingredients = [

	{name: "ground turkey", category: "meat", store: "PCC", eater: "all", season: "1234"},
	{name: "apples", category: "fruit", store: "PCC", eater: "all", season: "134"},
	{name: "darigold 4% cottage cheese", category: "dairy", store: "QFC", eater: "all", season: "1234"},
	{name: "medium tillimook cheddar (baby loaf)", category: "dairy", store: "QFC", eater: "all", season: "1234"},
	{name: "loose leaf spinach", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{name: "gluten free tortillas", category: "grain", store: "PCC", eater: "colin", season: "1234"},
	{name: "oats", category: "bulk", store: "either", eater: "all", season: "1234"},
	{name: "almond milk", category: "beverage", store: "either", eater: "all", season: "1234"},
	{name: "oat milk", category: "beverage", store: "either", eater: "all", season: "1234"},
	{name: "cheddar bunnies (annies)", category: "snack", store: "QFC", eater: "dante", season: "1234"},
	{name: "pork loin", category: "meat", store: "Bill the Butcher", eater: "all", season: "1234"},
	{name: "olive oil", category: "bulk", store: "PCC", eater: "all", season: "1234"},
	{name: "m&ms", category: "snack", store: "QFC", eater: "christie", season: "1234"},
	{name: "yellow onions", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{name: "eggs", category: "bulk", store: "PCC", eater: "all", season: "1234"},
	{name: "bananas", category: "fruit", store: "PCC", eater: "dante", season: "1234"},
	{name: "whole wheat pasta", category: "grain", store: "PCC", eater: "all", season: "1234"},
	{name: "mochi", category: "grain", store: "PCC", eater: "colin", season: "1234"},
	{name: "butternut squash", category: "vegetable", store: "PCC", eater: "all", season: "34"},
	{name: "acorn squash", category: "vegetable", store: "PCC", eater: "all", season: "34"},
	{name: "blueberries", category: "fruit", store: "PCC", eater: "all", season: "1234"},
	{name: "strawberries", category: "fruit", store: "PCC", eater: "all", season: "1234"},
	{name: "figs", category: "fruit", store: "PCC", eater: "all", season: "1234"},
	{name: "oranges", category: "fruit", store: "PCC", eater: "colin", season: "1234"},
	{name: "grapefruit", category: "fruit", store: "PCC", eater: "colin", season: "1234"},
	{name: "cabbage", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{name: "saurkraut", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{name: "fingerling potatoes", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{name: "red potatoes", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{name: "yukon gold potatoes", category: "vegetable", store: "PCC", eater: "all", season: "1234"},
	{name: "chicken sausage", category: "meat", store: "PCC", eater: "all", season: "1234"},
	{name: "pork sausage", category: "meat", store: "PCC", eater: "all", season: "1234"},
	{name: "shitaake", category: "mushrooms", store: "PCC", eater: "all", season: "1234"},
	{name: "portobello", category: "mushrooms", store: "PCC", eater: "all", season: "1234"},
	{name: "chantrelle", category: "mushrooms", store: "PCC", eater: "all", season: "1234"},
	{name: "white button mushrooms", category: "mushrooms", store: "PCC", eater: "all", season: "1234"},
	{name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{name: "", category: "", store: "PCC", eater: "all", season: "1234"},
	{name: "", category: "", store: "PCC", eater: "all", season: "1234"},


]


app.get("/", function(req, res) {
    res.send("Hello, Christie!");
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Started server on port " + port);