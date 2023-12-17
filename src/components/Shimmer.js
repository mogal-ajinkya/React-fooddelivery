const ShimmerHome = () => {
  return (
    <div className="restaurant-list">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}>
            <h1 className="image"></h1>
            <h2 className="name"></h2>
            <h3 className="cusine"></h3>
            <h4 className="more-data"></h4>
          </div>
        ))}
    </div>
  );
};

export const ShimmerDetails = () => {
  return (
    <>
      <div className="shimmer-card-details">
        <h2> </h2>
        <h4></h4>
        <h4></h4>
        <h4></h4>
      </div>

      <div className="shimmer-restaurant-menu">
        <h1></h1>
        {Array(15).fill("").map((e, index) => (
          <>
            <h2></h2>
            <div>
              {Array(15).fill("").map((e, index) => (
                <div className="shimmer-menu-contents">
                  <div className="shimmer-menu-info">
                    <h4></h4>
                    <p></p>
                    <p></p>
                  </div>
                  <div className="shimmer-menu-img">
                    <img></img>
                  </div>
                </div>))
              }
            </div>
          </>
          ))
        }
      </div>
    </>
  );
};



export default ShimmerHome ;
