import { DomainError } from "../../../domain/errors/DomainError"
import { ZodError } from "zod"
import { errorCodeStatus } from "../errorCodeStatus.js"
import { ErrorCode } from "../../../domain/errors/ErrorCode.js"
export function handleError(err, req, res, next) {
  if (err instanceof DomainError) {
    const code = err.code
    return res.status(errorCodeStatus(code)).json({
      code: code,
      message: err.message,
    })
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      code: ErrorCode.INVALID_PARAMS,
      message: "invalid_type",
    })
  }
  console.log(err)
  return res.status(500).json()
}
