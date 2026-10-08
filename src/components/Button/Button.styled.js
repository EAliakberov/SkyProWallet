import styled from 'styled-components';

export const SButton = styled.button`
    width: 100%;
    padding: 12px;
    min-height: 39px;
    display: block;

    font-weight: 600;
    color: white;
    background-color: #7334ea;
    border: none;
    border-radius: 6px;

    &[disabled] {
        background-color: #999999;
    }
`;
