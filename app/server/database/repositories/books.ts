import { Repository, getRepository } from 'typeorm'
import { Books } from '../entity/books'

export class BooksRepository {
  booksRepository: Repository<Books>

  constructor() {
    this.booksRepository = getRepository(Books)
  }

  /**
   * Creates an instance of User.
   */
  instantiate(data: Record<string, any>): Books | undefined {
    return this.booksRepository.create(data)
  }

  /**
   * Returns array of all users from db
   */
  async getAll(): Promise<Books[]> {
    const test = await this.booksRepository.find()
    return await this.booksRepository.find()
  }
}
