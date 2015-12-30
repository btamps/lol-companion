/*****************************************************************************/
/* ChampionsList: Event Handlers */
/*****************************************************************************/
Template.ChampionsList.events({
});

/*****************************************************************************/
/* ChampionsList: Helpers */
/*****************************************************************************/
Template.ChampionsList.helpers({
  champions: function () {
    Meteor.call('getChamps');
    return Champions.find();
  }
});

/*****************************************************************************/
/* ChampionsList: Lifecycle Hooks */
/*****************************************************************************/
Template.ChampionsList.onCreated(function () {
});

Template.ChampionsList.onRendered(function () {
});

Template.ChampionsList.onDestroyed(function () {
});
