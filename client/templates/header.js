Template.header.events({
	'click .logoutButton' : function(){
		if(confirm('Are you sure you want to log out?'))
		{
		  Meteor.logout();
		  Router.go('/');
		}
	}
});