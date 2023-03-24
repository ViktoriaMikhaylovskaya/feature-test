import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CATEGORIES, ELEMENTS_PER_STEP, SORTING } from "./constants";
import { BookCard, Loader } from 'src/components';

import { IBook } from "src/store/interfaces";
import { fetchBooksAction } from "src/store/api-actions";
import actions from "src/store/reducer";
import { booksSelector } from "src/store/selectors";

import { processErrorHandle } from "src/hooks/process-error-handle";
import {
    BookList,
    ContentWrapper,
    Filter,
    FilterWrapper,
    Header,
    Input,
    InputWrapper,
    LoadMoreButton,
    PageWrapper,
    FoundCountText,
    SearchButton,
    Title,
    FilterTitle,
    FilterSelect,
    HintMessage
} from "./styles";
import { ERRORS } from "src/store/constants";
import { useAppDispatch } from "src/hooks/useAppDispatch";

function Search() {
    const dispatch = useAppDispatch();
    const { booksList, isLoading, totalItems } = useSelector(booksSelector);
    const [searchText, setSearchText] = useState('');
    const [sortType, setSortType] = useState(SORTING.RELEVANCE);
    const [filterType, setFilterType] = useState(CATEGORIES.ALL);
    const [startIndexForPagination, setStartIndexForPagination] = useState(booksList.length || 0);

    const loadBooks = (startIndex: number) => {
        if (searchText.length !== 0) {
            dispatch(fetchBooksAction({
                searchText,
                sortType,
                startIndex,
                category: filterType !== CATEGORIES.ALL ? `+${filterType}` : '',
            }));
        }
    }

    const changeFilterHandler = () => {
        dispatch(actions.setChangeFilter());
        loadBooks(0);
    }

    const searchBooks = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (evt.key === 'Enter') {

            if (searchText.length === 0) {
                processErrorHandle(ERRORS.EMPTY_VALUES);
            } else {
                changeFilterHandler();
            }
        }
    }

    const loadMoreButtonClick = () => {
        loadBooks(startIndexForPagination + ELEMENTS_PER_STEP);
        setStartIndexForPagination(booksList.length + ELEMENTS_PER_STEP);
    }

    useEffect(() => {
        changeFilterHandler();
    }, [sortType, filterType])

    return (
        <PageWrapper>
            <Header>
                <Title>Search for books</Title>
                <InputWrapper>
                    <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={(e) => searchBooks(e)} />
                    <SearchButton onClick={() => changeFilterHandler()} disabled={searchText.length === 0}>search</SearchButton>
                </InputWrapper>
                <FilterWrapper>
                    <Filter>
                        <FilterTitle>Categories</FilterTitle>
                        <FilterSelect
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                setFilterType(e.target.value);
                            }}
                        >
                            {Object.values(CATEGORIES).map((el) =>
                                <option key={el} value={el} >{el}</option>
                            )}
                        </FilterSelect>
                    </Filter>

                    <Filter>
                        <FilterTitle>Sorting By</FilterTitle>
                        <FilterSelect
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                setSortType(e.target.value);
                            }}>
                            {Object.values(SORTING).map((el) =>
                                <option key={el} value={el}>{el}</option>
                            )}
                        </FilterSelect>
                    </Filter>
                </FilterWrapper>
            </Header>

            <ContentWrapper>
                {booksList.length === 0 && !isLoading
                    && <HintMessage>Введите параметры в поиске для отображения результатов</HintMessage>}

                {isLoading && booksList.length === 0 && <Loader />}

                {booksList.length > 0 &&
                    <>
                        <FoundCountText>Found {booksList.length} results</FoundCountText>
                        <BookList>
                            {booksList.map((el: IBook) =>
                                <BookCard key={el.id} item={el} />
                            )}
                        </BookList>
                        {totalItems !== booksList.length}
                        <LoadMoreButton onClick={loadMoreButtonClick} disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Load more'}
                        </LoadMoreButton>
                    </>
                }
            </ContentWrapper>
        </PageWrapper>
    );
}

export default Search;
