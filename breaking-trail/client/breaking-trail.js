// counter starts at 0
Session.setDefault("counter", 0);

Template.activities.helpers({
    counter: function () {
        return Session.get("counter");
    }
});

Template.activities.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set("counter", Session.get("counter") + 1);
    }
});

Template.body.helpers({
    tasks: function () {
        return Tasks.find({});
    }
});
