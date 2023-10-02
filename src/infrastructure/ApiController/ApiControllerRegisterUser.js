export class ApiControllerRegisterUser {
  constructor(registerUser) {
    this.registerUser = registerUser
  }

  execute = async (req, res) => {
    //Empieza transaccion TODO
    //try {
    for (let i = 0; i < req.body.length; i++) {
      //console.log(req.body[0])
      //console.log(req.body[0].name)
      await this.registerUser.execute(req.body[i].name, req.body[i].email, req.body[i].password, req.body[i].age)
    }
    //Termina transacion TODO

    res.json({ status: "ok" })
    //} catch (error) {
    //res.json({ status: error.message })
    //}
  }
}
