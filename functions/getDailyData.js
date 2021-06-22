const { createClient } = require("@astrajs/rest");
const { ContactsOutlined } = require("@material-ui/icons");

exports.handler = async function(event,context) {
  // create an {astra_db} client

  const account = event.queryStringParameters.account;
  console.log(account)

  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  // collections are created automatically
  // const accountCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("accountinfo");
  const basePath = `/api/rest/v2/keyspaces/${process.env.ASTRA_DB_KEYSPACE}/daily_data_usage`

  try{
    // const result = await accountCollection.find()
    const {data,status} = await astraClient.get(`${basePath}/${account}`);
    return {
      statusCode: status,
      body: JSON.stringify(data),
    };
  } catch(e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }

  
}