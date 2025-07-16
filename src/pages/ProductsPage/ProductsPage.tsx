import styles from "./ProductsPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { pageNameClasses } from "../../layouts/Header/Header";

function ProductsPage() {
  return (
    <div className={cx(pageNameClasses.pro)}>
      <h1
        style={{
          fontSize: "3.2rem",
        }}
      >
        Sản phẩm của chúng tôi
      </h1>
    </div>
  );
}

export default ProductsPage;
