import { SInput, SInputContainer } from './Input.styled';

export function Input({ type, error, valid, ...props }) {
    return (
        <SInputContainer className={'input-container ' + (error ? 'error' : '')}>
            <SInput
                type={type}
                className={(error ? 'error' : '') + (error ? 'error' : '')}
                {...props}
            ></SInput>
        </SInputContainer>
    );
}
