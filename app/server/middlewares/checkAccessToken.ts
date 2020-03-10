import { Request, Response, NextFunction } from 'express'

// import config from '@Config'
import { decode } from '@Server/helpers/jsonwebtoken'

type ReturnType = Response<{ message: string }> | void

export default (req: Request, res: Response, next: NextFunction): ReturnType => {
  // NOTE: クロスドメインだと、cookieの受け渡しがうまくいかなかった。
  // TODO: ↓要修正。クライアントから自動的に渡されてくるcookieを使いたい
  // const decoded = decode(req.cookies[config.token.key]);
  const decoded = decode(
    req.headers.authorization && req.headers.authorization.split(' ')[1],
  )
  if (!decoded) {
    return res.status(401).send({ message: 'サインインしてください' })
  }

  next()
}
