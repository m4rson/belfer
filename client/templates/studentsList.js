Template.studentsList.helpers({
	group: function(){
		return Groups.findOne({_id: Session.get('groupId')});
	},

    students : function(){
		return Students.find({groupId:Session.get('groupId')});
	},

	editStudent : function(){
		return Session.get('editStudent');
	}
});


Template.studentsList.events({
	'click .addNewStudent' : function(){
		var firstName = $('.fName').val();
		var lastName = $('.lName').val();

		if(firstName === '' || lastName === '')
		{
			alert('Student must have first and last name');
		}
		else
		{
			Students.insert({
				groupId : Session.get('groupId'),
				firstName : firstName,
				lastName : lastName,
				added : new Date()
			});
			$('.lName').val('');
			$('.fName').val('');
		}
	},

	'click .btn-danger' : function(){
		if(confirm('Are you sure?'))
		{
			Students.remove(this._id);
		}
	},

	'dblclick .studentLastName' : function(){
		Session.set('editStudent', true);
		
	},

	'keyup .studentLastName' :function(evt){
		if(evt.which === 13)
		{
            var lastName = $('.editStudentlName').val();

            if(lastName === '')
            {
            	alert('This field cannot be empty');
            }
            else
            {
            	Students.update(this._id,{
            		lastName: lastName
            	});
            	Session.set('editStudent', false);
            }
		}
	},

	'click .showStudent' :function(){
	    Router.go('students/:_id');
	},

	'click .addStudentSubject' : function(){
		Session.set('studentId', this._id);
	}
});

