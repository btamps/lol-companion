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
  // allChamps list
  // should be working: https://github.com/meteor/meteor/blob/devel/packages/spacebars/README.md#each
  allChamps: function () {
    // turn object into array for template to consume
    var result =  [];
    Meteor.call('getChamps', function (err, results) {

      for (var key in results.data.data) {
        result.push( { name: key, data: results.data.data[key] } );
      }
          // console shows proper array of objects with data
          console.log(result);
    });

    // console shows outside of Meteor call
    console.log(result);

    var test = [{name: 'monday', data: 'day'},{name: 'tuesday', data: 'day'},{name: 'wednesday', data: 'day'}]
    return test;
  },

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
