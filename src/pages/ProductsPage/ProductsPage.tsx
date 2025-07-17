import styles from "./ProductsPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import ReactPlayer from "react-player";

import { pageNameClasses } from "../../layouts/Header/Header";

function ProductsPage() {
  return (
    <div className={cx(pageNameClasses.pro)}>
      <div className={cx("pro-team")}>
        <h1 className={cx("title")}>Sản phẩm của Lazy Noize</h1>
        <div className={cx("products")}></div>
      </div>

      <div className={cx("pro-cus")}>
        <h1 className={cx("title")}>Sản phẩm sản xuất bởi Lazy Noize</h1>
        <div className={cx("products")}></div>
      </div>

      <div className={cx("pro-team")}>
        <h1 className={cx("title")}>Music Video sản xuất bởi Lazy Noize</h1>
        <div className={cx("products")}></div>
      </div>

      <div className={cx("pro-cus")}>
        <h1 className={cx("title")}>Sản phẩm thu vocal tại Lazy Noize</h1>
        <div className={cx("products")}></div>
      </div>
    </div>
  );
}

export default ProductsPage;
