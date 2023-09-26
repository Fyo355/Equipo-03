
const client = new createClient()

await client.connect();


const migration = new Migration1695757248435(client);

await migration.up();


await client.end();