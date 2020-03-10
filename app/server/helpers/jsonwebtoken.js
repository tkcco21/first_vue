import { config } from '@Config'
import jwt from 'jsonwebtoken'
console.log(config)

export function sign(username) {
  return jwt.sign({ username }, config.secretKey, { expiresIn: '2 days' })
}

export function decode(token) {
  return jwt.decode(token)
}
