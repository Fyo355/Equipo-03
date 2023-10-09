import { ErrorCode } from "./ErrorCode.js"
import { DomainError } from "./DomainError.js"
export class UserAlreadyExistsError extends DomainError {
  constructor() {
    super(ErrorCode.USER_ALREADY_EXISTS, "User already exists")
  }
}
