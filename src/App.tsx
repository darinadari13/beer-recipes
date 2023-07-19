import React, { useEffect } from "react";
import { useBeerStore } from "./store/beerStore";
import { List } from "react-virtualized";
import "./App.css";

const Row: React.FC = ({ list, index, style }: any) => {
  useEffect(() => {
    console.log(list[index].name);

    return () => {
      console.log("unounted");
    };
  }, []);
  return (
    <div key={index} style={style}>
      {list[index].name}
    </div>
  );
};

const App: React.FC = () => {
  const beers = useBeerStore((state) => state.beers.slice(0, 15));
  const fetchBeers = useBeerStore((state) => state.fetchBeers);

  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  const rowRenderer = (props: any) => {
    return <Row list={beers} key={props.index} {...props} />;
  };

  return (
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
  );
};

export default App;
