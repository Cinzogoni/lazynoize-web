import styles from "./RapHipHop.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import ReactPlayer from "react-player";

import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GridSystem from "../../styles/GridSystem";

import { rapHipHop } from "../../data/dataLink";

import { useState, useEffect } from "react";

import useScroller from "../../hooks/useScroller";
import { useControlPlayer } from "../../contexts/ControlPlayerContext";
import { Link } from "react-router-dom";
import routeURLs from "../../routes/routes";

function RapHipHop() {
  const [windowWidth, setWindowWidth] = useState(0);
  const { playingId, handleControlPlayer } = useControlPlayer();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const { handleScroll, transformValue, activeScroll } = useScroller(
    rapHipHop,
    windowWidth
  );

  return (
    <div className={cx("product")}>
      <div className={cx("scroll")}>
        <h1 className={cx("title")}>Sản phẩm Rap/HipHop</h1>
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

      <div className={cx("boxes")}>
        <GridSystem rowClass={cx("row")}>
          <div
            className={cx("box")}
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: transformValue(),
            }}
          >
            {rapHipHop.map((rHH) => {
              return (
                <GridSystem
                  key={rHH.id}
                  colClass={cx("col")}
                  colL={cx("l-2")}
                  colML={cx("ml-2")}
                  colM={cx("m-3")}
                  colSM={cx("sm-3")}
                  colS={cx("s-4")}
                  colMo={cx("mo-6")}
                  colMi={cx("mi-12")}
                >
                  <div
                    className={cx("frame")}
                    onClick={() => handleControlPlayer(rHH.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <ReactPlayer
                      url={rHH.url}
                      light={playingId !== rHH.id}
                      playing={playingId === rHH.id}
                      width="97%"
                      height="89%"
                      controls={true}
                    />

                    <Link
                      to={routeURLs.services}
                      target="_blank"
                      className={cx("tooltip")}
                    >
                      <h2 className={cx("tooltip-text")}>Gói: {rHH.package}</h2>
                      <OpenInNewIcon className={cx("tooltip-link")} />
                    </Link>
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

export default RapHipHop;
