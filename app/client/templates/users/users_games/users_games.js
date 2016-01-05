/*****************************************************************************/
/* UsersGames: Event Handlers */
/*****************************************************************************/
Template.UsersGames.events({
});

/*****************************************************************************/
/* UsersGames: Helpers */
/*****************************************************************************/
Template.UsersGames.helpers({
  games: function () {
    Meteor.call('getRecentGames');
    return Games.find();
  },
  xchampionImageUrl: function () {
    var champs = [];
    champs.push();
    return Champions.find({ id: '74' }, {fields: {
      'imageUrl': 1,
      'id': 1,
      'name': 1
    }});
  }
});

/*****************************************************************************/
/* UsersGames: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersGames.onCreated(function () {
});

Template.UsersGames.onRendered(function () {
});

Template.UsersGames.onDestroyed(function () {
});
