// counter starts at 0
Session.setDefault("counter", 0);

Template.activities.helpers({
    count: function () {
        return Clicks.find({});
    }
});

Template.activities.events({
    'click #clickButton': function () {
        // increment the counter when button is clicked
        var currentCount = Session.get('counter') + 1;
        Session.set('counter', currentCount);

        Clicks.insert({
            clickCount: currentCount
        });
    }
});
