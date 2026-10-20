import styled from 'styled-components';

export const SCategoryButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 8px 20px;
    border: none;
    border-radius: 500px;

    background-color: ${({ $active }) => ($active ? '#F1EBFD' : '#F4F5F6')};
    color: ${({ $active }) => ($active ? '#7334EA' : '#000')};

    svg {
        fill: currentColor;
        width: 14px;
        height: 14px;
        flex-shrink: 0;
    }

    cursor: pointer;
    outline: none;

    &:hover {
        border-color: #4a90e2;
        background-color: ${({ $active }) => ($active ? '#3a7bc8' : '#f5f7fa')};
    }

    &:active {
        transform: scale(0.97);
    }

    img {
        width: 20px;
        height: 20px;
        object-fit: contain;
    }
`;
