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
    // details: function(id) {
    //     console.log(id)
    //     return Events.find({id});
    // }
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



// Router.route('/', function () {
//   this.render('breaking-trail');
// });

// Router.route('/activity', function () {
//   this.render('activity');
// });

// Router.route('/items/:_id', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('ShowItem', {data: item});
// });

// Router.route('/files/:filename', function () {
//   this.response.end('hi from the server\n');
// }, {where: 'server'});

// Router.route('/restful', {where: 'server'})
//   .get(function () {
//     this.response.end('get request\n');
//   })
//   .post(function () {
//     this.response.end('post request\n');
//   });