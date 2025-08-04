import styles from "./IntroducePage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

// import { useTransPage } from "../../contexts/PageTransContext";
import { pageNameClasses } from "../../layouts/Header/Header";
import { useState, useEffect } from "react";

function IntroducePage() {
  // const { currentPageId } = useTransPage();

  const [showPageAnimation, setShowPageAnimation] = useState(false);

  useEffect(() => {
    setShowPageAnimation(true);

    return () => {
      setShowPageAnimation(false);
    };
  }, []);

  return (
    <div
      className={cx(pageNameClasses.int, {
        "active-transition": showPageAnimation,
      })}
    >
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
