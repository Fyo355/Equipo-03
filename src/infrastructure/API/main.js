import express from "express"
import { RegisterUser } from "../../application/RegisterUser.js"
import { UserRepositoryMongo } from "../UserRepository/UserRepositoryMongo.js"
import { IdGeneratorNode } from "../IdGenerator/IdGeneratorNode.js"
import { EmailSenderMock } from "../EmailSender/EmailSenderMock.js"
import { PostUserController } from "./Controllers/PostUserController.js"

const app = express()
const port = 3000

app.use(express.json())

const userRepository = new UserRepositoryMongo()
const idGenerator = new IdGeneratorNode()
const emailSender = new EmailSenderMock()
const registerUser = new RegisterUser(userRepository, idGenerator, emailSender)
const postUserController = new PostUserController(registerUser)

app.use((err, req, res, next) => {
  try {
    next(req, res)
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      res.status(400).json({ error })
    }
  }
})

app.post("/users/register", postUserController.execute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
