import { ErrorCode } from "./ErrorCode.js"
import { DomainError } from "./DomainError.js"
export class UserPasswordLengthError extends DomainError {
  constructor() {
    super(ErrorCode.User_Password_Length, "Password must be 6 characters or longer")
  }
}
