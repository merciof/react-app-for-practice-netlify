import axios from "axios";
import { Book } from "../models/Book";

import API_URL from "../config/environment";

const RESPONSE_TYPE = ".json";

const bookService = {
  getAllBooks: () => axios.get(API_URL + "books" + RESPONSE_TYPE),
  getBookById: (id: number, token) =>
    axios.get(API_URL + `books/${id}` + RESPONSE_TYPE),
  addBook: (book: Book) => axios.post(API_URL + "books" + RESPONSE_TYPE, book),
  updateBook: "",
  deleteBook: ""
};

export default bookService;
