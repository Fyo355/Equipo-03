import { describe, it, expect, vi, beforeEach } from "vitest"
import { errorCodeStatus } from "./errorCodeStatus"
import { ErrorCode } from "../../domain/errors/ErrorCode"

describe("errorCodeStatus", () => {
  it("must throw a 400 status error", () => {
    expect(errorCodeStatus(ErrorCode.User_Is_Not_Adult)).toEqual(400)
  })
})
