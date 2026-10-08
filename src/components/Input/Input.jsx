import { SInput, SInputContainer } from './Input.styled';

export function Input({ type, error, ...props }) {
    return (
        <SInputContainer className={'input-container ' + (error ? 'error' : '')}>
            <SInput type={type} className={error ? 'error' : ''} {...props}></SInput>
        </SInputContainer>
    );
}
