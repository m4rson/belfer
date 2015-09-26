Router.configure({
	layoutTemplate : 'ApplicationLayout'
});

Router.route('/', function(){
	this.render('home');
});

Router.route('register');
Router.route('login');

Router.route('students', function(){
	if(Meteor.userId()){
		this.render('students');
	}
	else
	{
		Router.go('login');
	}
});

Router.route('categories', function(){
	if(Meteor.userId())
	{
		this.render('categories');
	}
	else
	{
		Router.go('login');
	}
});

Router.route('students/:lastName',function(){
   if(Meteor.userId())
   {
   	  	this.render('student', {
		data: function(){
			return Students.findOne({lastName: this.params.lastName});
		}
	});
   }
   else
   {
   	 Router.go('login');
   }
});