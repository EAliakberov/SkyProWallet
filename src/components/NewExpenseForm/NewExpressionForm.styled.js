import styled from 'styled-components';

export const SNewExpressionForm = styled.div`
    width: 100%;
    max-width: 379px;
    flex: 1;
    display: flex;
    flex-direction: column;

    min-height: 0;
    box-sizing: border-box;

    padding: 32px;

    background: #ffffff;
    border-radius: 30px;

    color: #333333;
    & .title {
        margin-bottom: 32px;
    }
    & .subtitle {
        margin-bottom: 16px;
    }
    & .input {
        margin-bottom: 24px;
    }
`;
