import { EmailSender } from "../../domain/services/EmailSender";
import { User } from "../../domain/models/User.js"

export class EmailSenderMailgun extends EmailSender {

    async sendWelcomeEmail(user) {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YXBpOmZkYTNjYmRiNzAyYjA0OTM4YjM5YzM0NmE0YTcwYTZhLWRiMTM3Y2NkLTU4OWY4NDM4");


        var formdata = new FormData();

        formdata.append("from", "Juanma <mailgun@sandboxc9c2dc269da1431d8c236271fd734661.mailgun.org>");
        //formdata.append("to", "juanandma@disroot.org");
        formdata.append("to", user.email.email);
        formdata.append("subject", "Hello");
        formdata.append("text", `Que pasa ${user.name}`);


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        const response = await fetch("https://api.mailgun.net/v3/sandboxc9c2dc269da1431d8c236271fd734661.mailgun.org/messages", requestOptions);
        const data = await response.json();

        console.log(data)

    }
}