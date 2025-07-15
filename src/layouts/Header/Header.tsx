import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header-frame")}>
      <div className={cx("img")}>
        <img src="/public/assets/img/logo.jpg" className={cx("logo")} />
      </div>

      <div className={cx("navbar")}>
        <h1 className={cx("title")}>Giới thiệu</h1>
        <h1 className={cx("title")}>Sản phẩm</h1>
        <h1 className={cx("title")}>Dịch vụ</h1>
        <h1 className={cx("title")}>Liên hệ</h1>
      </div>
    </div>
  );
}

export default Header;
