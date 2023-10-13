import express from "express"
import { RegisterUser } from "../../application/RegisterUser.js"
import { UserRepositoryMongo } from "../UserRepository/UserRepositoryMongo.js"
import { IdGeneratorNode } from "../IdGenerator/IdGeneratorNode.js"
import { EmailSenderMock } from "../EmailSender/EmailSenderMock.js"
import { PostUserController } from "./Controllers/PostUserController.js"
import { handleError } from "./Middleware/handleError.js"
import { PostLoginUserController } from "./Controllers/PostLoginUserController.js"
import { LoginUser } from "../../application/LoginUser.js"
export class Server {
  constructor(dependecies = {}) {
    this.dependecies = this.createDependencies(dependecies)

    this.app = express()
    this.app.use(express.json())
    this.app.post("/users/register", this.dependecies.postUserController.execute)
    this.app.post("/users/login", this.dependecies.postLoginUserController.execute)
    this.app.use(handleError)
  }

  createDependencies({
    userRepository = new UserRepositoryMongo(),
    idGenerator = new IdGeneratorNode(),
    emailSender = new EmailSenderMock(),
    registerUser = new RegisterUser(userRepository, idGenerator, emailSender),
    postUserController = new PostUserController(registerUser),
    loginUser = new LoginUser(),
    postLoginUserController = new PostLoginUserController(loginUser),
  }) {
    return {
      userRepository,
      idGenerator,
      emailSender,
      registerUser,
      postUserController,
      postLoginUserController,
    }
  }

  async connect() {
    await this.dependecies.userRepository.connect()
  }
  async disconnect() {
    await this.dependecies.userRepository.disconnect()
  }
  async reset() {
    await this.dependecies.userRepository.reset()
  }

  async listen() {
    const port = 3000
    this.app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }
}
