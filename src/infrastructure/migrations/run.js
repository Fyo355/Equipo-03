import { Migration1695749980033 } from "./1695749980033.js";
import pkg from 'pg';
const { Client } = pkg;


const client = new Client({
    user: "admin",
    host: 'localhost',
    database: "my-project",
    password: "password",
    port: 5432,
});


await client.connect();


const migration = new Migration1695749980033(client);

await migration.up();


await client.end();