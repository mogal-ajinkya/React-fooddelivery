import { useParams } from "react-router-dom";
import {ShimmerDetails} from "./Shimmer";
import { IMG_CDN_URL } from "./Config";
import useRestaurant from "../utils/useRestaurant";


const Menu = (data) => {
  return (
    <>
      <h1 key={data?.card?.card?.itemCards?.card?.info?.id + 2000} >{data?.card?.card?.itemCards?.[0]?.card?.info?.category} </h1>
      {data?.card?.card?.itemCards?.map((more) => {
        return (
          <div className="menu-contents" key={more?.card?.info?.id}>
            <div className="menu-info" key={more?.card?.info?.id + 1001}>
              <h4 key={more?.card?.info?.id + 501 }>{more?.card?.info?.name}</h4>
              <p key={more?.card?.info?.id + 502}>$ {more?.card?.info?.price}</p>
              <p key={more?.card?.info?.id + 503}>{more?.card?.info?.description}</p>
            </div>
            <div className="menu-img"  key={more?.card?.info?.id + 1002}>
              <img
                src={
                  IMG_CDN_URL +
                  more?.card?.info?.imageId
                }
              ></img>
            </div>
          </div>
        );
      })}
    </>
  );
};

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurant(id);
  
  return restaurantInfo == null ? (
    <ShimmerDetails />
  ) : (
    <>
        <div className="card-details" key={restaurantInfo?.[0]?.card?.card?.info?.id}>
            <h2>{restaurantInfo?.[0]?.card?.card?.info?.name} </h2>
            <h4>{restaurantInfo?.[0]?.card?.card?.info?.cuisines.join(",")}</h4>
            <h4>{restaurantInfo?.[0]?.card?.card?.info?.avgRating} </h4>
            <h4>{restaurantInfo?.[0]?.card?.card?.info?.totalRatingsString}</h4>
        </div>

        <div className="restaurant-menu" key={restaurantInfo?.[0]?.card?.card?.info?.id + 100}>
          <h1>restaurant Menu</h1>
          <div>
            {restaurantInfo?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((data  ) => {
              return <Menu {...data } />;
            })}
          </div>
        </div>
    </>
  );
};

export default RestaurantDetails;
