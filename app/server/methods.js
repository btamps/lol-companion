/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  getChamps: function() {
        // Get champions from Riot server
        HTTP.get('http://ddragon.leagueoflegends.com/cdn/5.24.2/data/en_US/champion.json', function(error, riotResponse) {
            var champs = [];
            var entries = riotResponse.data.data;
            var sort = 0;
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
    }
});
