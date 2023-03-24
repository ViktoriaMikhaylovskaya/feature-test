import { State } from "src/store/index";

export const booksSelector = (state: State) => state.booksReducer;