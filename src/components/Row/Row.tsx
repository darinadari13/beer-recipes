import "./Row.css";

const Row: React.FC<any> = ({ list, index, style, selectedRows, onRecipeClick, onRightClick }: any) => {
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
    <div key={index} style={style}>
      <ul>
        <li
          key={recipeId}
          data-id={recipeId}
          onClick={handleRecipeClick}
          onContextMenu={handleRightClick}
          className={selectedRows?.has(recipeId) ? "selected" : ""}
        >
          {list[index].name}
        </li>
      </ul>
    </div>
  );
};

export default Row;
