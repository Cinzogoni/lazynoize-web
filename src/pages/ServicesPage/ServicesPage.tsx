import styles from "./ServicesPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { pageNameClasses } from "../../layouts/Header/Header";

const services = [
  { id: "1", package: "Sản phẩm gói Pro" },
  { id: "2", package: "Sản phẩm gói Semi-Pro" },
  { id: "3", package: "Sản phẩm gói Basic" },
];

function ServicesPage() {
  return (
    <div className={cx(pageNameClasses.ser)}>
      <h1 className={cx("title")}>Dịch vụ của chúng tôi</h1>
      <div className={cx("frame")}>
        {services.map(() => {
          return <div className={cx("levels")}></div>;
        })}
      </div>
    </div>
  );
}

export default ServicesPage;
