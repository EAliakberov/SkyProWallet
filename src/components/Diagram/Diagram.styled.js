import styled from 'styled-components';

export const DiagramCard = styled.section`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;

    min-height: 0;
    box-sizing: border-box;

    padding: 32px;

    background: #ffffff;
    border-radius: 30px;

    & .title {
        margin-bottom: 32px;
    }
    & .diagram-text {
        color: #999;
        margin-bottom: 21px;
    }
    & .diagram-date {
        font-weight: 600;
    }

    & .diagram-columns {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: stretch;
        gap: 32px;
    }
`;

export const SColumn = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow-x: hidden;
    gap: 12px;

    & .column-header {
        margin: 0;
        white-space: nowrap;
    }
    & .column-name {
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        text-align: center;
    }
    & .column-body {
        width: 100%;

        background-color: ${({ $color }) => $color};
        border-radius: 12px;
        flex-basis: ${({ $size }) => {
            if (typeof $size !== 'number') return $size;
            const p = Math.min(Math.max($size, 0), 100) / 100; // 0..1
            return `calc(4px + ${p} * (100% - 4px))`;
        }};
    }
`;
