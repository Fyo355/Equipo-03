import { sleep } from "../../domain/utils/sleep.js"
import { configKeys } from "../Shared/ConfigKeys.js"

export class TestInbox {
  constructor({ APIKey = configKeys.testInbox.APIKey, namespace = configKeys.testInbox.namespace } = {}) {
    this.APIKey = APIKey
    this.namespace = namespace
    this.messages = []
  }

  /**
   * Retrieves the emails from the test inbox
   * @param {Date} from
   * @returns {Promise<void>}
   */
  async getEmails(from) {
    const params = new URLSearchParams({
      apikey: this.APIKey,
      namespace: this.namespace,
      pretty: true,
      timestamp_from: from.getTime(),
    })

    const response = await fetch(`https://api.testmail.app/api/json?${params.toString()}`)

    const data = await response.json()

    return data.emails
  }

  async getEmailsInLast5Seconds() {
    const now = new Date()
    const fiveSecondsAgo = new Date(now.getTime() - 3000)
    return await this.getEmails(fiveSecondsAgo)
  }

  async getLastEmail() {
    for (;;) {
      const emails = await this.getEmailsInLast5Seconds()
      if (emails.length > 0) {
        return emails[0]
      }
      await sleep(100)
    }
  }
}
