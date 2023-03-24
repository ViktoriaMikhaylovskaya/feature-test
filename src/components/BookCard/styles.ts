import styled from 'styled-components';

export const Card = styled.li`
   background-color: ${({ theme }) => theme.color.lightGrey};
   padding: 10px;
   width: 250px;
   display: flex;
   flex-direction: column;

   &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.grey};
   }
`

export const Image = styled.img`
   width: 130px;
   height: 200px;
   margin: 10px auto;
`

export const BookCover = styled.div`
   font-size: 22px;
   width: 130px;
   height: 200px;
   margin: 10px auto;
   background-color: ${({ theme }) => theme.color.green};
   color: ${({ theme }) => theme.color.white};
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const Category = styled.p`
   margin: 0;
   color: grey;
`

export const Title = styled.h3`
   margin: 10px 0;
`

export const Author = styled.p`
   margin: 0;
   margin-top: auto;
   color: grey;
`