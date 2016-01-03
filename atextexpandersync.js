if (Meteor.isClient) {
  
  Session.setDefault('counter', 0);

  Template.body.helpers({
    expandergroups: [
      { text: "Evernote" },
      { text: "Autocorrect" },
      { text: "Git" }
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
