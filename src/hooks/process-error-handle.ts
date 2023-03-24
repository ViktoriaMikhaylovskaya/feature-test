import { store } from "src/store";
import { clearErrorAction } from "src/store/api-actions";
import actions from "src/store/reducer";

export const processErrorHandle = (message: string): void => {
    store.dispatch(actions.fail(message));
    store.dispatch(clearErrorAction());
};