Expandergroups = new Mongo.Collection("expandergroups")

if (Meteor.isClient) {
  
  Template.body.helpers({
    expandergroups: function () {
      return Expandergroups.find ({}, {sort: {text: 1}});
    }
  });

  Template.body.events({
    "submit .new-expandergroup": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
 
      // Insert a task into the collection
      Expandergroups.insert({
        text: text,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
