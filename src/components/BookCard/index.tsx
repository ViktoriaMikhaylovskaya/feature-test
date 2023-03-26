
import { useNavigate } from "react-router-dom";

import { IBook } from "src/store/interfaces";
import { fetchBookAction } from "src/store/api-actions";

import { Author, BookCover, Card, Category, Image, Title } from "./styles";
import { useAppDispatch } from "src/hooks/useAppDispatch";

function BookCard({ item }: { item: IBook }) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const book = {
        title: item.volumeInfo?.title || '-',
        authors: item.volumeInfo?.authors && item.volumeInfo.authors.length > 0 ? item.volumeInfo.authors.join(',') : '',
        categories: item.volumeInfo?.categories?.[0] || '',
        description: item.volumeInfo?.description || '-',
        imageLink: item?.volumeInfo?.imageLinks?.smallThumbnail || '',
    };

    const onClickBookCard = () => {
        navigate(`/book/${item.id}`);
    }

    return (
        <Card onDoubleClick={onClickBookCard}>
            {book.imageLink
                ? <Image src={book.imageLink} alt={`Обложка книги "${book.title}"`} />
                : <BookCover>Без обложки</BookCover>
            }
            <Category>{book.categories}</Category>
            <Title>{book.title}</Title>
            <Author>{book.authors}</Author>
        </Card>
    );
}

export default BookCard;
