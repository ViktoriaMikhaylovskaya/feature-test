import { Book, Search } from "src/pages";

export const ROUTES_MAP = [
    {
        path: '/',
        component: <Search />
    },
    {
        path: '/book/:id',
        component: <Book />
    },
]