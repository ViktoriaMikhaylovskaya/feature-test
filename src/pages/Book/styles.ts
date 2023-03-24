import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    padding: 30px 20px;
    height: 100%;
    background-color: ${({ theme }) => theme.color.lightGrey};
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px  0px 75px ${({ theme }) => theme.color.darkGrey};
`

export const ImageWrapper = styled.div`
    min-width: 280px;
    min-height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.grey};
    max-width: 400px;
`

export const Image = styled.img`
    width: 90%;
    height: 90%;
    max-width: 200px;
    max-height: 300px;
`

export const Info = styled.div`
    padding: 20px;
    min-width: 300px;
    max-width: 700px;
`

export const Description = styled.div`
    border: 1px solid ${({ theme }) => theme.color.grey};
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    min-height: 200px;
`