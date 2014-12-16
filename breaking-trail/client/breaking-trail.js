var BT = {};
Handlebars.registerHelper("eventId", function() {
   blah = Session.get('blah');
   // code to do stuff with blah
   return blah;
});

Template.activities.helpers({
    activities: function() {
        return Events.find({});
    }
});

Template.details.helpers({
    details: function( ) {
        return Events.findOne(BT.detailsEventId);
    }
});

Template.activity.rendered=function() {
    $('#activity-date').datepicker();
};

Template.activity.events({
    'click #create-event-btn': function() {
        var creator = Meteor.user().profile.name;
        var imageLink = Meteor.user().services.google.picture;
        var insertResult = function(error, id) {
            BT.newEvent = id;
            BT.sortMethod = "newEvent";
        };
        Events.insert({
            activity: $( "#activity-type option:selected" ).text(),
            date: $('#activity-date').val(),
            details: $("#activity-details").val(),
            duration: $('#activity-duration').val(),
            name: $("#activity-name").val(),
            skillLevel: $(".skill-level-btns-wrap input[type=radio]:checked").attr("value"),
            time: $( "#activity-time option:selected" ).text(),
            creator: {name: creator, image: imageLink},
            users: []
        }, insertResult);

        return false;
    }
});

Template.activities.events({
    'click #join-event-btn': function() {
        var name = Meteor.user().profile.name;
        var imageLink = Meteor.user().services.google.picture;
        var newUser = this.users;
        newUser.push({name: name, image: imageLink});

        Events.update(
            {_id: this._id},
            { $set:
                { "users": newUser }
            }
        );
    },

    'click #show-event-btn': function(e) {
        var temp = $(e.currentTarget).closest(".single-activity").data("id");
        // console.log(temp);
        // Session.set(eventId, temp)
        BT.detailsEventId = temp;
        Router.go('details');    
    }
});