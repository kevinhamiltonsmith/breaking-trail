window.BT = {};

Template.activities.helpers({
    activities: function() {
        if (BT.newEvent) {
            return Events.find({}, {sort: [["createdDate", "desc"], ["date", "asc"]]});
        } else {
            return Events.find({}, {sort: [["dateUnix", "asc"], ["time", "desc"]]});
        }
    }
});

Template.activities.rendered = function() {
    if (BT.newEvent) {
        var $newEvent = $('.single-activity[data-id="' + BT.newEvent + '"]');
        window.setTimeout(function() {
            $newEvent.css('background', '#39c');
        }, 200);
        window.setTimeout(function() {
            $newEvent.css('background', '#fff');
        }, 1200);
        BT.newEvent = null;
    }
};

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
        var creator = Meteor.user().profile.name,
            imageLink = Meteor.user().services.google.picture,
            points = Math.floor(Math.random() * (8 - 2)) + 2;
        
        var insertResult = function(error, id) {
            BT.newEvent = id;
            Router.go('activities');
        };

        Events.insert({
            activity: $( "#activity-type option:selected" ).text(),
            createdDate: Date.now(),
            date: $('#activity-date').val(),
            dateUnix: new Date($('#activity-date').val()).getTime() / 1000,
            details: $("#activity-details").val(),
            duration: $('#activity-duration').val(),
            name: $("#activity-name").val(),
            location: $("#activity-location").val(),
            latlng: $("#latlng").val(),
            skillLevel: $(".skill-level-btns-wrap input[type=radio]:checked").attr("value"),
            time: $( "#activity-time option:selected" ).text(),
            points: points,
            creator: {name: creator, image: imageLink},
            users: [],
            gearItems: [{imageLink: "images/"+points+".jpg", bcLink: "http://www.backcountry.com/"}, {imageLink: "images/"+(points+1)+".jpg", bcLink: "http://www.backcountry.com/"}, {imageLink: "images/"+(points-1)+".jpg", bcLink: "http://www.backcountry.com/"}]
        }, insertResult);

        return false;
    }
});

Template.activities.events({
    'click #join-event-btn': function() {
        var name = Meteor.user().profile.name,
            imageLink = Meteor.user().services.google.picture,
            newUser = this.users;

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
        BT.detailsEventId = temp;
        Router.go('details');
    }
});

Template.details.events({
    'click #join-event-btn': function() {
        var name = Meteor.user().profile.name,
            imageLink = Meteor.user().services.google.picture,
            newUser = this.users;

        newUser.push({name: name, image: imageLink});

        Events.update(
            {_id: this._id},
            { $set:
                { "users": newUser }
            }
        );
    },
    'click #back-event-btn': function() {
        Router.go('activities');
    }
});
