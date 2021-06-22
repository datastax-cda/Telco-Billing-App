const { createClient } = require("@astrajs/collections");

exports.handler = async function(event,context) {
  // create an {astra_db} client
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  // collections are created automatically
  const weeklyDataCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("weeklyConsumptionData");

  try{
    const weeklyConsumptionData = await weeklyDataCollection.create("100001",{[
      {
      "datausage": 346,
      "day": "S",
      "year": 2021,
      "accountno": 100001
      },
      {
      "datausage": 239,
      "day": "M",
      "year": 2021,
      "accountno": 100001
      },
      {
      "datausage": 298,
      "day": "T",
      "year": 2021,
      "accountno": 100001
      },
      {
      "datausage": 182,
      "day": "W",
      "year": 2021,
      "accountno": 100001
      },
      {
      "datausage": 443,
      "day": "T",
      "year": 2021,
      "accountno": 100001
      },
      {
      "datausage": 521,
      "day": "F",
      "year": 2021,
      "accountno": 100001
      },
      {
      "datausage": 347,
      "day": "S",
      "year": 2020,
      "accountno": 100001
      }
      ]
    })

    return {
      statusCode: 200,
      body: JSON.stringify(weeklyConsumptionData),
    };
  } catch(e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }

}