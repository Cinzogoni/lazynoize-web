import styles from "../layouts/MainLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cx("container")}>
      <header className={cx("header-wrapper")}>
        <Header />
      </header>

      <main className={cx("main-wrapper")}>{children}</main>

      <footer className={cx("footer-wrapper")}>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
