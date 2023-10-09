import { ErrorCode } from "../../domain/errors/ErrorCode"

export const ErrorCodeMapStatus = new Map()

ErrorCodeMapStatus.set(ErrorCode.User_Already_Exists, 400)
ErrorCodeMapStatus.set(ErrorCode.Invalid_Email, 400)
ErrorCodeMapStatus.set(ErrorCode.User_Is_Not_Adult, 400)
ErrorCodeMapStatus.set(ErrorCode.User_Password_Length, 400)

export function errorCodeStatus(code) {
  return ErrorCodeMapStatus.get(code)
}
