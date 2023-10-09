import { ErrorCode } from "./ErrorCode.js"
import { DomainError } from "./DomainError.js"
export class UserIsNotAdultError extends DomainError {
  constructor() {
    super(ErrorCode.UserIsNotAdultError, "User must be 18 or older")
  }
}
