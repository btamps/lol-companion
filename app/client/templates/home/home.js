/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Session.set('champ', 'Ezreal');
Template.Home.events({
  'change .champs': function (e, tmpl) {
    Session.set('champ', tmpl.find('.champs').value);
  }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  selectedChamp: function () {
    var champ = Session.get('champ');
    Meteor.call('getChamps', champ, function (err, results) {
      Session.set('championTitle', JSON.parse(results.content).data[champ].title);
    });
    return (champ + ' is ' + Session.get('championTitle'));
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
