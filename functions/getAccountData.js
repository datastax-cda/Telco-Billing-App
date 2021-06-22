const { createClient } = require("@astrajs/collections");
const { ContactsOutlined } = require("@material-ui/icons");

exports.handler = async function(event,context) {

  const account = event.queryStringParameters.account;

  // create an {astra_db} client
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  // collections are created automatically
  const accountCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("accountinfo");

  try{
    // const result = await accountCollection.find()
    const result = await accountCollection.get(account)
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch(e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }

  
}