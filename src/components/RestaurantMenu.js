import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log("1");
  const resInfo = useRestaurantMenu(resId);
  // console.log("3");

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0].card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2].groupedCard?.cardGroupMap["REGULAR"]?.cards[2]?.card
      ?.card;

  //   console.log(itemCards);

  return (
    <div className="p-6 m-6">
      <h1 className="text-xl font-bold">{name}</h1>
      <h3 className="text-lg">{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2 className="py-2 my-2 font-bold text-xl">What?s New (10) ----</h2>
      <ul className="list-disc">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"  ₹"}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
