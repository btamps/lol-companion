/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  getChamps: function() {
    // Get champions from Riot server
    HTTP.get('http://ddragon.leagueoflegends.com/cdn/5.24.2/data/en_US/champion.json', function(error, riotResponse) {
      var champs = [];
      var entries = riotResponse.data.data;
      _.each(entries, function(entry) {
        var champ = {};
        champ.id = entry.key;
        champ.name = entry.name;
        champ.title = entry.title;
        champ.blurb = entry.blurb;
        champ.imageUrl = "http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/" + entry.image.full;
        champ.tags = entry.tags[0];

        // Add champ to list
        champs.push(champ);
      }, this);

      // Delete all existing champions from database
      Champions.find().forEach(function(champ) {
        Champions.remove(champ._id);
      });

      // Insert new champions from array into database
      _.each(champs, function(champ) {
        Champions.upsert(champ._id, champ);
      }, this);
    });
  },

  summoner: function () {
    // Summeron ID
    //var summonerId = Session.set('summonerId', '50899122');

    // Get champions from Riot server
    HTTP.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/50899122?api_key=e29194e0-9998-440f-bf4f-ae7dca4fadb5', function(error, riotResponse) {
      var summoners = [];
      var entries = riotResponse.data;
      _.each(entries, function(entry) {
        var summoner = {};
        summoner.userId = Meteor.userId();
        summoner.id = entry.id;
        summoner.name = entry.name;
        summoner.level = entry.summonerLevel;
        summoner.profileIconUrl = "http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/" + entry.profileIconId + ".png";
        summoner.revisionDate = moment(entry.revisionDate).fromNow();

        // Add champ to list
        summoners.push(summoner);
      }, this);

      // Delete all existing champions from database
      Summoners.find().forEach(function(summoner) {
        Summoners.remove(summoner._id);
      });

      // Insert new champions from array into database
      _.each(summoners, function(summoner) {
        Summoners.upsert(summoner._id, summoner);
      }, this);
    });
  }
});
