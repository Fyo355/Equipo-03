import { describe, it, expect, vi } from "vitest"
import { PostLoginUserController } from "./PostLoginUserController.js"

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
})
