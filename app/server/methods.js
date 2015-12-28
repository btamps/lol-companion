/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'getChamps': function (champ) {
    var riotKey = Meteor.settings.private.riotToken;
    var riotChamp = 'http://ddragon.leagueoflegends.com/cdn/5.24.2/data/en_US/champion.json';
    return Meteor.http.call('GET', riotChamp );
  },
  'server/method_name': function () {
    // server method logic
  }
});
