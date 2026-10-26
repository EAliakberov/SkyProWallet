import { SCategoryButton } from './CategoryButton.styled';

const CategoryButton = ({ isActive, onClick, children }) => {
    return (
        <SCategoryButton
            type="button"
            onClick={onClick}
            className={isActive ? 'category-button active' : 'category-button'}
            $active={isActive}
        >
            {children}
        </SCategoryButton>
    );
};

export default CategoryButton;
