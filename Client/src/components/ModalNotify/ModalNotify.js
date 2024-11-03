import classNames from 'classnames/bind';
import styles from './ModalNotify.module.scss';
import { ConcertOne } from '../../assets/fontNext';
import AnimationRain from '../AnimationRain';
const cx = classNames.bind(styles);
function ModalNotify({ dict }) {
    return (
        <div className={cx('modal-container')}>
            <div className={cx('modal-box')}>
                <AnimationRain />
                <h2 className={ConcertOne.className}>{dict.notification.welcome1}</h2>
                <p>{dict.notification.welcome2}</p>
            </div>
        </div>
    );
}

export default ModalNotify;
