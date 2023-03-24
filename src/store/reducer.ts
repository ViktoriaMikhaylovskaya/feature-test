import { createReducer, createAction } from '@reduxjs/toolkit';
import { IBook, State } from './interfaces';

export const actions = {
    fetchBookList: createAction<IBook[]>('data/fetch'),
    setTotalItems: createAction<number>('data/totalItems'),
    setChangeFilter: createAction('data/changeFilter'),

    fail: createAction<string | null>('data/fetchBooksFail'),
    setDataLoadedStatus: createAction<boolean>('data/setDataLoadedStatus'),

    selectedBook: createAction<Partial<IBook>>('data/selectedBook'),
};

const initialState: State = {
    booksList: [],
    totalItems: 0,
    isLoading: false,
    error: '',
    book: {},
};

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.fetchBookList, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.booksList = [...state.booksList, ...payload];
        })
        .addCase(actions.setChangeFilter, (state, { payload }) => {
            state.booksList = [];
        })
        .addCase(actions.setTotalItems, (state, { payload }) => {
            state.totalItems = payload;
        })
        .addCase(actions.fail, (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        })
        .addCase(actions.setDataLoadedStatus, (state, { payload }) => {
            state.isLoading = payload;
        })
        .addCase(actions.selectedBook, (state, { payload }) => {
            state.book = payload;
            state.isLoading = false;
        });
});

export default actions;
