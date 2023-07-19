export type TRowRenderProps = {
  index: number;
  onRecipeClick: (recipeId: number) => void;
  onRightClick: (recipeId: number) => void;
  style?: React.CSSProperties;
};
