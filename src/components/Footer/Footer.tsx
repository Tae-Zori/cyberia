import cl from "./Footer.module.scss";
import Logo from "../UI/logo/Logo";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__wrapper}>
                <section className={cl.footer__logoSection}>
                    <div className={cl.footer__logo}>
                        <Logo />
                    </div>
                    <p>Веб-разработка и усиление IT-команд</p>
                </section>
                <section className={cl.footer__info}>
                    <ul className={cl.footer__address}>
                        <address className={cl.footer__addressItems}>
                            <li>
                                <a href="tel:+79991234567">+7 999 123 45 67</a>
                            </li>
                            <li>hello@cyberia.studio</li>
                            <li>ул.Ярных, д.35, оф.10</li>
                        </address>
                        <nav className={cl.footer__addressItems}>
                            <li>
                                <Link to="#">Агентство</Link>
                            </li>
                            <li>
                                <Link to="#">Услуги</Link>
                            </li>
                            <li>
                                <Link to="/home/cases">Кейсы</Link>
                            </li>
                        </nav>
                        <nav className={cl.footer__addressItems}>
                            <li>
                                <Link to="#">Блог</Link>
                            </li>
                            <li className={cl.footer__navContacts}>
                                <Link to="#">Контакты</Link>
                            </li>
                            <li className={cl.footer__navQuestions}>
                                <Link to="#">Вопросы</Link>
                            </li>
                            <div className={cl.footer__navCrutch}></div>
                        </nav>
                    </ul>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
