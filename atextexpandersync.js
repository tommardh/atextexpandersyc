Expandergroups = new Mongo.Collection("expandergroups")

if (Meteor.isClient) {
  
  Session.setDefault('counter', 0);

  Template.body.helpers({
    expandergroups: function () {
      return Expandergroups.find ({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
