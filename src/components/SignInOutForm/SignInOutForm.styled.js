import styled from 'styled-components';

export const SSignInOutForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    width: 379px;
    padding: 32px;
    border-radius: 30px;

    background-color: #fff;

    & .form_input-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    & .form_button {
        margin-top: 12px;
    }

    & .form_error {
        color: #f84d4d;
        text-align: center;
    }
    & .form_text {
        color: #999999;
        text-align: center;
        line-height: 18px;
        & p {
            margin-bottom: 4px;
        }

        & a {
            color: inherit;
            display: block;
        }
    }
`;
