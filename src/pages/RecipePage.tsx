import { useParams } from "react-router-dom";
import { useBeerStore } from "../store/beerStore";
import "./RecipePage.css";

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const beerId = id ? parseInt(id) : 0;
  const beer = useBeerStore((state) => state.beers.find((beer) => beer.id === beerId));

  return (
    <div className="beerContainer">
      <h1 className="beerHeading">{beer?.name}</h1>
      <img src={beer?.image_url} alt="beer bottle" className="beerImg" />
      <p className="beerDescription">{beer?.description}</p>
      <span>Adv: {beer?.abv}</span>
    </div>
  );
};
export default RecipePage;
