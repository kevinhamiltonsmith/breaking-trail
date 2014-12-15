Template.activities.helpers({
    activities: function() {
        return Events.find({});
    }
});

Template.activity.events({
    'click #create-event-btn': function() {
        Events.insert({
            activity: 'skiing',
            details: 'here are the details',
            name: 'snowbird',
            skillLevel: 'expert'
        });

        return false;
    }
});
