import { z } from "zod"

const schema = z.object({
  email: z.string(),
  password: z.string(),
})

export class PostLoginUserController {
  constructor(loginUser) {
    this.loginUser = loginUser
  }

  execute = async (req, res) => {
    const { email, password } = schema.parse(req.body)
    const token = await this.loginUser.execute(email, password)

    res.status(201).json({ token })
  }
}
