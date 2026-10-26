import styled from 'styled-components';

export const CalendarCard = styled.section`
    width: 379px;
    min-width: 379px;
    padding: 32px 0 6px 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #fff;
    border-radius: 30px;
`;

export const Title = styled.h2`
    margin-bottom: 24px;
    margin-left: 32px;
`;

export const WeekHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    padding: 12px 40px 8px;
    border-bottom: 1px solid #c9c9c9;
`;

export const WeekDay = styled.div`
    text-align: center;
    color: #a2a2a5;
`;

export const CalendarScroll = styled.div`
    flex: 1;
    min-height: 0;
    overscroll-behavior: contain;

    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 24px 0 32px;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-button {
        display: none;
        width: 0;
        height: 0;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        margin: 0;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #d9d9d9;
        border: none;
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #d9d9d9;
    }
    @supports (-moz-appearance: none) {
        scrollbar-width: thin;
        scrollbar-color: #d9d9d9 transparent;
    }
`;

export const MonthSection = styled.section`
    padding-top: 24px;
    scroll-margin-top: 0;
`;

export const MonthTitle = styled.h3`
    margin: 0 0 12px;
`;

export const DaysGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    row-gap: 6px;
`;

export const DayCell = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 0;
    height: 40px;
    width: 40px;
    background: ${({ $inRange }) => ($inRange ? '#f0e8ff' : 'transparent')};

    border-radius: 50%;
`;

export const DayButton = styled.button`
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 100%;
    max-width: 52px;
    aspect-ratio: 1;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: ${({ $selected, $inRange }) =>
        $selected ? '#eee2ff' : $inRange ? 'transparent' : '#f3f4f6'};
    color: ${({ $selected, $inRange }) => ($selected || $inRange ? '#7334EA' : '#171717')};
    font-size: 14px;
    font-weight: 400;
    cursor: ${({ $outside }) => ($outside ? 'default' : 'pointer')};
    transition:
        background 0.15s ease,
        transform 0.15s ease;

    &:hover {
        background: ${({ $selected }) => ($selected ? '#e6d3ff' : '#e9e5f0')};
    }

    &:active {
        transform: scale(0.94);
    }
    &:focus-visible {
        outline: #7334ea auto 1px;
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 32px 24px;
    border-top: 1px solid #f0f0f0;

    @media (max-width: 480px) {
        padding: 16px 20px;
    }
`;

export const SelectedPeriod = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const FooterLabel = styled.span`
    color: #8a8a8a;
    font-size: 12px;
`;

export const FooterValue = styled.span`
    color: #222;
    font-size: 14px;
    font-weight: 500;
`;

export const FooterActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ClearButton = styled.button`
    padding: 10px 14px;
    border: 0;
    border-radius: 20px;
    background: transparent;
    color: #777;
    cursor: pointer;

    &:hover {
        background: #f5f5f5;
    }
`;

export const ApplyButton = styled.button`
    padding: 10px 18px;
    border: 0;
    border-radius: 22px;
    background: #111;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: #333;
    }
`;
