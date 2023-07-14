import React, { useEffect } from "react";
import { useBeerStore } from "./store/beerStore";
import "./App.css";

const App: React.FC = () => {
  const beers = useBeerStore((state) => state.beers.slice(0, 15));
  const fetchBeers = useBeerStore((state) => state.fetchBeers);
  const toggleBeerSelection = useBeerStore((state) => state.toggleBeerSelection);
  const selectedRecipes = useBeerStore((state) => state.selectedBeers);
  const deleteSelectedBeers = useBeerStore((state) => state.deleteSelectedBeers);

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  useEffect(() => {
    document.addEventListener("contextmenu", handleRightClick);
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  const handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    if (target.tagName === "LI") {
      const recipeId = parseInt(target.dataset.id || "", 10);
      if (recipeId) {
        toggleBeerSelection(recipeId);
      }
    }
  };

  const handleDelete = () => {
    deleteSelectedBeers();
  };

  return (
    <div>
      <h1>Beer Recipes</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id} data-id={beer.id} className={selectedRecipes.has(beer.id) ? "selected" : ""}>
            {beer.name}
          </li>
        ))}
      </ul>
      {selectedRecipes.size > 0 && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
};

export default App;
