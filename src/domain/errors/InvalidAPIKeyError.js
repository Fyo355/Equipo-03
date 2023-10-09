import { ErrorCode } from "./ErrorCode.js"
import { DomainError } from "./DomainError.js"
export class InvalidAPIKeyError extends DomainError {
  constructor() {
    super(ErrorCode.INVALID_API_KEY, "Invalid API key")
  }
}
