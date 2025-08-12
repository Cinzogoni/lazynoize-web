import styles from "./IntroducePage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

// import { useTransPage } from "../../contexts/PageTransContext";
import { pageNameClasses } from "../../layouts/Header/Header";
import { useState, useEffect } from "react";

function IntroducePage() {
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
      <section className={cx("frame")}>
        <h1 className={cx("title")}>
          Lazy Noize Records - Phòng thu “đúng gu” tạo nên sản phẩm “đúng chất”
        </h1>
        <p className={cx("desc")}>
          - Bạn là rapper, ca sĩ, một thương hiệu đang tìm kiếm bản nhạc riêng
          cho chiến dịch branding, hay chỉ đơn giản là người yêu âm nhạc, muốn
          lưu lại bản cover đáng nhớ? Phòng thu Lazy Noize Records sẽ là nơi lý
          tưởng để biến những ý tưởng, giai điệu và câu từ thành một sản phẩm âm
          nhạc chỉn chu, mang đậm màu sắc cá nhân của chính bạn.{" "}
        </p>
        <img
          src="/lazynoize-web/assets/img/main-BG.png"
          alt="gioi thieu 01"
          className={cx("img")}
        />
      </section>

      <section className={cx("frame")}>
        <h1 className={cx("title")}>Giới thiệu về Lazy Noize Records</h1>
        <p className={cx("desc")}>
          Được thành lập từ năm 2018, Lazy Noize Records là nơi hội tụ những
          người cùng chung đam mê làm nhạc chuyên nghiệp, bao gồm nhạc công,
          producer, beat maker, kỹ thuật viên thu âm và các chuyên gia
          mix/master.{" "}
        </p>
        <p className={cx("desc")}>
          Mỗi thành viên đều sở hữu những thế mạnh riêng, hướng đến mục tiêu xây
          dựng Lazy Noize Records trở thành một phòng thu sản xuất nhạc mang dấu
          ấn riêng - nơi mọi ý tưởng âm nhạc đều được lắng nghe và phát triển
          đến phiên bản tốt nhất.
        </p>
        <p className={cx("desc")}>
          Đội ngũ của Lazy Noize Records đã đồng hành cùng nhiều nghệ sĩ nổi
          bật, từng tham gia các sân chơi âm nhạc lớn. Qua đó, chúng tôi đã tích
          lũy được kinh nghiệm xử lý đa dạng thể loại, từ những dòng nhạc hiện
          đại đến truyền thống, cổ điển.
        </p>
        <p className={cx("desc")}>
          Trên thực tế, Lazy Noize Records cũng không bó mình trong một khuôn
          mẫu cố định mà hướng đến sự linh hoạt trong các thể loại âm nhạc. Và
          đặc biệt, điều luôn được ưu tiên tại phòng thu chúng tôi chính là cảm
          xúc và sự chỉn chu trong từng bản thu.
        </p>
        <p className={cx("desc")}>
          Với Lazy Noize Records, mỗi bản thu không chỉ là sản phẩm kỹ thuật mà
          còn là mảnh cảm xúc được chăm chút, lắng nghe và hoàn thiện để trở
          thành phiên bản trọn vẹn nhất.
        </p>
        <img
          src="/lazynoize-web/assets/img/main-BG-01.jpg"
          alt="gioi thieu 01"
          className={cx("img")}
        />
      </section>
    </div>
  );
}

export default IntroducePage;
