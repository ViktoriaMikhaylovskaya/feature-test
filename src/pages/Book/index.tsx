import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader } from "src/components";
import { booksSelector } from "src/store/selectors";
import { fetchBookAction } from "src/store/api-actions";

import { Wrapper, Image, Info, Description, ImageWrapper, Content } from "./styles";
import { useAppDispatch } from "src/hooks/useAppDispatch";

function Book() {
    const dispatch = useAppDispatch();
    const { id = '' } = useParams();
    const { book, isLoading } = useSelector(booksSelector);

    const bookInfo = {
        title: book?.volumeInfo?.title || '-',

        authors: book?.volumeInfo?.authors && book.volumeInfo.authors.length > 0
            ? book.volumeInfo.authors.join(', ') : '',

        categories: book?.volumeInfo?.categories ? book.volumeInfo.categories.join(', ') : '',
        description: book?.volumeInfo?.description || '',
        imageLink: book?.volumeInfo?.imageLinks?.thumbnail || '',
    };

    const { title, authors, categories, description, imageLink } = bookInfo

    useEffect(() => {
        dispatch(fetchBookAction(id))
    }, [id]);

    return (
        <Wrapper>
            <Content>
                {isLoading
                    ? <Loader />
                    : <>
                        {imageLink &&
                            <ImageWrapper>
                                <Image src={imageLink} alt={`Обложка книги "${title}"`} />
                            </ImageWrapper>
                        }
                        <Info>
                            <h2>{title}</h2>
                            {authors && <p><b>Authors:</b> {authors}</p>}
                            {categories && <p><b>Categories:</b> {categories}</p>}

                            {description &&
                                <Description>{description}</Description>
                            }
                        </Info>
                    </>
                }
            </Content>
        </Wrapper >
    );
}

export default Book;
