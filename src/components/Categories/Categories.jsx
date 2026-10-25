import CategoryButton from '../CategoryButton/CategoryButton';
import { SCategories } from './Categories.styled';
import { categories } from '../../CategoriesData';

export function Categories({ value, onChange }) {
    return (
        <SCategories>
            {Object.keys(categories).map((key) => {
                return (
                    <CategoryButton
                        isActive={key === value}
                        key={key}
                        onClick={() => {
                            onChange(key);
                        }}
                    >
                        {categories[key]?.icon || null}
                        {categories[key]?.label || key}
                    </CategoryButton>
                );
            })}
        </SCategories>
    );
}
