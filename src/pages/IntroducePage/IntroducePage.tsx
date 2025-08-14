import styles from "./IntroducePage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { pageNameClasses } from "../../layouts/Header/Header";
import { useState, useEffect } from "react";

import { useAuth } from "../../contexts/AuthContext";

function IntroducePage() {
  const [showPageAnimation, setShowPageAnimation] = useState(false);
  const { isAdmin } = useAuth();

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
      {isAdmin && (
        <div className={cx("CRUD")}>
          <h1 className={cx("EDIT")}>Chỉnh sửa</h1>
        </div>
      )}

      <section className={cx("frame")}>
        <h1 className={cx("title")}>
          Lazy Noize Records - Phòng thu “đúng gu” tạo nên sản phẩm “đúng chất”
        </h1>
        <p className={cx("desc")}>
          Bạn là rapper, ca sĩ, một thương hiệu đang tìm kiếm bản nhạc riêng cho
          chiến dịch branding, hay chỉ đơn giản là người yêu âm nhạc, muốn lưu
          lại bản cover đáng nhớ? Phòng thu Lazy Noize Records sẽ là nơi lý
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

      <section className={cx("frame")}>
        <h1 className={cx("title")}>
          Các dịch vụ nổi bật tại Lazy Noize Records
        </h1>
        <p className={cx("desc")}>
          Lazy Noize Records hiện đang cung cấp đa dạng các dịch vụ phòng thu,
          trong đó nổi bật hơn cả là các gói thu âm và xử lý giọng hát chuyên
          nghiệp, kết hợp ghi hình ngay tại phòng thu để tạo ra những hình ảnh
          chân thực, giúp bạn truyền tải trọn vẹn cảm xúc đến khán giả.{" "}
        </p>
        <img
          src="/lazynoize-web/assets/img/main-BG-03.jpg"
          alt="gioi thieu 03"
          className={cx("img")}
        />
      </section>

      <section className={cx("frame")}>
        <h1 className={cx("title")}>Gói combo thu âm</h1>
        <h3 className={cx("desc")} style={{ fontWeight: "500" }}>
          Lazy Noize Records tin rằng mỗi bản thu đều là một câu chuyện và cảm
          xúc riêng biệt. Vì vậy, chúng tôi mang đến các gói combo linh hoạt,
          đáp ứng đa dạng nhu cầu của khách hàng. Đó bao gồm gói dịch vụ cơ bản
          dành cho những ai muốn lưu giữ kỷ niệm, gói nâng cao cho khách hàng
          mong muốn sản phẩm trở nên chỉn chu hơn, đến gói dịch vụ chuyên
          nghiệp, hướng tới nghệ sĩ và các dự án thương mại cần sự hoàn hảo để
          phát hành. Trong đó:{" "}
        </h3>

        <p className={cx("desc")}>
          <strong className={cx("packages")}>• Gói cơ bản: </strong> Đây là lựa
          chọn lý tưởng cho những ai muốn ghi lại giọng hát rõ ràng, tự nhiên
          với quy trình xử lý âm thanh tối giản nhưng cực kỳ hiệu quả. Phòng thu
          được trang bị micro tầm trung, góp phần tái hiện giọng hát mượt mà,
          trong trẻo. Phần mixing & mastering trong gói này sẽ tập trung vào
          những kỹ thuật cơ bản với hiệu ứng như Reverb, Delay, Saturation và
          Distortion nhằm tạo không gian và chiều sâu cho bản thu. Đặc biệt, với
          thời gian thu 2 tiếng, bạn sẽ có đủ sự thoải mái để thể hiện trọn vẹn
          cảm xúc của mình mà không cần phải quá vội vã.{" "}
        </p>

        <p className={cx("desc")}>
          <strong className={cx("packages")}>• Gói nâng cao: </strong> Gói dịch
          vụ hướng đến những khách hàng có yêu cầu cao hơn về chất lượng âm
          thanh và sự tinh tế trong từng chi tiết. Sử dụng micro tầm trung cao,
          bạn có thể yên tâm bắt trọn sắc thái và cảm xúc trong giọng hát của
          mình. Phần mixing & mastering được thực hiện kỹ lưỡng hơn với các lớp
          bè hòa quyện cùng các hiệu ứng Reverb, Delay, tạo ra một bản phối
          phong phú, mượt mà và có chiều sâu âm thanh vượt bậc. Thời gian thu
          cũng được kéo dài hơn với 3 tiếng, để bạn có đủ sự thoải mái trong
          việc thể hiện hết khả năng của mình, giúp mỗi nốt nhạc đều là một sự
          thăng hoa trọn vẹn.{" "}
        </p>

        <p className={cx("desc")}>
          <strong className={cx("packages")}>• Gói chuyên nghiệp: </strong> Đây
          là gói dành cho những nghệ sĩ, nhóm nhạc hoặc các dự án thương mại đòi
          hỏi chất lượng thu âm và sản xuất đạt chuẩn. Trang thiết bị phòng thu
          với micro cao cấp và hệ thống xử lý âm thanh chuyên nghiệp qua DSP với
          plugin UAD, giúp bạn giữ nguyên và tôn vinh mọi sắc thái của giọng
          hát. Quy trình mixing & mastering cũng được thực hiện tỉ mỉ hơn, tận
          dụng nhiều kỹ thuật hiện đại như Reverb, Delay, các lớp bè,
          Saturation/Distortion, Air và Parallel Processing để tạo ra sản phẩm
          âm nhạc hoàn chỉnh, đầy sức sống và dễ dàng tiếp cận khán giả trên mọi
          nền tảng phát hành. Với thời gian thu tối đa 4 giờ, bạn sẽ có đủ sự
          thoải mái và tập trung để tạo ra một sản phẩm âm nhạc thực sự đột phá,
          xứng tầm.{" "}
        </p>
      </section>
    </div>
  );
}

export default IntroducePage;
