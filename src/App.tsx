import React, { useEffect } from 'react';
import { useBeerStore } from './store/beerStore';


const App: React.FC = () => {
  const beers = useBeerStore((state) => state.beers);
  const fetchBeers = useBeerStore((state) => state.fetchBeers);
  // const loadMoreBeers = useBeerStore((state) => state.loadMoreBeers);

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  return (
    <div>
      <h1>Beer Recipes</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
      {/* <button onClick={loadMoreBeers}>Load More</button> */}
    </div>
  );
};

export default App;

