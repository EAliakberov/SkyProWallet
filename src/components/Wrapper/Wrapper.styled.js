import styled from 'styled-components';

export const SWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    background-color: #f4f5f6;

    & > *:not(:nth-child(1)) {
        box-shadow: 0px 20px 67px -12px #00000021;
    }
`;
