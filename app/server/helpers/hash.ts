import crypto from 'crypto'

export const encrypt = (str: string): string => {
  const sha256 = crypto.createHash('sha256')

  sha256.update(str)
  return sha256.digest('hex')
}
