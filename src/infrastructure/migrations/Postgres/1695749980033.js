
export class Migration1695749980033 {

    constructor(client) {
        this.client = client;
    }

    async up() {
        return this.client.query(`CREATE TABLE IF NOT EXISTS users (
            id varchar(255) PRIMARY KEY,
                name varchar(255) NOT NULL,
                email varchar(255) NOT NULL,
                password varchar(255) NOT NULL,
                age INT NOT NULL
            )`);
    }

    async down() {
        return this.client.query(`DROP TABLE IF NOT EXISTS users`);
    }

}
