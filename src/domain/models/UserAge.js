export class UserAge {
  constructor(age) {
    this.age = age

    if (age < 18) {
      throw new UserIsNotAdultError()
    }
  }

  equals(other) {
    return this.age === other.age
  }
}
