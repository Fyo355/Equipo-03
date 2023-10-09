import { ErrorCode } from "./ErrorCode.js"
import { DomainError } from "./DomainError.js"
export class UserPasswordLengthError extends DomainError {
  constructor() {
    super(ErrorCode.USER_PASSWORD_LENGTH, "Password must be 6 characters or longer")
  }
}
