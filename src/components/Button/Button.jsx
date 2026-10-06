import { SButton } from './Button.styled';

export const Button = ({ children, enabled, ...props }) => {
    return (
        <SButton className={` ${enabled ? 'active' : ''}`} {...props}>
            {children}
        </SButton>
    );
};

export default Button;
