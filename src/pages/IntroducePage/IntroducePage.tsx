import styles from "./IntroducePage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useTransPage } from "../../provider/PageTransContext";
import { pageNameClasses } from "../../layouts/Header/Header";

function IntroducePage() {
  const { currentPageId, visible } = useTransPage();

  console.log("Current Page ID (from context):", currentPageId);
  console.log("Visible (from context):", visible);

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
