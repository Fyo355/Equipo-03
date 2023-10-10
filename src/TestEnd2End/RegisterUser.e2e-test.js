import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach } from "vitest"

import tepper from "tepper"
import { app } from "../infrastructure/API/main.js"
import { Server } from "../infrastructure/API/Server.js"

describe("POST /users/register", () => {
  const server = new Server()
  beforeAll(async () => {
    await server.connect()
  })
  afterAll(async () => {
    await server.disconnect()
  })
  beforeEach(async () => {
    await server.reset()
  })

  it("should return an error when the user has invalid parameters", async () => {
    const { body, text, status } = await tepper(server.app)
      .post("/users/register")
      .send({
        email: "er2@email.com",
        password: "12361111",
        age: 25,
      })
      .run()
    console.log(body)
    console.log(text)
    console.log(status)
    expect(body).toEqual({
      code: "INVALID_PARAMS",
      message: "invalid_type",
    })
  })
  it("should allow the user to login", async () => {
    const { body } = await tepper(server.app)
      .post("/users/register")
      .send({
        name: "juan",
        email: "juan@email.com",
        password: "12361111",
        age: 25,
      })
      .run()
    expect(body).toEqual({
      status: "ok",
    })

    const { loginBody } = await tepper(server.app)
      .post("/users/login")
      .send({
        email: "juan@email.com",
        password: "12361111",
      })
      .run()
    expect(loginBody).toEqual({
      status: "success",
    })
  })
})
