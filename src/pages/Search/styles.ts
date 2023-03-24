import styled from 'styled-components';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.darkGrey};
    color: ${({ theme }) => theme.color.white};
    box-shadow: 0 5px 20px ${({ theme }) => theme.color.darkGrey};
`

export const Title = styled.h1`
    margin: 0;
    font-size: 38px;
`

export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`

export const Input = styled.input`
    padding: 10px 5px;
    width: 50%;
    font-size: 16px;
    
`
export const SearchButton = styled.button`
    border: none;
    width: 100px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.color.green};
    color: ${({ theme }) => theme.color.white};
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        color: grey;

        &:hover {
            cursor: not-allowed;
        }
    }
`

export const FilterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

export const Filter = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const FilterTitle = styled.span`
    font-size: 20px;
`

export const FilterSelect = styled.select`
    padding: 5px;
    min-width: 170px;
    font-size: 16px;
    border-color: ${({ theme }) => theme.color.white};
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0px 10px;
`

export const FoundCountText = styled.p`
   text-align: center;
`

export const BookList = styled.ul`
    display: flex;
    gap: 30px;
    justify-content: center;
    list-style: none;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
`

export const LoadMoreButton = styled.button`
    border: none;
    margin: 20px 0;
    padding: 10px;
    width: 250px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.color.green};
    color: ${({ theme }) => theme.color.white};

    &:hover {
        cursor: pointer;
    }
`

export const HintMessage = styled.div`
    font-size: 20px;
    margin: 40px;
`