import { useState } from "react";
import cl from "./Header.module.scss";
import Logo from "../UI/logo/Logo";
import Navigation from "../UI/Navigation/Navigation";
import Modal from "../UI/modal/ModalNav";
import iconMenu from "../../assets/menu.svg";

const Header = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    return (
        <header className={cl.header}>
            <div className={cl.header__wrapper}>
                <div className={cl.header__logo}>
                    <Logo />
                </div>
                <nav className={cl.header__nav}>
                    <Navigation />
                </nav>
                <div
                    className={cl.header__menu}
                    onClick={() => setModalActive(true)}
                >
                    <img
                        className={cl.header__iconMenu}
                        src={iconMenu}
                        alt="menu"
                    />
                </div>
            </div>
            {modalActive && <Modal onClose={() => setModalActive(false)} />}
        </header>
    );
};

export default Header;
