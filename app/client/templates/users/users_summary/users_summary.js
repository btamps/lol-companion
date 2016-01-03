/*****************************************************************************/
/* UsersSummary: Event Handlers */
/*****************************************************************************/
Template.UsersSummary.events({
});

/*****************************************************************************/
/* UsersSummary: Helpers */
/*****************************************************************************/
Template.UsersSummary.helpers({
  summonerSummary: function () {
    Meteor.call('summoner');
    return Summoners.find();
  }
});

/*****************************************************************************/
/* UsersSummary: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersSummary.onCreated(function () {
});

Template.UsersSummary.onRendered(function () {
});

Template.UsersSummary.onDestroyed(function () {
});
