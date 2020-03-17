import { config } from '@Config'
import { encrypt } from '@Server/helpers/hash'
import { sign, decode } from '@Server/helpers/jsonwebtoken'
import adminUsers from '@Server/repositories/adminUsers'

export default {
  // NOTE: クロスドメインだとcookieの登録ができなかったので、このcheckTokenは使わなくした。
  // TODO: ↓要修正。ただクライアントのJSではcookieは触りたくない。
  checkToken(req, res) {
    const key = config.token.key
    const token = req.cookies[key]
    const decoded = decode(token)

    if (!decoded) return res.status(401).send({ message: 'ログインしてください。' })

    const { username } = decoded

    adminUsers
      .findOne(username)
      .then(({ user }) => {
        if (!user) throw new Error('ログインしてください。')
        res.send({ token })
      })
      .catch(({ message }) => res.status(400).send({ message }))
  },

  signin(req, res) {
    const { username, password } = req.body

    // console.log(username, password);
    // const postUser = {
    //   username,
    //   password: encrypt(password),
    // };
    // adminUsers.create(postUser);

    adminUsers
      .findOne(username)
      .then(({ user }) => {
        const reqEncryptedPassword = encrypt(password)

        if (!user || user.password !== reqEncryptedPassword) {
          throw new Error('違います！！')
        }

        const token = sign(username)

        if (!token) throw new Error('トークンが発行できません。')

        res
          // NOTE: クロスドメインだとcookieの登録ができなかったので、set-cookieは一旦しない。
          // TODO: cookie使えるようにしたい。ただクライアントのJSではcookieは触りたくない。
          // .cookie(config.token.key, token, { maxAge: 2 * 24 * 60 * 60 * 1000 })
          .send({ token })
      })
      .catch(({ message }) => res.status(400).send({ message }))
  },
}
