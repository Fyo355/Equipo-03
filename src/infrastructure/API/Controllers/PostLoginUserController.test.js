import { describe, it, expect, vi } from "vitest"
import { PostLoginUserController } from "./PostLoginUserController.js"
import { ZodError } from "zod"

describe("PostLoginUserController", () => {
  let json
  let res
  it("invokes the use case", async () => {
    const loginUser = { execute: vi.fn() }
    const postLoginUserController = new PostLoginUserController(loginUser)
    const email = "johndoe@example.com"
    const password = "password"
    const req = {
      body: {
        email,
        password,
      },
    }
    json = vi.fn()
    res = {
      status: vi.fn(() => ({ json })),
    }

    await postLoginUserController.execute(req, res)

    expect(loginUser.execute).toHaveBeenCalledWith(email, password)
  })

  it("responds with status 200", async () => {
    const loginUser = { execute: vi.fn() }
    const postLoginUserController = new PostLoginUserController(loginUser)
    const email = "johndoe@example.com"
    const password = "password"
    const req = {
      body: {
        email,
        password,
      },
    }
    json = vi.fn()
    res = {
      status: vi.fn(() => ({ json })),
    }

    await postLoginUserController.execute(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
  })

  it("should return an error when the user has invalid parameters", async () => {
    const loginUser = { execute: vi.fn() }
    const postLoginUserController = new PostLoginUserController(loginUser)
    const email = 1111
    const password = "password"
    const req = {
      body: {
        email,
        password,
      },
    }
    json = vi.fn()
    res = {
      status: vi.fn(() => ({ json })),
    }

    const result = postLoginUserController.execute(req, res)

    await expect(result).rejects.toBeInstanceOf(ZodError)
  })

  /*

  it("should return a auth token", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    const loginUser = { execute: vi.fn() }
    const postLoginUserController = new PostLoginUserController(loginUser)
    const email = 1111
    const password = "password"
    const req = {
      body: {
        email,
        password,
      },
    }
    json = vi.fn()
    res = {
      status: vi.fn(() => ({ json })),
    }

    await postLoginUserController.execute(req, res)

    expect(res.status).toHaveBeenCalledWith({ token })
  })
  */
})
