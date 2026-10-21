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
    &:hover {
        color: white;
        background-color: #8c47f5;
        box-shadow: 0 4px 12px rgba(122, 47, 233, 0.3);
    }

    &:active {
        background-color: #6622cb; /* Затемняем фиолетовый при клике */
        transform: scale(0.98); /* Слегка уменьшаем кнопку (эффект нажатия) */
        box-shadow: 0 2px 6px rgba(122, 47, 233, 0.2); /* Уменьшаем тень при нажатии */
    }

    /* 3. Дополнительно: состояние фокуса для доступности (когда переключаются табом) */
    &:focus-visible {
        outline: 3px solid #cdb4db; /* Красивая рамка-фокус вокруг кнопки */
        outline-offset: 2px;
    }
`;
