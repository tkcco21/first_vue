import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { AdminUsers } from './entity/adminUsers'
import { Books } from './entity/books'

export const connection = createConnection({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'devdev.21FirstTkc@',
  database: 'test',
  entities: [AdminUsers, Books],
  synchronize: true,
  logging: false,
})
  .then(connection => {
    // here you can start to work with your entities
    // const book = new Book()
    // connection.manager.find(book)
  })
  .catch(error => console.log(error))
