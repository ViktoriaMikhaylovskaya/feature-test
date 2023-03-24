export interface IVolumeInfo {
    allowAnonLogging?: boolean,
    canonicalVolumeLink?: string,
    authors?: string[],
    categories?: string[],
    contentVersion?: string,
    imageLinks?: { smallThumbnail: string, thumbnail: string },
    infoLink?: string,
    language?: string,
    maturityRating?: string,
    pageCount?: number,
    panelizationSummary?: { containsEpubBubbles: boolean, containsImageBubbles: boolean }
    previewLink?: string,
    printType?: string,
    publishedDate?: string,
    readingModes?: { text: boolean, image: boolean }
    subtitle?: string,
    title?: string,
    description?: string,
}

export interface IBook {
    etag?: string,
    id?: string,
    kind?: string,
    saleInfo?: { country?: string, saleability?: string, isEbook?: boolean }
    selfLink?: string,
    volumeInfo?: IVolumeInfo,
}

export interface IResponseData {
    items: IBook[],
    kind: string,
    totalItems: number,
}

export interface IQueriesForGetBookList {
    sortType: string,
    searchText: string,
    category: string,
    startIndex: number,
}

export interface State {
    booksList: IBook[],
    totalItems: number,
    isLoading: boolean,
    error: string | null,
    book: IBook,
};