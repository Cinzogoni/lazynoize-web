import styles from "./ContactPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useState, useEffect } from "react";
import { pageNameClasses } from "../../layouts/Header/Header";

function ContactPage() {
  const [showPageAnimation, setShowPageAnimation] = useState(false);

  useEffect(() => {
    setShowPageAnimation(true);

    return () => {
      setShowPageAnimation(false);
    };
  }, []);
  return (
    <div
      className={cx(pageNameClasses.cont, {
        "active-transition": showPageAnimation,
      })}
    >
      <h1
        style={{
          fontSize: "3.2rem",
        }}
      >
        Liên hệ chúng tôi
      </h1>
    </div>
  );
}

export default ContactPage;
