import { EmailSender } from "../../domain/services/EmailSender"
import { configKeys } from "../Shared/ConfigKeys.js"

export class EmailSenderMailgun extends EmailSender {
  constructor({
    domain = configKeys.mailgun.domain,
    authUser = configKeys.mailgun.authUser,
    APIKey = configKeys.mailgun.APIKey,
  } = {}) {
    super()
    this.domain = domain
    this.authUser = authUser
    this.APIKey = APIKey
  }

  async sendWelcomeEmail(user) {
    var myHeaders = new Headers()
    myHeaders.append("Authorization", "Basic " + btoa(this.authUser + ":" + this.APIKey))

    var formdata = new FormData()

    formdata.append("from", `Juanma <mailgun@${this.domain}>`)
    //formdata.append("to", "juanandma@disroot.org");
    formdata.append("to", user.email.email)
    formdata.append("subject", "Hello")
    formdata.append("text", `¡Bienvenido a Mi proyecto ${user.name}!`)

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    }

    const response = await fetch(`https://api.mailgun.net/v3/${this.domain}/messages`, requestOptions)
    const data = await response.json()

    console.log(data)
  }
}
