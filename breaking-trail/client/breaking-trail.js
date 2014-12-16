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
        //Meteor.user().services.google.picture to get 
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
    },

    'click #join-event-btn': function() {
        console.log(this);
        console.log("im here");
        console.log(this);
        // get the id 
        // add to the events collection
    }
});
