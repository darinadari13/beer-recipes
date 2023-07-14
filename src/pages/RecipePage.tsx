import { useParams } from "react-router-dom";
import { useBeerStore } from "../store/beerStore";

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const beerId = id ? parseInt(id) : 0;
  const beer = useBeerStore((state) => state.beers.find((beer) => beer.id === beerId));
  console.log(beer);
  return (
    <div>
      <h1>{beer?.name}</h1>
      <img src={beer?.image_url} alt="beer bottle" />
      <p>{beer?.description}</p>
      <span>Adv: {beer?.abv}</span>
    </div>
  );
};
export default RecipePage;
