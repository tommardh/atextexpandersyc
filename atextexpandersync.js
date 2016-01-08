Expandergroups = new Mongo.Collection("expandergroups")

if (Meteor.isClient) {
  Template.body.helpers({
    expandergroups: function () {
      if (Session.get("hideCompleted")) {
        // If hide completed is checked, filter tasks
        return Expandergroups.find({checked: {$ne: true}}, {sort: {text: 1}});
      } else {
        // Otherwise, return all of the tasks
        return Expandergroups.find({}, {sort: {text: 1}});
      }
    },
    hideCompleted: function () {
      return Session.get("hideCompleted");
     },
    incompleteCount: function () {
      return Expandergroups.find({checked: {$ne: true}}).count();
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
    },
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  });

   Template.expandergroup.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Expandergroups.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Expandergroups.remove(this._id);
    }
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
