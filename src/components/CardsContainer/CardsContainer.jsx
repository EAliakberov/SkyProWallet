import styled from 'styled-components';

const SCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    gap: 34px;
    width: 100%;
    flex: 1;

    min-height: 0;
    box-sizing: border-box;
    & > * {
        box-shadow: 0px 20px 67px -12px #00000021;
    }
`;

export function CardsContainer({ children }) {
    return <SCardsContainer>{children}</SCardsContainer>;
}
