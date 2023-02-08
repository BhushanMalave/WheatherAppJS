import "./Recent.css";
import { Component } from "../../components/Component";

export const Recent = () => {
  return (
    <div className="main">
      {true ? (
        <div className="nothingdiv">
          <img
            src={require("../../assets/images/web/icon_nothing.png")}
            alt="icon_nothing"
            className="icon_nothing"
            height={85}
            width={160}
          />
          <div className="nothingtext">No Recent added</div>
        </div>
      ) : (
        <>
          <div className="rectopbar">
            <div>You recently searched for</div>
            <div>Clear All</div>
          </div>
          <div className="comprender">
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
          </div>
        </>
      )}
    </div>
  );
};
