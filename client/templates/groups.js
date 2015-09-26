Template.groups.events({

	'click .addNewGroup' :function(){
		var name = $('.groupName').val();
		if(name === '')
		{
			alert('Type a group name');
		}else{
			Groups.insert({
				user_id: Meteor.userId(),
				name : name,
				added : new Date()
			});
			$('.groupName').val('');
		}
	},

	'click .btn-danger' : function(){
		if(confirm('Are you sure?'))
		{
			Groups.remove(this._id);
		}
	},

	'click .groupNameList' : function(){
		Session.set('groupId', this._id);
	}


});

Template.groups.helpers({
	currentUserGroups : function(){
		return Groups.find({user_id: Meteor.userId()});
	},

	studentsNumber : function(){
		return Students.find({groupId: this._id}).count();
	}
})