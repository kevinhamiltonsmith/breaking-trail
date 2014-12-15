Template.activities.helpers({
    activities: function() {
        return Events.find({});
    }
});

Template.activity.events({
    'click #create-event-btn': function() {
        Events.insert({
            activity: $( "#activity-type option:selected" ).text(),
            details: $("#activity-details").val(),
            name: $("#activity-name").val(),
            skillLevel: $(".skill-level-btns-wrap input[type=radio]:checked").attr("value")
        });

        return false;
    }
});
