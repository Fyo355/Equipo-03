import { User } from "../../domain/models/User.js"
import { UserPassword } from "../../domain/models/UserPassword.js";
import { UserRepository } from "../../domain/repository/UserRepository.js"
const { MongoClient } = require('mongodb');
export class UserRepositoryMongo extends UserRepository {

    constructor() {
        super()
        const url = "mongodb://admin:password@localhost:27017"
        this.client = new MongoClient(url);
        const db = this.client.db('MiProyecto');
        this.collection = db.collection('users');
    }

    async save(user) {
        await this.collection.insertOne({ ...user });
    }

    // eslint-disable-next-line no-unused-vars
    async findById(id) {

        const user = await this.collection.findOne({ id });

        if (user === null) {
            return null;
        } //else {
        return new User(user.id, user.name, user.email.email, new UserPassword(user.password.password), user.age.age)
        //}
    }

    // eslint-disable-next-line no-unused-vars
    async existsByEmail(email) {
        return await this.collection.findOne({ "email.email": email }) != null;
    }

    async connect() {
        this.client.connect();
    }

    async disconnect() {
        this.client.close();
    }

    async reset() {
        this.collection.deleteMany();
    }

}