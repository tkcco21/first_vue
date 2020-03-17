declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    // ↓DB
    readonly DB_USERNAME: string
    readonly DB_PASSWORD: string
    readonly DB_DATABASE: string
    readonly DB_HOST: string
    readonly DB_DIALECT: 'mysql'
  }
}
