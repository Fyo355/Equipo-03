import { DomainError } from "../../../domain/errors/DomainError"
import { ZodError } from "zod"
import { errorCodeStatus } from "../errorCodeStatus.js"
import { ErrorCode } from "../../../domain/errors/ErrorCode.js"
export function handleError(err, req, res, next) {
  if (err instanceof DomainError) {
    const code = err.code
    console.log(err)
    console.log(errorCodeStatus(code))
    return res.status(errorCodeStatus(code)).json({
      code: code,
      message: err.message,
    })
  }

  if (err instanceof ZodError) {
    console.log(err)
    return res.status(400).json({
      code: ErrorCode.INVALID_PARAMS,
      message: "invalid_type",
    })
  }
  return res.status(500).json()
}
