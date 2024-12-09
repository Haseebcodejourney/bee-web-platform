import styled from 'styled-components';

export const Container = styled.section`
        flex-direction: row;
        width: 58%;
        align-items: flex-start;
        gap: 15px;
        @media screen and (max-width: 767px) {
            width: 100%;
            flex-direction: column;
        }
`;

export const Boxs = styled.div`
        display: flex;
        flex-direction: column;
        /* background-color: #ffffff; */
        color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
        border: 1px solid ${({ theme }) => (theme === 'light' ? '#80808021' : '#808080')};
        /* border: 1px solid ${({ theme }) => (theme === 'light' ? 'rgba(0, 0, 0, 0.125)' : 'hsl(220, 20%, 65%)')}; */
        width: 48%;
        border-radius: 8px;
        padding: 15px;
        /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
        /* box-shadow: ${({ theme }) => (theme === 'light' ? 'rgba(149, 157, 165, 0.2) 0px 8px 24px' : 'transparent')}; */
        @media screen and (max-width: 767px) {
            width: 100%;
            
        }
`;

export const TopSegment = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
`;

export const Strong = styled.strong`
font-size: 18px;
/* color: #6f2036; */
color: ${({ theme }) => (theme === 'light' ? '#6f2036' : '#fff')};
`;

export const Figure = styled.figure`
margin: 0;
        width: 30px;
        height: 30px;
`;

export const Image = styled.img`
width: 38px;
        height: 38px;
        padding: 0px;
        border-radius: 5px;
`;

export const List = styled.ul`

`;

export const ListItems = styled.li`
display: flex;
        justify-content: space-between;
        padding: 0px 0px 7px 0px;
`;

export const Paper = styled.span`
font-size: 16px;
        font-weight: 500;
        /* color: #303030; */
        color: ${({ theme }) => (theme === 'light' ? '#303030' : '#fff')};

`;
