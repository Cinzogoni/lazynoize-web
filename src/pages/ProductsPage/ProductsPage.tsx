import styles from "./ProductsPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { pageNameClasses } from "../../layouts/Header/Header";

import ProOfLZ from "../../components/ProOfLZ/ProOfLZ";

function ProductsPage() {
  return (
    <div className={cx(pageNameClasses.pro)}>
      <ProOfLZ />

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
