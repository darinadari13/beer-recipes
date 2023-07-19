type TRecipe = {
  id: number;
  name: string;
};

export type TRowProps = {
  list: TRecipe[];
  index: number;
  selectedRows: Set<number>;
  onRecipeClick: (recipeId: number) => void;
  onRightClick: (recipeId: number) => void;
  style?: React.CSSProperties;
};
