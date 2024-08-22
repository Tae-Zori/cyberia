import { Link } from "react-router-dom";
import cl from "./Logo.module.scss";
import iconLogo from "../../../assets/logo.svg";

const Logo = () => {
    return (
        <>
            <Link to={"/home"}>
                <img className={cl.logo} src={iconLogo} alt="Logo" />
            </Link>
        </>
    );
};

export default Logo;
