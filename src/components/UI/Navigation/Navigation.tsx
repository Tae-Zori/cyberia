import cl from "./Navigation.module.scss";
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <ul className={cl.nav}>
            <li className={cl.nav__link}>
                <Link className={cl.nav__link} to="#">
                    Агентство
                </Link>
            </li>
            <li className={cl.nav__li}>
                <Link className={cl.nav__link} to="#">
                    Услуги
                </Link>
            </li>
            <li className={cl.nav__li}>
                <Link className={cl.nav__link} to="/home/cases">
                    Кейсы
                </Link>
            </li>
            <li className={cl.nav__li}>
                <Link className={cl.nav__link} to="#">
                    Блог
                </Link>
            </li>
            <li className={cl.nav__li}>
                <Link className={cl.nav__link} to="#">
                    Контакты
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;
