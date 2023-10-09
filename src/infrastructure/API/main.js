import express from "express"
import { RegisterUser } from "../../application/RegisterUser.js"
import { UserRepositoryMongo } from "../UserRepository/UserRepositoryMongo.js"
import { IdGeneratorNode } from "../IdGenerator/IdGeneratorNode.js"
import { EmailSenderMock } from "../EmailSender/EmailSenderMock.js"
import { PostUserController } from "./Controllers/PostUserController.js"
import { DomainError } from "../../domain/errors/DomainError.js"
import { errorCodeStatus } from "./errorCodeStatus.js"
import { ZodError } from "zod"
import { ErrorCode } from "../../domain/errors/ErrorCode.js"
const app = express()
const port = 3000

app.use(express.json())

const userRepository = new UserRepositoryMongo()
const idGenerator = new IdGeneratorNode()
const emailSender = new EmailSenderMock()
const registerUser = new RegisterUser(userRepository, idGenerator, emailSender)
const postUserController = new PostUserController(registerUser)

app.post("/users/register", postUserController.execute)

app.use((err, req, res, next) => {
  if (err instanceof DomainError) {
    const code = err.code
    console.log(err)
    console.log(errorCodeStatus(code))
    return res.status(errorCodeStatus(code)).json({
      code: code,
      message: err.message,
    })
  }

  if (err instanceof ZodError) {
    console.log(err)
    return res.status(400).json({
      code: ErrorCode.INVALID_PARAMS,
      message: "invalid_type",
    })
  }
  return res.status(500).json()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
