import styles from "./Records.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useState, useEffect } from "react";

const recordServices = [
  {
    id: "1",
    package: "Thu Dựng Vocal",
    price: "",
    desc1: "",
    desc2: "",
  },
  {
    id: "2",
    package: "Mixing & Mastering",
    price: "",
    desc1: "",
  },
  {
    id: "3",
    package: "Thu âm cơ bản",
    price: "800k",
    desc1: "- Có melody +200k, tối đa 2h thu (phụ thu 100k mỗi 30p)",
    desc2:
      "- Micro tầm trung, mixing & mastering cơ bản, FX: Reverb, Delay, Saturation/Distortion…",
  },
  {
    id: "4",
    package: "Thu âm nâng cao",
    price: "1500k",
    desc1: "- Có melody +200k, tối đa 3h thu (phụ thu 150k sau mỗi 30p thu)",
    desc2:
      "- Micro tầm trung cao, Mixing & Mastering Nâng Cao, FX: Reverb, Delay, Bè, Saturation/distortion, air, parallel…",
  },
  {
    id: "5",
    package: "Thu âm chuyên nghiệp",
    price: "2500k",
    desc1: "- Có melody +200k, tối đa 4h thu (phụ thu 200k mỗi 30p)",
    desc2:
      "- Micro tầm cao, Thu và Mixing & Mastering chuyên nghiệp qua DSP (UAD Plugins), FX: Reverb, Delay, Bè, Saturation/Distortion, Air, Parallel,…",
  },
];

function Records() {
  const [showTabAnimation, setShowTabAnimation] = useState(false);

  useEffect(() => {
    setShowTabAnimation(true);

    return () => {
      setShowTabAnimation(false);
    };
  }, []);

  return (
    <div className={cx("wrapper", { "active-tab": showTabAnimation })}>
      {recordServices.map((rec) => {
        return (
          <div key={rec.id} className={cx("boxes")}>
            <div className={cx("top")}>
              <h1 className={cx("top-title")}>{rec.package}</h1>
              <h2 className={cx("price")}>{rec.price}</h2>
            </div>
            <div className={cx("mid")}>
              <p className={cx("desc")}>{rec.desc1}</p>
              <p className={cx("desc")}>{rec.desc2}</p>
            </div>
            <div className={cx("bottom")}></div>
          </div>
        );
      })}
    </div>
  );
}

export default Records;
