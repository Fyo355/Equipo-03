export class ApiControllerRegisterUser {
  constructor(registerUser) {
    this.registerUser = registerUser
  }

  execute = async (req, res) => {
    console.log("hola" + req.body.length)

    for (let i = 0; i < req.body.length; i++) {
      //console.log(req.body[0])
      //console.log(req.body[0].name)
      await this.registerUser.execute(req.body[i].name, req.body[i].email, req.body[i].password, req.body[i].age)
    }

    res.json({ status: "ok" })
  }
}
