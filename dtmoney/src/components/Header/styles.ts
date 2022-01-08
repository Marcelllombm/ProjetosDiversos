import styled from 'styled-components';

export const Container = styled.header`
background: var(--blue);
`;

export const Content = styled.section`

    align-items: center;
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
    max-width: 1120px;
    padding: 2rem 1rem 12rem;

    button {
        font-size:1rem;
        color:#fff; 
        background: var(--blue-light);
        border:0 ;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transform: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

`;
