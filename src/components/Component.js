import "./Component.css";

export const Component = () => {
  return (
    <div className="compdiv">
      <div className="comptext1">Udupi, Karnataka</div>
      <div className="compdivin">
        <img
          src={require("../assets/images/web/icon_mostly_sunny.png")}
          alt="comp_icon"
          className="comp_icon"
        />
        <div className="comptext2">32 °c</div>
        <div className="comptext3">Mostly Sunny</div>
      </div>
      {false ? (
        <img
          src={require("../assets/images/web/favourite_icon_copy.png")}
          alt="favourite"
          className="fav_icon"
        />
      ) : (
        <img
          src={require("../assets/images/web/icon_favourite_Active.png")}
          alt="favourite"
          className="fav_icon"
        />
      )}
    </div>
  );
};
