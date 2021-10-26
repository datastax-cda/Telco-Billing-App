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

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth()+1;
  const year = today.getFullYear(); 
  console.log(today,year,month,day)

  // collections are created automatically
  // const accountCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("accountinfo");
  const basePath = `/api/rest/v2/keyspaces/${process.env.ASTRA_DB_KEYSPACE}/hourly_data_usage`
  
  try{
    // const result = await accountCollection.find()
    const {data,status} = await astraClient.get(`${basePath}/${account}/${year}/${month}/${day}`);
    /*const { data, status } = await astraClient.get(basePath, {
      params: {
        where: {
          account: { $eq: "100001" },
          year: {$eq:"2021"},
          month: {$eq:"10"},
          date: {$eq:"7"}
        }
      }
    });*/
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