import CategoryButton from '../CategoryButton/CategoryButton';
import { SCategories } from './Categories.styled';

export function Categories() {
    return (
        <SCategories>
            <CategoryButton isActive={true} value="Еда"></CategoryButton>
            <CategoryButton value="Транспорт"></CategoryButton>
            <CategoryButton value="Жилье"></CategoryButton>
            <CategoryButton value="Развлечения"></CategoryButton>
            <CategoryButton value="Образование"></CategoryButton>
            <CategoryButton value="Другое"></CategoryButton>
        </SCategories>
    );
}
