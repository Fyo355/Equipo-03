export class UserPasswordLengthError extends Error {
  constructor() {
    super("Password must be 6 characters or longer")
  }
}
