import "dotenv/config"

export const configKeys = {
  mailgun: {
    domain: "sandboxc2c041ddf3e34f7eafb0c73e84f1d2e7.mailgun.org",
    authUser: "api",
    APIKey: process.env.MAILGUN_API_KEY,
  },
  testInbox: {
    APIKey: process.env.TESTMAIL_API_KEY,
    namespace: "gp29h",
  },
  mongo: {
    user: "admin",
    password: "password",
    url: "localhost",
    port: "27017",
  },
  postgres: {
    user: "admin",
    host: "localhost",
    database: "my-project",
    password: "password",
  },
}
