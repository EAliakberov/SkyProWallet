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
    padding-top: 12px;

    &::-webkit-scrollbar {
        width: 6px; 
        height: 6px; 
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        margin: 0;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #D9D9D9;
        border: none;
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #D9D9D9;
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
    background: #ffffff;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1/6;

    padding: 7px 0;
`;

export const Cell = styled.div`
    grid-template-columns: 1;
    height: 15px;
    display: flex;
    align-items: center;

    color: #000000;

    line-height: 100%;
    font-weight: 400;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${({ $head }) =>
        $head &&
        `
        height: 29px;
        border-bottom: 1px solid #d5d5d5;
        color: #b8b8b8;
        `}

`;

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;

    background: transparent;

    cursor: pointer;

    transition:
        color 0.15s ease,
        background 0.15s ease;

    svg {
        width: 12px;
        height: 12px;
    }
`;
