import classNames from "classnames/bind";
import styles from "./ModalNotify.module.scss";

const cx = classNames.bind(styles);
function ModalNotify() {
  return (
    <div className={cx("modal-container")}>
      <div className={cx("modal-box")}>
        <h2>THÔNG BÁO !!</h2>
        <p>Chào Mừng Đến Với Dinhhavn ✅</p>
      </div>
    </div>
  );
}

export default ModalNotify;
