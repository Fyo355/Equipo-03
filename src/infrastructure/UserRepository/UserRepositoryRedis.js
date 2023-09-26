import { UserRepository } from "../../domain/repository/UserRepository";
import { createClient } from 'redis';

export class UserRepositoryRedis extends UserRepository {
    constructor() {
        super()
        this.client = new createClient()

    }

    async connect() {
        await this.client.connect()
    }

    async disconnect() {
        await this.client.disconnect();
    }

    async reset() {

    }

    async save(user) {
        //redis-cli HSET users:1 id 1 name Alice email alice@example.com
        await this.client.set('key', 'value');
        //const value = await this.client.get('key');
    }

    async findById(id) {

    }

    async existsByEmail(email) {

    }
}