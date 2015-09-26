Template.subjects.events({
	'click .subjectName' : function(){
        Session.set('subjectId', this._id);
	},

	'click .addNewSubject' :function(){
		var name = $('.newSubject').val();

		if(name === '')
		{
			alert('Subject name cannot be empty!');
		}
		else
		{
			Subjects.insert({
				studentId: this._id,
				name : name,
				added : new Date()
			});

			$('.newSubject').val('');
		}
	},

	'click .deleteSubject' : function(){
		if(confirm('Are you sure you want to delete this subject?'))
		{
			Subjects.remove(this._id);
		}
	}
});

Template.subjects.helpers({
	studentSubjects : function(){
		return Subjects.find({studentId: this._id});
	},

	student : function(){
		return Students.findOne({_id: Session.get('studentId')});
	}

})