import BooksApi from "./books";

class Api {
    books: BooksApi;

    constructor() {
        this.books = new BooksApi();
    }
}

export default new Api();
