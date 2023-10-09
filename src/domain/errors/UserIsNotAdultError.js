export class UserIsNotAdultError extends Error {
  constructor() {
    super("User must be 18 or older")
  }
}
