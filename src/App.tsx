import React, { useEffect } from "react";
import { useBeerStore } from "./store/beerStore";
import { AutoSizer, List, ListRowProps } from "react-virtualized";
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
    if (!beers.length) {
      fetchBeers();
    }
  }, []);

  const handleRecipeClick = (recipeId: number) => {
    navigate(`/recipes/${recipeId}`);
  };

  const handleRightClick = (recipeId: number) => {
    toggleBeerSelection(recipeId);
  };

  const handleDelete = () => {
    deleteSelectedBeers();
  };

  const rowRenderer = (props: ListRowProps) => {
    return (
      <Row
        list={beers}
        selectedRows={selectedRecipes}
        {...props}
        onRecipeClick={handleRecipeClick}
        onRightClick={handleRightClick}
      />
    );
  };

  return (
    <>
      <h1 className="appHeader">Beer List</h1>
      <div className="appListContainer">
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              width={width}
              height={500}
              rowCount={beers.length}
              rowHeight={100}
              rowRenderer={rowRenderer}
              overscanRowCount={0}
            />
          )}
        </AutoSizer>
      </div>
      {selectedRecipes.size > 0 && <button onClick={handleDelete}>Delete</button>}
    </>
  );
};

export default App;
