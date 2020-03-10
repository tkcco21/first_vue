require('dotenv').config()

interface Process {
  env: {
    readonly SECRET_KEY: string
    readonly TOKEN_KEY: string
  }
}
declare let process: Process

type Config = {
  secretKey: string
  token: {
    key: string
  }
}

export const config: Config = {
  secretKey: process.env.SECRET_KEY,
  token: {
    key: process.env.TOKEN_KEY,
  },
}
