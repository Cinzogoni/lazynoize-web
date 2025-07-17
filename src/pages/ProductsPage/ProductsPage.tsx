import styles from "./ProductsPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import ReactPlayer from "react-player";
import { pageNameClasses } from "../../layouts/Header/Header";
import { proURLs } from "../../data/dataLink";

import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

import GridSystem from "../../styles/GridSystem";

function ProductsPage() {
  return (
    <div className={cx(pageNameClasses.pro)}>
      <div className={cx("pro-team")}>
        <div className={cx("scroll")}>
          <h1 className={cx("title")}>Sản phẩm của Lazy Noize</h1>
          <div className={cx("next-prev")}>
            <ArrowLeftOutlinedIcon className={cx("prev")} />
            <ArrowRightOutlinedIcon className={cx("next")} />
          </div>
        </div>

        <div className={cx("pro-box")}>
          <div className={cx("products")}>
            {proURLs.map((url, index) => {
              const videoLink = Object.values(url)[0];
              return (
                <GridSystem
                  key={index}
                  colClass={cx("col")}
                  colL={cx("l-2")}
                  colML={cx("ml-3")}
                  colM={cx("m-4")}
                  colSM={cx("sm-4")}
                  colS={cx("s-6")}
                  colMo={cx("mo-12")}
                  colMi={cx("mi-12")}
                >
                  <div className={cx("pro-frame")}>
                    <ReactPlayer
                      url={videoLink}
                      width="98%"
                      height="90%"
                      controls={true}
                    />
                  </div>
                </GridSystem>
              );
            })}
          </div>
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
