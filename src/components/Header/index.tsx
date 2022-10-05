import InputToggle from "../InputToggle";
import s from "./Header.module.scss";

const Header = (): JSX.Element => {
  return (
    <div className={s.header}>
      <div className={s.header__content}>
        <a href="#">
          <h1>Where in the world</h1>
        </a>
        <InputToggle />
      </div>
    </div>
  );
};

export default Header;
