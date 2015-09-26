Template.login.events({
	'click .loginSubmit' : function(){
		var username = $('.loginUsername').val();
		var password = $('.loginPassword').val();

		if(username === '' || password === '')
		{
			alert('Please fill in all fields properly');
		}
		else
		{
			Meteor.loginWithPassword(username, password, function(){
				Router.go('students');
			});
			$('.loginUsername').val('');
			$('.loginPassword').val('');
		}
	}
});