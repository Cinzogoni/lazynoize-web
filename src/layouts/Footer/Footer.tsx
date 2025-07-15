import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer-frame")}>
      <h1 className={cx("copyright")}>© 2025 LazyNoize, All Rights Reserved</h1>
    </div>
  );
}

export default Footer;
