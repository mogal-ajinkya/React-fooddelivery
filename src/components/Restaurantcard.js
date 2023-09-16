
import { IMG_CDN_URL } from "./Config.js";

const Restaurantcard = ({
  cloudinaryImageId,
  name,
  // cuisines,
  avgRating,
  lastMileTravelString,
}) => {
  // const restaurantList = props;
  // console.log(props);{restaurant}
  // const {cloudinaryImageId , name , cuisines} = restaurant.data;
  return (
    <div className="card">
      <img
        alt="img"
        src={
           IMG_CDN_URL +
          cloudinaryImageId
        }
      ></img>
      <h4>{name}</h4>
      <h4>{name}</h4>
      <h4>{avgRating}</h4>
      {/* <h4>{cuisines.join(" , ")}</h4> */}
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default Restaurantcard;