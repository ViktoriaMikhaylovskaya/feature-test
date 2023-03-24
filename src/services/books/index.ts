import { api } from "src/store"
import { IBook, IResponseData } from "src/store/interfaces"

class BooksApi {
    async getBookById(id: string): Promise<IBook> {
        return api.get(`/${id}`)
    }

    async getBookList(searchText: string, category: string, sortType: string, startIndex: number): Promise<IResponseData> {
        return api
            .get(`?q=${searchText}${category}&orderBy=${sortType}&startIndex=${startIndex}&maxResults=30`)
    }
}

export default BooksApi