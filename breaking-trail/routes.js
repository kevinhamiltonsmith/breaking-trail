Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('Home', {data: {title: 'My Title'}});
});

// when you navigate to "/home" automatically render the template named "home".
Router.route('/', function () {
   this.render('activities');
});
Router.route('/home');
Router.route('/activity');
Router.route('/activities');


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