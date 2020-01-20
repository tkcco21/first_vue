import config from '@Config';
import { decode } from '@Server/utils/jsonwebtoken';

export default (req, res, next) => {
  // NOTE: クロスドメインだと、cookieの受け渡しがうまくいかなかった。
  // TODO: ↓要修正。クライアントから自動的に渡されてくるcookieを使いたい
  // const decoded = decode(req.cookies[config.token.key]);
  const decoded = decode(req.headers.authorization.split(' ')[1]);
  if (!decoded) {
    return res.status(401).send({ message: 'サインインしてください' });
  }

  next();
};
