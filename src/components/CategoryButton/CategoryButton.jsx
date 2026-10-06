

const CategoryButton = ({ label, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={isActive ? 'category-button active' : 'category-button'}
    >
      {label}
    </button>
  );
};

export default CategoryButton;