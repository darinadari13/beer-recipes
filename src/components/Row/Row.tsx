import "./Row.css";
import type { TRowProps } from "./types";

const Row: React.FC<TRowProps> = ({ list, index, selectedRows, onRecipeClick, onRightClick, style }) => {
  const recipe = list[index];
  const recipeId = recipe.id;
  const handleRecipeClick = () => {
    onRecipeClick(recipeId);
  };

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
