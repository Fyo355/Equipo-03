import { describe, it, expect, vi, beforeEach } from "vitest"
import { PostUserController } from "./PostUserController.js"
import { ZodError } from "zod"
import { UserPepe } from "../../../domain/mother/UserPepe.js"

describe("PostUserController", () => {
  let json
  let res
  let registerUser
  let postUserController
  const name = UserPepe.name
  const email = UserPepe.email
  const password = UserPepe.password
  const age = UserPepe.age

  beforeEach(() => {
    registerUser = { execute: vi.fn() }
    postUserController = new PostUserController(registerUser)
    json = vi.fn()
    res = {
      status: vi.fn(() => ({ json })),
    }
  })

  it("invokes the use case", async () => {
    const req = {
      body: {
        name,
        email,
        password,
        age,
      },
    }

    await postUserController.execute(req, res)

    expect(registerUser.execute).toHaveBeenCalledWith(name, email, password, age)
  })

  it("responds with status 201", async () => {
    const req = {
      body: {
        name,
        email,
        password,
        age,
      },
    }

    await postUserController.execute(req, res)

    expect(res.status).toHaveBeenCalledWith(201)
  })

  it("should return an error when the user has invalid parameters", async () => {
    const req = {
      body: {
        email,
        password,
        age,
      },
    }

    const result = postUserController.execute(req, res)

    expect(result).rejects.toBeInstanceOf(ZodError)
  })
})
