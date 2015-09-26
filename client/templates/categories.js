Template.categories.events({
	'click .addNewCategory' : function(){
		var name = $('.newCategory').val();

		if(name === '')
		{
			alert('Category name cannot be empty!');
		}
		else
		{
			Categories.insert({
				user_id : Meteor.userId(),
				name : name,
				added : new Date()
			});
			$('.newCategory').val('');
		}
	},

	'click .deleteCategory' : function(){
		if(confirm('Are you sure?'))
		{
			Categories.remove(this._id);
		}
	}
});

Template.categories.helpers({
	categories : function(){
		return Categories.find({user_id : Meteor.userId()});
	}
})