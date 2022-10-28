import { Link, useLocation } from "react-router-dom";
import InputToggle from "../InputToggle";
import s from "./Header.module.scss";

const Header = (): JSX.Element => {
  const { pathname } = useLocation();

  const onClickHandle = () => {
    if (pathname === "/") {
      window.location.reload();
    }
  };
  return (
    <div className={s.header}>
      <div className={s.header__content}>
        <Link to="/" onClick={onClickHandle}>
          <h1 >Where in the world</h1>
        </Link>
        <InputToggle />
      </div>
    </div>
  );
};

export default Header;
