import React from "react";
import style from "./Header2.module.css";
import { FiLink } from "react-icons/fi";
import Custombutton from "../../Atom/Custombutton/Custombutton";
function section3() {
  return (
    <div className={style.main}>
      <div className={style.inner1}>
        <img
          src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"
          className={style.img1}
          alt="picture1"
        />
        <span className={style.links}>
          <Custombutton
            btntext="Ipsum Lorem"
            style={style.btn}
            btnlogo={
              <FiLink style={{ fontSize: "1.1rem", marginRight: "0.6rem" }} />
            }
          />
          <Custombutton
            btntext="Ipsum Lorem"
            style={style.btn}
            btnlogo={
              <FiLink style={{ fontSize: "1.1rem", marginRight: "0.6rem" }} />
            }
          />
          <Custombutton
            btntext="Ipsum Lorem"
            style={style.btn}
            btnlogo={
              <FiLink style={{ fontSize: "1.1rem", marginRight: "0.6rem" }} />
            }
          />
        </span>
      </div>
      <div className={style.inner2}>
        <p className={style.title1}>
          Numquam <strong>Esse aliqulp do, magni.</strong>
        </p>
        <h1 className={style.title2}>Minima ad for vitae sit</h1>
        <p className={style.title3}>Lorem Ipsum</p>
        <img
          src="https://thumbs.dreamstime.com/b/scenic-nature-landscape-path-near-lake-forest-path-tunnel-trees-near-lake-scenic-nature-autumn-landscape-panorama-view-115358410.jpg"
          className={style.img2}
          alt="picture2"
        />

        <div className={style.title4}>
        <span>
        <Custombutton
        btntext="Ipsum Lorem"
        style={style.btn1}
        btnlogo={
          <FiLink style={{ fontSize: "1.1rem", marginRight: "0.6rem" }} />
        }
      />
        </span>
        

          <span className={style.span}>
            <p>Adipisicing unde vel so dore.</p>
            <p>corseqatur</p>
          </span>

          <p className={style.link4}>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

export default section3;
