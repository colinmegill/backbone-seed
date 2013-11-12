epicurian.Router = Backbone.Router.extend({
    routes: {
        "hello": "hello",
        "ingredients": "ingredients"
    },

    hello: function() {
        console.log("hello() was hit. sanity check.");
    },

    ingredients: function(id) {
        console.log("ingredients() was hit.");
 
        epicurian.ingredients = new epicurian.Ingredients();
        epicurian.ingredients.fetch({
            success: function(){
                epicurian.ingredients3 = epicurian.ingredients.get(3)
                epicurian.ingredientsView3 = new epicurian.IngredientsView({
                    model: epicurian.ingredients3
                })
            }
        });

        console.log(epicurian.ingredients.get(3))
        console.log(epicurian.ingredients.get(5))
        console.log(epicurian.ingredients.get(7))

        

        //epicurian.ingredientsView3.render();
    }
});

epicurian.router = new epicurian.Router();
Backbone.history.start({root: "/"});