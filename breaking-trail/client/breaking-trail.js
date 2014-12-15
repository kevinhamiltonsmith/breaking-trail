// counter starts at 0
Session.setDefault("counter", 0);

Template.activities.helpers({
    counter: function () {
        return Clicks.get("counter");
    }
});

Template.activities.events({
    'click clickButton': function () {
        // increment the counter when button is clicked
        console.log("pushed");
        CLicks.insert({
            clickCount: "2"
        });
        // Clicks.set("counter", Session.get("counter") + 1);
    }
});

Template.body.helpers({
    tasks: function () {
        return Tasks.find({});
    }
});
