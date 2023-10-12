import React from "react";
import fol1 from "../images/follow1.png";
import fol2_1 from "../images/follow2-1.png";
import fol2_2 from "../images/follow2-2.png";
import fol3 from "../images/follow3.png";
export default function Follow() {
  return (
    <div className="follow">
      <h1>Following the damascene architectural style</h1>

      <div className="box-container">
        <div className="box">
          {" "}
          <img src={fol1} alt="" />{" "}
        </div>
        <div className=" box box-2">
          {" "}
          <div className="box-top">
            {" "}
            <img src={fol2_1} alt="" />{" "}
          </div>
<div className="box-bottom">
  <img src={fol2_2} alt="" />
</div>


        </div>
        <div className="box">
          {" "}
          <img src={fol3} alt="" />{" "}
        </div>
      </div>
    </div>
  );
}
