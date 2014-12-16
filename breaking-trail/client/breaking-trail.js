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
        console.log(creator + " " + imageLink);
        Events.insert({
            activity: $( "#activity-type option:selected" ).text(),
            date: $('#activity-date').val(),
            details: $("#activity-details").val(),
            duration: $('#activity-duration').val(),
            name: $("#activity-name").val(),
            skillLevel: $(".skill-level-btns-wrap input[type=radio]:checked").attr("value"),
            time: $( "#activity-time option:selected" ).text(),
            creator: {name: creator, image: imageLink},
            users: [
                // name: creator, image: imageLink
            ]
        });

        return false;
    }
});

Template.activities.events({
    'click #join-event-btn': function() {
        console.log(this._id);
        var myName = Meteor.user().profile.name;
        var myImage = Meteor.user().services.google.picture;
        var myUsers = this.users;
        // var existin
        Events.update({
            _id: this._id,
            users: myUsers.push({name: myName, image: myImage})
        });
        // get the id 
        // add to the events collection
    }
});
