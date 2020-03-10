import { Request, Response, NextFunction } from 'express'

// import config from '@Config'
import { Decoded, decode } from '@Server/helpers/jsonwebtoken'

type ReturnType = Response<{ message: string }> | void

export default (req: Request, res: Response, next: NextFunction): ReturnType => {
  // NOTE: クロスドメインだと、cookieの受け渡しがうまくいかなかった。
  // TODO: ↓要修正。クライアントから自動的に渡されてくるcookieを使いたい
  // const decoded = decode(req.cookies[config.token.key]);
  let decoded: Decoded = ''
  const authorization = req.headers.authorization
  if (authorization) {
    decoded = decode(authorization.split(' ')[1])
  }

  if (!decoded) {
    return res.status(401).send({ message: 'サインインしてください' })
  }

  next()
}
