import styles from "./ProductsPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { pageNameClasses } from "../../layouts/Header/Header";
import RapHipHop from "../../components/RapHipHop/RapHipHop";
import RnB from "../../components/RnBMelodic/RnB";
import PopBallad from "../../components/PopBallad/PopBallad";
import Anothers from "../../components/Anothers/Anothers";

function ProductsPage() {
  return (
    <div className={cx(pageNameClasses.pro)}>
      <div className={cx("frame")}>
        <RapHipHop />
      </div>
      <div className={cx("frame")}>
        <RnB />
      </div>
      <div className={cx("frame")}>
        <PopBallad />
      </div>
      <div className={cx("frame")}>
        <Anothers />
      </div>
    </div>
  );
}

export default ProductsPage;
