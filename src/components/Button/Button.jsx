import { SButton } from './Button.styled';

export const Button = ({ enabled, ...props }) => {
    return <SButton className={` ${enabled ? 'active' : ''}`} {...props}></SButton>;
};

export default Button;
