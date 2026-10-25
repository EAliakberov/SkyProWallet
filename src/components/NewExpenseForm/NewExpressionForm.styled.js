import styled from 'styled-components';

export const SNewExpressionForm = styled.div`
    width: 379px;
    min-width: 379px;
    flex: 0 1 0%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    min-height: 0;
    box-sizing: border-box;

    padding: 32px;

    background: #ffffff;
    border-radius: 30px;

    color: #333333;

    &::-webkit-scrollbar {
        
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        margin: 32px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #d9d9d9;
        border: none;
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #d9d9d9;
    }

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
