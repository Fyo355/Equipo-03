export class UserRepository {
  // eslint-disable-next-line no-unused-vars
  /**
   * Saves a user
   * Params: User
   * return: Promise<void>
   */
  async save(user) {
    throw new Error("This is an abstract class. You should implement the save method")
  }

  // eslint-disable-next-line no-unused-vars
  async findById(id) {
    throw new Error("This is an abstract class. You should implement the findById method")
  }

  // eslint-disable-next-line no-unused-vars
  async existsByEmail(email) {
    throw new Error("This is an abstract class. You should implement the existsByEmail method")
  }
}
