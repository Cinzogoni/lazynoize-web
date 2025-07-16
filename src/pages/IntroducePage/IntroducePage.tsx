import styles from "./IntroducePage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useTransPage } from "../../provider/PageTransContext";
import { pageNameClasses } from "../../layouts/Header/Header";
import { useState } from "react";

function IntroducePage() {
  const { currentPageId } = useTransPage();
  const [visible, IsVisible] = useState<boolean>(false);

  return (
    <div className={cx(pageNameClasses.int)}>
      <h1
        style={{
          fontSize: "3.2rem",
        }}
      >
        Giới thiệu về team
      </h1>
    </div>
  );
}

export default IntroducePage;
