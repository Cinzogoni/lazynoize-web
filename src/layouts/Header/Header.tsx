import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "react-router-dom";
import routeURLs from "../../routes/routes";

export const pageNameClasses = {
  int: "int-page",
  pro: "pro-page",
  ser: "ser-page",
  cont: "cont-page",
};

function Header() {
  return (
    <div className={cx("header-frame")}>
      <div className={cx("img")}>
        <img src="/public/assets/img/logo.jpg" className={cx("logo")} />
      </div>

      <div className={cx("navbar")}>
        <Link to={routeURLs.home}>
          <h1 className={cx(pageNameClasses.int)}>Giới thiệu</h1>
        </Link>

        <Link to={routeURLs.products}>
          <h1 className={cx(pageNameClasses.pro)}>Sản phẩm</h1>
        </Link>

        <Link to={routeURLs.services}>
          <h1 className={cx(pageNameClasses.ser)}>Dịch vụ</h1>
        </Link>

        <Link to={routeURLs.contact}>
          <h1 className={cx(pageNameClasses.cont)}>Liên hệ</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
