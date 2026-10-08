import styled from 'styled-components';

export const SInputContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    &.error::after {
        content: '*';
        display: block;
        position: absolute;
        font-weight: 700;
        color: #f25050;
        left: -10px;
        top: 12px;
    }
`;

export const SInput = styled.input`
    width: 100%;
    padding: 12px;
    border: 0.5px solid #999999;
    border-radius: 6px;
    display: flex;

    &.error {
        background-color: #ffebeb;
        border-color: #f25050;
    }
    &.valid {
        background-color: #f1ebfd;
        border-color: #7334ea;
    }
`;
