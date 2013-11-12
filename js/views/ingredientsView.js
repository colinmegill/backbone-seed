epicurian.IngredientsView = Backbone.View.extend({
	tagName: "div",
  className: "ingredient",
  //template: _.template('<h3> <%= name %></h3> <li> <%= category %> </li> <li> <%= store %> </li> <li> <%= category %> </li>'),
  render: function(){
    //var attributes = this.model.toJSON();
    //this.$el.html(this.template(attributes))
    this.$el.html('<h3>' + this.model.get('name') + '</h3>');
 	}
})