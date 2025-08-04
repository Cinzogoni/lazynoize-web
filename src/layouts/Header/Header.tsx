import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "react-router-dom";
import routeURLs from "../../routes/routes";

import { useTransPage } from "../../contexts/PageTransContext";

import logo from "../../../public/assets/img/logo.png";

export const pageNameClasses = {
  int: "int-page",
  pro: "pro-page",
  ser: "ser-page",
  cont: "cont-page",
};

function Header() {
  const { handleTransitionPage } = useTransPage();

  return (
    <div className={cx("header-frame")}>
      <Link to={routeURLs.home} className={cx("img")}>
        <img src={logo} className={cx("logo")} />
      </Link>

      <div className={cx("navbar")}>
        <Link to={routeURLs.aboutUs}>
          <h1
            className={cx(pageNameClasses.int)}
            onClick={() => handleTransitionPage(pageNameClasses.int)}
          >
            Giới thiệu
          </h1>
        </Link>

        <Link to={routeURLs.products}>
          <h1
            className={cx(pageNameClasses.pro)}
            onClick={() => handleTransitionPage(pageNameClasses.pro)}
          >
            Sản phẩm
          </h1>
        </Link>

        <Link to={routeURLs.services}>
          <h1
            className={cx(pageNameClasses.ser)}
            onClick={() => handleTransitionPage(pageNameClasses.ser)}
          >
            Dịch vụ
          </h1>
        </Link>

        <Link to={routeURLs.contact}>
          <h1
            className={cx(pageNameClasses.cont)}
            onClick={() => handleTransitionPage(pageNameClasses.cont)}
          >
            Liên hệ
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
