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
