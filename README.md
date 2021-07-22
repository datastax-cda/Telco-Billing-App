# Prerequisites

## Initialize the database
In Astra, create a database with a keyspace called `telco_billing_ks` and initialize the schema with the schema definitions in [schema.cql](schema.cql).  Also generate a token for a db administrator for that database.  Download the secure bundle for that database in the Connect screen.

## Configure the local environment
Configure the following:
- Copy [.env.example](.env.example) to '.env' and then configure the Astra database ID, token, and region
- [load-table.sh](load-table.sh) with the path to dsbulk 1.8.0, the path to the secure bundle, and the database credentials.

## Load the data
Run the [load-data.sh](load-data.sh) script to load the data into your database.

## Prepare your environment with software dependencies

### Install the following:

[npm](https://github.com/nvm-sh/nvm#installing-and-updating)

[netlify](https://docs.netlify.com/cli/get-started/):
```
npm install netlify-cli -g
```

[axios](https://www.npmjs.com/package/axios):
```
npm install axios -g
```

[@astrajs/rest](https://www.npmjs.com/package/@astrajs/rest):
```
npm install @astrajs/rest -g
```

[@astrajs/collections](https://www.npmjs.com/package/@astrajs/collections):
```
npm install @astrajs/collections -g
```

# Build and run

## Initialize the application with:

```
netlify dev
```

Go to browser at [http://localhost:8888/login](http://localhost:8888/login).