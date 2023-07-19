import React, { useEffect } from "react";
import { useBeerStore } from "./store/beerStore";
import { List } from "react-virtualized";
import "./App.css";
import Row from "./components/Row/Row";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const beers = useBeerStore((state) => state.beers.slice(0, 15));
  const fetchBeers = useBeerStore((state) => state.fetchBeers);
  const selectedRecipes = useBeerStore((state) => state.selectedBeers);
  const toggleBeerSelection = useBeerStore((state) => state.toggleBeerSelection);
  const deleteSelectedBeers = useBeerStore((state) => state.deleteSelectedBeers);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  const handleRecipeClick = (recipeId: string) => {
    navigate(`/recipes/${recipeId}`);
  };

  const handleRightClick = (recipeId: string) => {
    toggleBeerSelection(+recipeId);
  };

  const handleDelete = () => {
    deleteSelectedBeers();
  };

  const rowRenderer = (props: any) => {
    return (
      <Row
        list={beers}
        key={props.index}
        selectedRows={selectedRecipes}
        {...props}
        onRecipeClick={handleRecipeClick}
        onRightClick={handleRightClick}
      />
    );
  };

  return (
    <>
      <div style={{ border: "1px solid red" }}>
        <List
          width={300}
          height={500}
          rowCount={beers.length}
          rowHeight={100}
          rowRenderer={rowRenderer}
          overscanRowCount={0}
        />
      </div>
      {selectedRecipes.size > 0 && <button onClick={handleDelete}>Delete</button>}
    </>
  );
};

export default App;
