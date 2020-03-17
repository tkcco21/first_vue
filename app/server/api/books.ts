import { NextFunction, Request, Response, Router } from 'express'
import { BooksRepository } from '../database/repositories/books'

interface Books {
  findAll(): any
}

export class BooksImple implements Books {
  async findAll() {
    const booksRepository = new BooksRepository()
    try {
      const books = await booksRepository.getAll()
      console.log(books)
    } catch (err) {
      // TODO: errorの出力修正
      console.log(err)
    }
  }
}
