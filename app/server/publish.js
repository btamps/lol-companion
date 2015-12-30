


Meteor.publish('champions', function () {
  return Champions.find();
});