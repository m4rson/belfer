Template.ratings.helpers({
	subject : function(){
		return Subjects.findOne({_id: Session.get('subjectId') });
	},

	ratings : function(){
		return Ratings.find({subjectId : Session.get('subjectId')});
	},

	// ratss : function(){
	// 	return Ratings.find({subjectId : Session.get('subjectId'), studentId : this._id})

	// 	for(var i in rats){
	// 		var values = rats[i];
	// 	}

	// 	for(var key in values){
	// 		return ratings[key];
	// 	}
	// },

	//count : function(){
	    //var count = Ratings.find({subjectId : Session.get('subjectId')}).count();
	    //return count;
	//},

	//average : function(){
		//var num;
		//var count = Ratings.find({subjectId : Session.get('subjectId')}).count();

	//}

	categories : function(){
		return Categories.find({user_id : Meteor.userId()});
	},

	editRating : function(){
		return Session.get('editRating');
	}


});

Template.ratings.events({
	'click .addNewRating' : function(){
		var category = $('.rCategory').val();
		var value = $('.chooseRating').val();
		var description = $('.ratingDesc').val();

			if(value === '' || category === '')
			{
				alert('Rating cannot be empty!');
			}
			else{
			Ratings.insert({
				studentId : this._id,
				subjectId : Session.get('subjectId'),
				category : category,
				value : value,
				description : description,
				added : new Date()
			});
			$('.rCategory').val('');
			$('.chooseRating').val('');
            $('.ratingDesc').val('');  
		}
	},

	'click .updateRating': function(){
        Session.set('editRating', true);
	},

	'keyup .editRating' : function(evt){
		if(evt.which === 13)
		{
			var category = $('.edit-rating-category').val();
		    var value = $('.edit-rating-value').val();
		    var description = $('.edit-rating-description').val();

		    if(value === '' || category === '')
		    {
		    	alert('Please fill in required fields');
		    }
		    else
		    {
		    	Ratings.update(this._id, {
		    		studentId : this._id,
				    subjectId : Session.get('subjectId'),
		    		category : category,
		    		value : value,
		    		description : description
		    	});
		    	Session.set('editRating', false);
		    }
		}
	},

	'click .cancelEditRating': function(){
		Session.set('editRating', false);
	},

	'click .deleteRating' :function(){
		if(confirm('Are you sure?'))
		{
			Ratings.remove(this._id);
		}
	}
});
