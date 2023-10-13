import { describe, it, expect, vi } from "vitest"
import { PostUserController } from "./PostUserController.js"

describe("PostUserController", () => {
  let json
  let res
  it("invokes the use case", async () => {
    const registerUser = { execute: vi.fn() }
    const postUserController = new PostUserController(registerUser)
    const name = "John Doe"
    const email = "johndoe@example.com"
    const password = "password"
    const age = 18
    const req = {
      body: {
        name,
        email,
        password,
        age,
      },
    }
    json = vi.fn()
    res = {
      status: vi.fn(() => ({ json })),
    }

    await postUserController.execute(req, res)

    expect(registerUser.execute).toHaveBeenCalledWith(name, email, password, age)
  })

  it("responds with status 201", async () => {
    const registerUser = { execute: vi.fn() }
    const postUserController = new PostUserController(registerUser)
    const name = "John Doe"
    const email = "johndoe@example.com"
    const password = "password"
    const age = 18
    const req = {
      body: {
        name,
        email,
        password,
        age,
      },
    }
    json = vi.fn()
    res = {
      status: vi.fn(() => ({ json })),
    }

    await postUserController.execute(req, res)

    expect(res.status).toHaveBeenCalledWith(201)
  })

  /*
  it("allows the new user to login", async () => {
    const registerUser = { execute: vi.fn() }
    const postUserController = new PostUserController(registerUser)
    const name = "John Doe"
    const email = "johndoe@example.com"
    const password = "password"
    const age = 18
    const req = {
      body: {
        name,
        email,
        password,
        age,
      },
    }
    json = vi.fn()
    res = {
      status: vi.fn(() => ({ json })),
    }

    await postUserController.execute(req, res)

    expect(res.status).toHaveBeenCalledWith(201)
  })
  */
})
