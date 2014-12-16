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
        var imageLink = Meteor.user().services.google.picture;

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
        });

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
    }
});
