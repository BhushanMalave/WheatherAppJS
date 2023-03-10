import "./Home.css";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import moment from "moment";

export const Home = () => {
  const [currentDate, setcurrentDate] = useState();
  const [dialog, setDialog] = useState();

  const updateDate = () => {
    const date = moment(new Date().toString()).format(`ddd, D MMM YYYY h:mm A`);
    setcurrentDate(date);
  };
  useEffect(() => {
    updateDate();
  });
  return (
    <div className="homecontainer">
      <div className="homesubconatiner">
        <div className="webtopbar">
          <img
            onClick={() => {
              setDialog(true);
            }}
            src={require("../../assets/images/mobile/icon_menu_white.png")}
            alt="mobbar"
            className="mobbar"
          />
          <img
            src={require("../../assets/images/web/logo_web.png")}
            alt="weblogo"
            className="weblogo"
          />
          <div className="webinputfielddiv">
            <input
              className="webinputfield"
              type="p"
              onClick={(e) => console.log(e.target.value)}
              placeholder="Search City"
            />
            <img
              src={require("../../assets/images/web/icon_search_white.png")}
              alt="logo_search_web"
              className="logo_search_web"
              height={20}
              width={20}
            />
          </div>
        </div>
        <div className="navbar">
          <div className="navbarin">
            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid #FFA222" : "none",
                  color: isActive ? "#FFA222" : "white",
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  padding: "0px 10px 5px 10px",
                };
              }}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid #FFA222" : "none",
                  color: isActive ? "#FFA222" : "white",
                  fontSize: "1.1rem",
                  marginLeft: "1.5vw",
                  textDecoration: "none",
                  padding: "0px 10px 5px 10px",
                };
              }}
              to="favourite"
            >
              FAVOURITE
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid #FFA222" : "none",
                  color: isActive ? "#FFA222" : "white",
                  fontSize: "1.1rem",
                  marginLeft: "1.5vw",
                  textDecoration: "none",
                  padding: "0px 10px 5px 10px",
                };
              }}
              to="recent"
            >
              RECENT SEARCH
            </NavLink>
          </div>
          <div>{currentDate}</div>
        </div>
        <div className="line"></div>
        {dialog ? (
          <div className="burger-container">
            <NavLink to={"/"}>
              {" "}
              <p
                onClick={() => {
                  setDialog(false);
                }}
                className="navlinksmobile"
              >
                Home
              </p>
            </NavLink>
            <NavLink to={"/favourite"}>
              {" "}
              <p
                onClick={() => {
                  setDialog(false);
                }}
                className="navlinksmobile"
              >
                Favuorite
              </p>
            </NavLink>
            <NavLink to={"/recent"}>
              {" "}
              <p
                onClick={() => {
                  setDialog(false);
                }}
                className="navlinksmobile"
              >
                Recent
              </p>
            </NavLink>
          </div>
        ) : (
          ""
        )}
        <Outlet />
      </div>
    </div>
  );
};
