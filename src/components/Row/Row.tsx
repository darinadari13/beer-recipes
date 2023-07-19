import "./Row.css";

const Row: React.FC<any> = ({ list, index, selectedRows, onRecipeClick, onRightClick, style }: any) => {
  const recipe = list[index];
  const recipeId = recipe.id;

  const handleRecipeClick = () => {
    onRecipeClick(recipeId);
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();
    onRightClick(recipeId);
  };

  return (
    <div
      key={index}
      className={selectedRows?.has(recipeId) ? "rowItem selected" : "rowItem"}
      style={style}
      onClick={handleRecipeClick}
      onContextMenu={handleRightClick}
    >
      <div>{list[index].name}</div>
    </div>
  );
};

export default Row;
