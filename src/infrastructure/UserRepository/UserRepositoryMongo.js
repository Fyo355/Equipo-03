import { MongoClient } from "mongodb"
import { UserRepository } from "../../domain/repository/UserRepository.js"
import { User } from "../../domain/models/User.js"
import { UserPassword } from "../../domain/models/UserPassword.js"
import { configKeys } from "../Shared/ConfigKeys.js"

export class UserRepositoryMongo extends UserRepository {
  constructor({
    user = configKeys.mongo.user,
    password = configKeys.mongo.password,
    url = configKeys.mongo.url,
    port = configKeys.mongo.port,
  } = {}) {
    super()
    this.user = user
    this.password = password
    this.url = url
    this.port = port
    this.client = new MongoClient(`mongodb://${this.user}:${this.password}@${this.url}:${this.port}`)
    this.database = this.client.db("my-project")
    this.users = this.database.collection("users")
  }

  async connect() {
    await this.client.connect()
  }

  async disconnect() {
    await this.client.close()
  }

  async reset() {
    await this.users.deleteMany({})
  }

  async save(user) {
    await this.users.insertOne({ ...user })
  }

  async findById(id) {
    const savedUser = await this.users.findOne({ id })

    if (!savedUser) {
      return null
    }

    return new User(
      savedUser.id,
      savedUser.name,
      savedUser.email.email,
      new UserPassword(savedUser.password.password),
      savedUser.age.age,
    )
  }

  async existsByEmail(email) {
    const savedUser = await this.users.findOne({ "email.email": email }, { projection: { _id: 1 } })

    return Boolean(savedUser)
  }
}
