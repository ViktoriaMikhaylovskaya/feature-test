import { useSelector } from "react-redux";
import { booksSelector } from "src/store/selectors";
import { Error } from "./styles";

function ErrorMessage() {
    const { error } = useSelector(booksSelector);

    return error
        ? <Error>{error}</Error>
        : null;
}

export default ErrorMessage;
