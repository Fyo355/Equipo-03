export class UserEmail {
  constructor(email) {
    this.email = email

    if (!this.email.includes("@")) {
      throw new UserEmailInvalidError()
    }
  }

  equals(email) {
    return this.email === email.email
  }
}
