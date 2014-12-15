Template.activities.helpers({
    activities: function() {
        return Events.find({});
    }
});

Template.activity.rendered=function() {
    $('#activity-date').datepicker();
};

Template.activity.events({
    'click #create-event-btn': function() {
        var creator = Meteor.user().profile.name;

        Events.insert({
            activity: $( "#activity-type option:selected" ).text(),
            date: $('#activity-date').val(),
            details: $("#activity-details").val(),
            duration: $('#activity-duration').val(),
            name: $("#activity-name").val(),
            skillLevel: $(".skill-level-btns-wrap input[type=radio]:checked").attr("value"),
            time: $( "#activity-time option:selected" ).text(),
            users: [{
                name: creator
            }]
        });

        return false;
    }
});

// Router.route('/homexxx', function () {
//   // render the Home template with a custom data context
//   this.render('home', {data: {title: 'My Title'}});
// });

// // when you navigate to "/one" automatically render the template named "One".
// Router.route('/one');

// // when you navigate to "/two" automatically render the template named "Two".
// Router.route('/two');
