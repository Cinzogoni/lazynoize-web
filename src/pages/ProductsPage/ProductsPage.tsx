import styles from "./ProductsPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useState, useEffect } from "react";

import { pageNameClasses } from "../../layouts/Header/Header";
import RapHipHop from "../../components/RapHipHop/RapHipHop";
import RnBMelodic from "../../components/RnBMelodic/RnBMelodic";
import PopBallad from "../../components/PopBallad/PopBallad";
import Others from "../../components/Others/Others";

function ProductsPage() {
  const [showPageAnimation, setShowPageAnimation] = useState(false);

  useEffect(() => {
    setShowPageAnimation(true);

    return () => {
      setShowPageAnimation(false);
    };
  }, []);

  return (
    <div
      className={cx(pageNameClasses.pro, {
        "active-transition": showPageAnimation,
      })}
    >
      <div className={cx("frame")}>
        <RapHipHop />
      </div>
      <div className={cx("frame")}>
        <RnBMelodic />
      </div>
      <div className={cx("frame")}>
        <PopBallad />
      </div>
      <div className={cx("frame")}>
        <Others />
      </div>
    </div>
  );
}

export default ProductsPage;
