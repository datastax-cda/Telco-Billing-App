const fetch = require('node-fetch')

exports.handler = async function () {

  const url = process.env.ASTRA_GRAPHQL_ENDPOINT
  const query = `
    query {
      shop_smartphones (
        value:{},
        ),
        {values 
          {brand,
           phone,
           retail_price,
           apr,
           rating,
           image
           }
        }
    }`

  const response = await fetch(url,{
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      "x-cassandra-token": process.env.ASTRA_DB_APPLICATION_TOKEN
    },
    body: JSON.stringify({ query })
  })

  try {
    const responsebody = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(responsebody),
    };
  } catch(e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }  
}
