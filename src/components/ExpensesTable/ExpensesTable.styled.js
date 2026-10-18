import styled from 'styled-components';

const GRID_COLUMNS = '1fr 1fr 1fr 1fr 12px';

export const Card = styled.section`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;

    min-height: 0;
    box-sizing: border-box;

    padding: 32px 0;

    background: #ffffff;
    border-radius: 30px;

    color: #333333;
    & .title {
        margin-bottom: 32px;
        margin-left: 32px;
    }
`;

export const TableWrapper = styled.div`
    width: 100%;

    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 32px;
    padding-top: 18px;
    scrollbar-width: 6px;

    &::-webkit-scrollbar {
        width: 6px; /* Полоса будет ровно 8px от самого края */
        height: 6px; /* Для горизонтального, если он есть */
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        margin: 0;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #e8e8e8;
        border: none;
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #d9d9d9;
    }
`;

export const HeadWrapper = styled.div`
    width: 100%;

    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: hidden;
    padding-right: 38px;
    padding-left: 32px;
    border-bottom: 0.5px solid #999999;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${GRID_COLUMNS};

    width: 100%;
    min-width: 600px;
`;

export const GridHead = styled.div`
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1/6;

    /* sticky-заголовок */
    position: sticky;
    top: 0;
    z-index: 2;

    background: #ffffff;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1/6;

    height: 34px;
`;

export const Cell = styled.div`
    grid-template-columns: 1;
    display: flex;
    align-items: center;

    height: 34px;

    padding: 0;

    color: #404040;

    font-size: 15px;
    line-height: 20px;
    font-weight: 400;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${({ $head }) =>
        $head &&
        `
        height: 42px;
        padding: 0 0 11px;
        border-bottom: 1px solid #d5d5d5;
        color: #b8b8b8;
        `}

    ${({ $action }) =>
        $action &&
        `
        justify-content: center;
        `}
`;

export const DeleteButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;

    padding: 0;

    border: 0;
    border-radius: 5px;

    background: transparent;
    color: #a8a8a8;

    cursor: pointer;

    transition:
        color 0.15s ease,
        background 0.15s ease;

    &:hover {
        color: #777777;
        background: #f3f3f3;
    }

    &:active {
        background: #e9e9e9;
    }

    svg {
        width: 15px;
        height: 15px;
    }
`;
