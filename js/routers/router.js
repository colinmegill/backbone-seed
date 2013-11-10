APP.Router = Backbone.Router.extend({
    routes: {
        "first": "firstRoute",
        "second": "secondRoute"
    },

    firstRoute: function() {
        console.log("firstRoute() was hit.");
        APP.usersCollection = new APP.Users();
        APP.usersCollection.create({name:"colin", phone:"555-555-5555"});
        APP.usersCollection.create({name:"dan", address:"seattle"});
    },

    secondRoute: function() {
        console.log("secondRoute() was hit.");
    }
});

APP.router = new APP.Router();
Backbone.history.start({root: "/"});