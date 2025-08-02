import styles from "./Rents.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useState, useEffect } from "react";

const rentServices = [
  {
    id: "1",
    package: "Quay phim",
    price: "300k/h",
    desc1: "- Phòng có điều hoà",
    desc2: "- Có cửa sổ",
    desc3: "- Toilet bên trong",
    desc4: "- Wifi",
    desc5: "- Đèn livestream (RGB và đơn màu)",
  },
  {
    id: "2",
    package: "Livestream - Chụp ảnh",
    price: "150k/h",
    desc1: "- Phòng có điều hoà",
    desc2: "- Có cửa sổ",
    desc3: "- Toilet bên trong",
    desc4: "- Wifi",
    desc5: "- Đèn livestream (RGB và đơn màu)",
  },
  {
    id: "3",
    package: "Thu âm & sản xuất nhạc",
    price: "250k/h",
    desc1:
      "- DAW: Ableton 12, FL 21, Reaper, Cubase, StudioOne, Logic Pro, LUNA",
    desc2: "- Soundcard: Apollo Twin",
    desc3: "- Preamp: ART TPS II",
    desc4:
      "- Micro: Shure SM58 (dynamic), AKG C2000B(Condenser), AKG C214 (Condenser)",
    desc5: "- Plugin, sample đa dạng ",
    desc6: "- Hệ thống lọc điện chống nhiễu triệt để",
  },
];

function Rents() {
  const [showTabAnimation, setShowTabAnimation] = useState(false);

  useEffect(() => {
    setShowTabAnimation(true);

    return () => {
      setShowTabAnimation(false);
    };
  }, []);

  return (
    <div className={cx("wrapper", { "active-tab": showTabAnimation })}>
      {rentServices.map((rent) => {
        return (
          <div key={rent.id} className={cx("frame")}>
            <div className={cx("top")}>
              <h1 className={cx("top-title")}>{rent.package}</h1>
              <h2 className={cx("price")}>{rent.price}</h2>
            </div>
            <div className={cx("mid")}>
              <p className={cx("desc")}>{rent.desc1}</p>
              <p className={cx("desc")}>{rent.desc2}</p>
              <p className={cx("desc")}>{rent.desc3}</p>
              <p className={cx("desc")}>{rent.desc4}</p>
              <p className={cx("desc")}>{rent.desc5}</p>
            </div>
            <div className={cx("bottom")}></div>
          </div>
        );
      })}
    </div>
  );
}

export default Rents;
