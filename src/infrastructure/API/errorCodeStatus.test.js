import { describe, it, expect, vi, beforeEach } from "vitest"
import { errorCodeStatus } from "./errorCodeStatus"
import { ErrorCode } from "../../domain/errors/ErrorCode"

describe("errorCodeStatus", () => {
  it("must throw a 400 status error", () => {
    expect(errorCodeStatus(ErrorCode.USER_IS_NOT_ADULT)).toEqual(400)
  })
})
