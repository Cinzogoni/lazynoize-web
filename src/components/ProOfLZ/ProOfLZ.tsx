import styles from "./ProOfLZ.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import ReactPlayer from "react-player";

import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import GridSystem from "../../styles/GridSystem";

import { productOfLZURLs } from "../../data/dataLink";

import { useState, useEffect } from "react";

import Scroller from "../../func/Scroller";

function ProOfLZ() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const { handleScroll, transformValue, activeScroll } = Scroller(
    productOfLZURLs,
    windowWidth
  );

  return (
    <div className={cx("pro-team")}>
      <div className={cx("scroll")}>
        <h1 className={cx("title")}>Sản phẩm của Lazy Noize</h1>
        <div className={cx("next-prev")}>
          <ArrowLeftOutlinedIcon
            className={cx("prev")}
            onClick={() => handleScroll("prev")}
            style={{
              fontSize: "32px",
              transition: "transition: transform 0.5s ease-in-out",
              transform: activeScroll === "prev" ? "scale(1.2)" : "scale(1)",
            }}
          />
          <ArrowRightOutlinedIcon
            className={cx("next")}
            onClick={() => handleScroll("next")}
            style={{
              fontSize: "32px",
              transition: "transition: transform 0.5s ease-in-out",
              transform: activeScroll === "next" ? "scale(1.2)" : "scale(1)",
            }}
          />
        </div>
      </div>

      <div className={cx("pro-boxes")}>
        <GridSystem rowClass={cx("row")}>
          <div
            className={cx("pro-box")}
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: transformValue(),
            }}
          >
            {productOfLZURLs.map((url, index) => {
              const videoLink = Object.values(url)[0];
              return (
                <GridSystem
                  key={index}
                  colClass={cx("col")}
                  colL={cx("l-2")}
                  colML={cx("ml-2")}
                  colM={cx("m-3")}
                  colSM={cx("sm-3")}
                  colS={cx("s-4")}
                  colMo={cx("mo-6")}
                  colMi={cx("mi-12")}
                >
                  <div className={cx("pro-frame")}>
                    <ReactPlayer
                      url={videoLink}
                      light={true}
                      width="98%"
                      height="90%"
                      controls={true}
                    />
                  </div>
                </GridSystem>
              );
            })}
          </div>
        </GridSystem>
      </div>
    </div>
  );
}

export default ProOfLZ;
