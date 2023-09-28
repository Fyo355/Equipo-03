import { describe, it, expect, beforeEach, beforeAll, afterAll } from "vitest"
import { User } from "../../domain/models/User.js"
import { EmailSenderMailgun } from "./EmailSenderMailgun.js"
import { TestInbox } from "./TestInbox.js"

describe("EmailSenderMailgun", () => {
    let userRepository

    beforeAll(async () => {

    })

    beforeEach(async () => {

    })

    afterAll(async () => {

    })

    it("should send an email to the users email", async () => {
        const emailSender = new EmailSenderMailgun();

        const id = "00000000-0000-0000-0000-000000000000"
        const name = "John Doe"
        const email = "gp29h.test@inbox.testmail.app"
        const age = 18
        const password = "password"
        const user = User.create(id, name, email, password, age)

        //const sendEmail = await emailSender.sendWelcomeEmail(user);

        const testInbox = new TestInbox();

        console.log(await testInbox.getAllEmails())

        //expect(testInbox.getLastEmail()).toMatch(`Que pasa ${user.name}`)

    })

})
