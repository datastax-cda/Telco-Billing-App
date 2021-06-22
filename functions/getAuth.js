const { createClient } = require("@astrajs/rest");
const { ContactsOutlined } = require("@material-ui/icons");

exports.handler = async function(event,context) {
  const username = event.queryStringParameters.username;
  // create an {astra_db} client
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  // collections are created automatically
  // const accountCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("accountinfo");
  const basePath = `/api/rest/v2/keyspaces/${process.env.ASTRA_DB_KEYSPACE}/login`

  try{
    // const result = await accountCollection.find()
    const {data,status} = await astraClient.get(`${basePath}/${username}`);
    return {
      statusCode: status,
      body: JSON.stringify(data[0].account),
    };
  } catch(e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(false),
    }
  }

  
}