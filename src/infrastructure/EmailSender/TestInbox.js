export class TestInbox {

    async getAllEmails(from) {
        //apikey=685afc01-7d60-4e1e-9f67-594f035d2891
        //&namespace=gp29h&pretty=true");
        const params = new URLSearchParams({
            apikey: "685afc01-7d60-4e1e-9f67-594f035d2891",
            namespace: "gp29h",
            pretty: "true",
            timestamp_from: from.getTime();
        })

        const response = await fetch(`https://api.testmail.app/api/json?${params.toString()}`);
        const data = await response.json();

        return data.emails;
    }

    getEmailsinLast5Seconds() {

    }

    /*
    async getLastEmail(user) {
        while (true) {
            getAllEmail()
            await sleep(1000)
        
        }
    }
    */
}