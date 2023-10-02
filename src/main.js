import express from "express"

import { UserRepositoryMongo } from "./infrastructure/UserRepository/UserRepositoryMongo.js"
import { IdGeneratorNode } from "./infrastructure/IdGenerator/IdGeneratorNode.js"

import { EmailSenderMock } from "./infrastructure/EmailSender/EmailSenderMock.js"
import { RegisterUser } from "./application/RegisterUser.js"
import { ApiControllerRegisterUser } from "./infrastructure/ApiController/ApiControllerRegisterUser.js"

const app = express()
const port = 3000

const userRepository = new UserRepositoryMongo()
const idGenerator = new IdGeneratorNode()
const emailSender = new EmailSenderMock()
const registerUser = new RegisterUser(userRepository, idGenerator, emailSender)
const miApi = new ApiControllerRegisterUser(registerUser)

app.use(express.json())

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something broke!")
})

app.post("/register", miApi.execute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
