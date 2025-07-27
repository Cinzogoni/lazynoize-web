import styles from "./ServicesPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { pageNameClasses } from "../../layouts/Header/Header";

function ServicesPage() {
  return (
    <div className={cx(pageNameClasses.ser)}>
      <h1 className={cx("title")}>Dịch vụ của chúng tôi</h1>
      <div className={cx("frame")}>
        <div className={cx("ser-A")}></div>
        <div className={cx("ser-B")}></div>
        <div className={cx("ser-C")}></div>
      </div>
    </div>
  );
}

export default ServicesPage;
