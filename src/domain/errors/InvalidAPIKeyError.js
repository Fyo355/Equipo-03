export class InvalidAPIKeyError extends Error {
  constructor() {
    super("Invalid API key")
  }
}
