import s from "./ScrollTop.module.scss";
import {ReactComponent as ArrowUp} from '../../assets/arrow_up.svg'
const ScrollTop = () => {
  const onClickHandler = () => {
    window.scrollTo(0 , 0)
  };
  return <div onClick={onClickHandler} className={s.scroll__top}>
    <ArrowUp width="20px" hegiht="20px"/>
  </div>;
};

export default ScrollTop;
