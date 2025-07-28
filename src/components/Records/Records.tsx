import styles from "./Records.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const recordSevices = [
  { id: "1", package: "Thu lấy vocal", desc: "" },
  { id: "2", package: "Thu dựng demo", desc: "" },
  { id: "3", package: "Thu Mix Master cơ bản", desc: "" },
  { id: "4", package: "Thu Mix Master nâng cao", desc: "" },
  { id: "5", package: "Thu Mix Master chuyên nghiệp", desc: "" },
];

function Records() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("boxes")}></div>
      <div className={cx("boxes")}></div>
      <div className={cx("boxes")}></div>
      <div className={cx("boxes")}></div>
      <div className={cx("boxes")}></div>
    </div>
  );
}

export default Records;
