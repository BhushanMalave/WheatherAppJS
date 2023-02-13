import "./HomeComponent.css";
import { useState } from "react";
export const HomeComponent = () => {
  const [tempState, setTempState] = useState(true);
  return (
    <div className="main">
      <p className="cityName">Udupi,Karnataka</p>
      <div className="addfavdiv">
        {false ? (
          <img
            src={require("../../assets/images/web/favourite_icon_copy.png")}
            alt="favourite"
            className="favourite_icon"
          />
        ) : (
          <img
            src={require("../../assets/images/web/icon_favourite_Active.png")}
            alt="favourite"
            className="favourite_icon"
          />
        )}
        <p className="addfavp">Add to favourite</p>
      </div>
      <div className="weatherdiv">
        <img
          src={require("../../assets/images/web/icon_mostly_sunny.png")}
          alt="weather_icon"
          className="weather_icon"
        />

        {tempState ? (
          <div className="tempdiv">
            <div className="notext">87</div>
            <div className="tempdiv1">
              <div className="tempdiv2">
                <p className="temptext1">o</p>
                <p className="temptext2">C</p>
              </div>
              <div className="tempdiv3" onClick={() => setTempState(false)}>
                <div className="tempdiv4">
                  <p className="temptext3">o</p>
                  <p className="temptext4">F</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="tempdiv">
            <div className="notext">100</div>
            <div className="tempdiv1">
              <div className="tempdiv3" onClick={() => setTempState(true)}>
                <div className="tempdiv4">
                  <p className="temptext3">o</p>
                  <p className="temptext4">C</p>
                </div>
              </div>
              <div className="tempdiv2">
                <p className="temptext1">o</p>
                <p className="temptext2">F</p>
              </div>
            </div>
          </div>
        )}

        <div className="temptext5">Mostly Sunny</div>
      </div>
      <div className="line-copy" />
      <div className="grp">
        <div className="grpdiv">
          <img
            src={require("../../assets/images/web/icon_temperature_info.png")}
            alt="icon_temp"
            className="icon_temp"
          />
          <div className="grpdivin">
            <div className="grptext1">Min - Max</div>
            <div className="grptext2">22°-34°</div>
          </div>
        </div>

        <div className="grpdiv">
          <img
            src={require("../../assets/images/web/icon_precipitation_info.png")}
            alt="icon_prec"
            className="icon_prec"
          />
          <div className="grpdivin">
            <div className="grptext1">Precipitation</div>
            <div className="grptext2">0%</div>
          </div>
        </div>

        <div className="grpdiv">
          <img
            src={require("../../assets/images/web/icon_humidity_info.png")}
            alt="icon_humi"
            className="icon_humi"
          />
          <div className="grpdivin">
            <div className="grptext1">Humidity</div>
            <div className="grptext2">47%</div>
          </div>
        </div>

        <div className="grpdiv">
          <img
            src={require("../../assets/images/web/icon_wind_info.png")}
            alt="icon_wind"
            className="icon_wind"
          />
          <div className="grpdivin">
            <div className="grptext1">Wind</div>
            <div className="grptext2">4 mph</div>
          </div>
        </div>

        <div className="grpdiv">
          <img
            src={require("../../assets/images/web/icon_visibility_info.png")}
            alt="icon_vis"
            className="icon_vis"
          />
          <div className="grpdivin">
            <div className="grptext1">Visibility</div>
            <div className="grptext2">12 mph</div>
          </div>
        </div>
      </div>
    </div>
  );
};
