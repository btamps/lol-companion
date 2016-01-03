


Meteor.publish('champions', function () {
  return Champions.find();
});

Meteor.publish('summoners', function () {
  return Summoners.find();
});

Meteor.publish('games', function () {
  return Games.find();
});
