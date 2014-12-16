// Router.route('/', function () {
//   // render the Home template with a custom data context
//   this.render('Home', {data: {title: 'My Title'}});
// });

// when you navigate to "/home" automatically render the template named "home".
Router.route('/', function () {
  if (Meteor.user()) { 
    this.render('activities');
  } else {
    this.render('loginMessage');
  }
});
Router.route('/home', function () {
  if (Meteor.user()) { 
    this.render('activities');
  } else {
    this.render('loginMessage');
  }
});
Router.route('/activity', function () {
  if (Meteor.user()) { 
    this.render('activity');
  } else {
    this.render('loginMessage');
  }
});
Router.route('/activities', function () {
  if (Meteor.user()) { 
    this.render('activities');
  } else {
    this.render('loginMessage');
  }
});
Router.route('/details', function () {
  if (Meteor.user()) { 
    this.render('details');
  } else {
    this.render('loginMessage');
  }
});
Router.route('/profile', function () {
  if (Meteor.user()) { 
    this.render('profile');
  } else {
    this.render('loginMessage');
  }
});