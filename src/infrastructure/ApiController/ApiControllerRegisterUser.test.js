import { describe, it, expect, vi } from "vitest"
import { ApiControllerRegisterUser } from "./ApiControllerRegisterUser.js"

describe("ApiControllerRegisterUser", () => {
  it("should call registerUser.execute when the user is recived", async () => {
    const name = "John Doe"
    const email = "gp29h.test@inbox.testmail.app "
    const age = 18
    const password = "password"
    const request = {
      body: [
        {
          name,
          email,
          password,
          age,
        },
      ],
    }

    const registerUser = { execute: vi.fn() }
    const response = {
      json: vi.fn(),
    }
    const miApi = new ApiControllerRegisterUser(registerUser)

    await miApi.execute(request, response)

    expect(registerUser.execute).toBeCalledWith(name, email, password, age)
  })

  it("should respond with {status: ok}", async () => {
    const name = "John Doe"
    const email = "gp29h.test@inbox.testmail.app "
    const age = 18
    const password = "password"
    const request = {
      body: [
        {
          name,
          email,
          password,
          age,
        },
      ],
    }

    const registerUser = { execute: vi.fn() }
    const response = {
      json: vi.fn(),
    }

    const miApi = new ApiControllerRegisterUser(registerUser)

    await miApi.execute(request, response)

    expect(response.json).toHaveBeenCalledWith({ status: "ok" })
  })
})
