const { createClient } = require("@astrajs/collections");
const {createOtherClient} = require("@astrajs/rest");

exports.handler = async function(event,context) {
    // create an {astra_db} client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    const newPosition = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection('position_data');

    const astraRestClient = await createOtherClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    const newPositionAgain = astraRestClient.

}
