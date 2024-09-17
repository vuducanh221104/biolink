import classNames from "classnames/bind";
import styles from "./ModalNotify.module.scss";
import { ConcertOne } from "../../assets/fontNext";
import AnimationRain from "../AnimationRain";
const cx = classNames.bind(styles);
function ModalNotify() {
  return (
    <div className={cx("modal-container")}>
      <div className={cx("modal-box")}>
        <AnimationRain />
        <h2 className={ConcertOne.className}>THÔNG BÁO !!</h2>
        <p>Chào Mừng Đến Với Dinhhavn ✅</p>
      </div>
    </div>
  );
}

export default ModalNotify;
