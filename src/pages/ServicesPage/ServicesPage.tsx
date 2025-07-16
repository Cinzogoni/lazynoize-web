import styles from "./ServicesPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { pageNameClasses } from "../../layouts/Header/Header";

function ServicesPage() {
  return (
    <div className={cx(pageNameClasses.ser)}>
      <h1
        style={{
          fontSize: "3.2rem",
        }}
      >
        Dịch vụ của chúng tôi
      </h1>
    </div>
  );
}

export default ServicesPage;
