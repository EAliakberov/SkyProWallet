import styled from 'styled-components';

const SPageContainer = styled.div`
    box-sizing: border-box; /* чтобы padding-top не вылезал за 100% */

    padding-top: 36px;
    padding-bottom: 72px;
    width: calc(100% - 240px);
    height: 100%;
    min-height: 0; /* важно во flex-родителе */

    display: flex;
    flex-direction: column;   
`;

export function PageContainer({ children }) {
    return <SPageContainer>{children}</SPageContainer>;
}
