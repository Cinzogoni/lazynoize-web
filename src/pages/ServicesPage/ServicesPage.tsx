import styles from "./ServicesPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { pageNameClasses } from "../../layouts/Header/Header";

import { Fragment, useState, useEffect } from "react";
import Records from "../../components/Records/Records";
import Rents from "../../components/Rents/Rents";

const services = [
  { id: "1", package: "records", title: "Thu âm" },
  { id: "2", package: "beat", title: "Hoà âm phối khí" },
  { id: "3", package: "rent", title: "Cho Thuê" },
  { id: "4", package: "media", title: "Media" },
];

function ServicesPage() {
  const [activePackage, setActivePackage] = useState(services[0].package);
  const [showPageAnimation, setShowPageAnimation] = useState(false);

  useEffect(() => {
    setShowPageAnimation(true);

    return () => {
      setShowPageAnimation(false);
    };
  }, []);

  return (
    <div
      className={cx(pageNameClasses.ser, {
        "active-transition": showPageAnimation,
      })}
      style={{}}
    >
      <div className={cx("frame")}>
        {services.map((title) => {
          return (
            <h1
              key={title.id}
              className={cx("title", {
                "active-title": title.package === activePackage,
              })}
              onClick={() => setActivePackage(title.package)}
            >
              {title.title}
            </h1>
          );
        })}
      </div>
      <div className={cx("tab-container")}>
        {activePackage === "records" ? (
          <div className={cx("tab")}>
            <Records />
          </div>
        ) : activePackage === "beat" ? (
          <div className={cx("tab")}></div>
        ) : activePackage === "rent" ? (
          <div className={cx("tab")}>
            <Rents />
          </div>
        ) : activePackage === "media" ? (
          <div className={cx("tab")}></div>
        ) : (
          <Fragment />
        )}
      </div>
    </div>
  );
}

export default ServicesPage;
