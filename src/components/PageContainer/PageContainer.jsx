import styled from 'styled-components';

const SPageContainer = styled.div`
    box-sizing: border-box; 

    padding-top: 36px;
    padding-bottom: 72px;
    width: calc(100% - 240px);
    height: 100%;
    min-height: 0; 

    display: flex;
    flex-direction: column;   
`;

export function PageContainer({ children }) {
    return <SPageContainer>{children}</SPageContainer>;
}
