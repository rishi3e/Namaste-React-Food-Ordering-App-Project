import { SWIGGY_RESTAURANT_IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const resD = resData?.info;
  return (
    <div className="res-card m-4 p-4 w-[250px] bg-gray-300 rounded-md hover:bg-gray-400">
      <img
        className="res-logo rounded-sm"
        alt="restaurant-logo"
        src={SWIGGY_RESTAURANT_IMAGE_CDN_URL + resD.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resD.name}</h3>
      <h5>Cuisines: {resD.cuisines.join(", ")}</h5>
      <h5>Ratings: {resD.avgRating} ☆</h5>
      <h5>Place: {resD.areaName}</h5>
      <h5>Time: {resD.sla.slaString}</h5>
      <h5>Price: {resD.costForTwo.toUpperCase()}</h5>
    </div>
  );
};

export default RestaurantCard;
