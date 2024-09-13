import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../Navigation/Navigation.module.css";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.container}>
      <nav>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getNavLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
