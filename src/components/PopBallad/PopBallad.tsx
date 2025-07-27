import styles from "./PopBallad.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import ReactPlayer from "react-player";

import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import GridSystem from "../../styles/GridSystem";

import { popBallad } from "../../data/dataLink";

import { useState, useEffect } from "react";

import useScroller from "../../hooks/useScroller";
import { useControlPlayer } from "../../contexts/ControlPlayerContext";

function PopBallad() {
  const [windowWidth, setWindowWidth] = useState(0);
  const { playingId, handleControlPlayer } = useControlPlayer();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const { handleScroll, transformValue, activeScroll } = useScroller(
    popBallad,
    windowWidth
  );

  return (
    <div className={cx("product")}>
      <div className={cx("scroll")}>
        <h1 className={cx("title")}>Sản phẩm Pop/Ballad</h1>
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
            {popBallad.map((popBallad) => {
              return (
                <GridSystem
                  key={popBallad.id}
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
                    onClick={() => handleControlPlayer(popBallad.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <ReactPlayer
                      url={popBallad.url}
                      light={playingId !== popBallad.id}
                      playing={playingId === popBallad.id}
                      width="97%"
                      height="89%"
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

export default PopBallad;
