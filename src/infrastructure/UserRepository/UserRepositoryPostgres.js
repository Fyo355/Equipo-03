import { Client } from 'pg'
import { UserRepository } from '../../domain/repository/UserRepository';
import { User } from "../../domain/models/User.js"
import { UserPassword } from "../../domain/models/UserPassword.js"


export class userRepositoryPostgres extends UserRepository {
    constructor() {
        super();
        this.client = new Client({
            user: "admin",
            host: 'localhost',
            database: "my-project",
            password: "password",
            port: 5432,
        });



    }

    async connect() {
        await this.client.connect();
    }

    async disconnect() {
        await this.client.end();
    }

    async reset() {
        this.client.query(`DELETE FROM users`);
    }

    async save(user) {
        const query = {
            text: 'INSERT INTO users(id, name, email, password, age) VALUES($1, $2, $3, $4, $5)',
            values: [user.id, user.name, user.email.email, user.password.password, user.age.age],
        }
        await this.client.query(query)
    }

    async findById(id) {
        const query = {
            // give the query a unique name
            name: 'find-user-id',
            text: 'SELECT * FROM users WHERE id = $1',
            values: [id],
        }

        const res = await this.client.query(query);
        const savedUser = res.rows[0];

        if (!savedUser) {
            return null
        }

        return new User(
            savedUser.id,
            savedUser.name,
            savedUser.email,
            new UserPassword(savedUser.password),
            savedUser.age,
        )
    }

    async existsByEmail(email) {
        const query = {
            // give the query a unique name
            name: 'find-user-email',
            text: 'SELECT * FROM users WHERE email = $1',
            values: [email],
        }

        const res = await this.client.query(query);
        const savedUser = res.rows[0];

        return Boolean(savedUser)
    }
}
