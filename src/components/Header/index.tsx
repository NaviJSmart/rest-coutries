import {Link } from 'react-router-dom'
import useCountriesAPI from '../../services/useCountriesAPI';
import InputToggle from "../InputToggle";
import s from "./Header.module.scss";

const Header = (): JSX.Element => {
  
  return (
    <div className={s.header}>
      <div className={s.header__content}>
        
        <Link to="/">
          <h1>Where in the world</h1>
        </Link>
        <InputToggle />
      </div>
    </div>
  );
};

export default Header;
