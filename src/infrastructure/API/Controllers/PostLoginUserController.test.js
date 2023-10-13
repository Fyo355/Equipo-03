import { describe, it, expect, vi, beforeEach } from "vitest"
import { PostLoginUserController } from "./PostLoginUserController.js"
import { ZodError } from "zod"
import { UserPepe } from "../../../domain/mother/UserPepe.js"

describe("PostLoginUserController", () => {
  let json
  let res
  let loginUser
  let postLoginUserController
  const email = UserPepe.email
  const password = UserPepe.password
  const token = UserPepe.token

  beforeEach(() => {
    loginUser = { execute: vi.fn(() => ({ token })) }
    postLoginUserController = new PostLoginUserController(loginUser)
    json = vi.fn()
    res = {
      status: vi.fn(() => ({ json })),
    }
  })

  it("invokes the use case", async () => {
    const req = {
      body: {
        email,
        password,
      },
    }

    await postLoginUserController.execute(req, res)

    expect(loginUser.execute).toHaveBeenCalledWith(email, password)
  })

  it("responds with status 200", async () => {
    const req = {
      body: {
        email,
        password,
      },
    }

    await postLoginUserController.execute(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
  })

  it("should return an error when the user has invalid parameters", async () => {
    const req = {
      body: {
        password,
      },
    }

    const result = postLoginUserController.execute(req, res)

    await expect(result).rejects.toBeInstanceOf(ZodError)
  })

  it.skip("should return a auth token", async () => {
    const req = {
      body: {
        email,
        password,
      },
    }

    await postLoginUserController.execute(req, res)

    expect(json).toHaveBeenCalledWith(token)
  })
})
