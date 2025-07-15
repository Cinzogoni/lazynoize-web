import styles from "../HomePage/HomePage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function HomePage() {
  return <div className={cx("homepage-wrapper")}></div>;
}

export default HomePage;
