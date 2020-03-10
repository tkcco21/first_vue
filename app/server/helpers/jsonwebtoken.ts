import { config } from '@Config'
import jwt from 'jsonwebtoken'

export type Decoded = string | { [key: string]: string } | null

export const sign = (username: string): string => {
  return jwt.sign({ username }, config.secretKey, { expiresIn: '2 days' })
}

export const decode = (token: string): Decoded => {
  return jwt.decode(token)
}
