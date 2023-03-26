import { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State, store } from ".";
import actions from "./reducer";
import { IQueriesForGetBookList } from "./interfaces";
import { ERRORS, TIMEOUT_SHOW_ERROR } from "./constants";
import api from 'src/services'
import { processErrorHandle } from "src/hooks/process-error-handle";

export const clearErrorAction = createAsyncThunk(
    'data/clearError',
    () => {
        setTimeout(
            () => store.dispatch(actions.fail(null)),
            TIMEOUT_SHOW_ERROR,
        );
    },
);

export const fetchBooksAction = createAsyncThunk<void, IQueriesForGetBookList, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'data/fetch',
    async (queries, { dispatch }) => {
        try {
            dispatch(actions.setDataLoadedStatus(true));
            const response = await api.books.getBookList(queries);
            dispatch(actions.fetchBookList(response.items));
            dispatch(actions.setTotalItems(response.totalItems))
            dispatch(actions.setDataLoadedStatus(false));
        } catch (error) {
            dispatch(actions.setDataLoadedStatus(false));
            processErrorHandle(ERRORS.DEFAULT);
            throw new Error(String(error));
        }
    },
);

export const fetchBookAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'data/fetchSelectedBook',
    async (id, { dispatch }) => {
        try {
            dispatch(actions.setDataLoadedStatus(true));
            const response = await api.books.getBookById(id);
            dispatch(actions.selectedBook(response));
            dispatch(actions.setDataLoadedStatus(false));
        } catch (error) {
            dispatch(actions.setDataLoadedStatus(false));
            processErrorHandle(ERRORS.DEFAULT);
            throw new Error(String(error));
        }
    },
);