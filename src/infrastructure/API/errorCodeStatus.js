import { ErrorCode } from "../../domain/errors/ErrorCode.js"

export const ErrorCodeMapStatus = new Map()

ErrorCodeMapStatus.set(ErrorCode.USER_ALREADY_EXISTS, 400)
ErrorCodeMapStatus.set(ErrorCode.INVALID_EMAIL, 400)
ErrorCodeMapStatus.set(ErrorCode.USER_IS_NOT_ADULT, 400)
ErrorCodeMapStatus.set(ErrorCode.USER_PASSWORD_LENGTH, 400)
ErrorCodeMapStatus.set(ErrorCode.INVALID_PARAMS, 400)

export function errorCodeStatus(code) {
  console.log(code)
  return ErrorCodeMapStatus.get(code) ?? 500
}
