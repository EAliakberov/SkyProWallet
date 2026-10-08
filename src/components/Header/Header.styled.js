import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    width: 100%;
    min-height: 64px;
    background-color: white;
    & .header-container {
        position: relative;
        width: calc(100% - 240px);
        flex-grow: 1;
        height: 100%;
    }
    & .header_logo {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    & .header_buttons-container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        gap: 48px;
    }
    & .exit-button {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const SLink = styled(Link)`
    box-sizing: border-box;
    font-weight: 700;
    display: flex;
    align-items: center;
    vertical-align: middle;
    height: 24px;

    text-decoration: none;

    color: #000;

    border: none;
    &:hover {
        color: #7334ea;
    }

    ${({ $disabled }) =>
        $disabled &&
        `color: #7334ea;
        border-bottom: 1px solid #7334ea;
        cursor: not-allowed;
        pointer-events: none; /* ⚡️ Запрещает клики, фокус и hover-эффекты */
  `}
`;
