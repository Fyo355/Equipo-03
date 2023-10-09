import { ErrorCode } from "./ErrorCode.js"
import { DomainError } from "./DomainError.js"
export class UserAlreadyExistsError extends DomainError {
  constructor() {
    super(ErrorCode.User_Already_Exists, "User already exists")
  }
}
