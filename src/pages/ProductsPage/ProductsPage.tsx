import styles from "./ProductsPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import ReactPlayer from "react-player";
import { pageNameClasses } from "../../layouts/Header/Header";
import { proURLs } from "../../data/dataLink";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GridSystem from "../../styles/GridSystem";

function ProductsPage() {
  return (
    <div className={cx(pageNameClasses.pro)}>
      <div className={cx("pro-team")}>
        <h1 className={cx("title")}>Sản phẩm của Lazy Noize</h1>

        <div className={cx("pro-box")}>
          <ArrowBackIosIcon style={{ width: "120px", height: "120px" }} />
          <div className={cx("products")}>
            {proURLs.map((url, index) => {
              const videoLink = Object.values(url)[0];
              return (
                <div className={cx("pro-frame")} key={index}>
                  <ReactPlayer
                    url={videoLink}
                    width="98%"
                    height="98%"
                    controls={true}
                  />
                </div>
              );
            })}
          </div>
          <ArrowForwardIosIcon style={{ width: "120px", height: "120px" }} />
        </div>
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
