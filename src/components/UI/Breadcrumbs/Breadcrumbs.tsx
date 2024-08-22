import { Link, useLocation } from "react-router-dom";
import cl from "./Breadcrumbs.module.scss";

interface IPageNames {
    [key: string]: string;
}

const pageNames: IPageNames = {
    home: "Главная",
    cases: "Кейсы",
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    if (pathnames.length <= 1) {
        return null;
    }
    return (
        <ol aria-label="breadcrumbs" className={cl.breadcrumbs}>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                const displayName = pageNames[name] || name;
                return (
                    <li
                        key={name}
                        className={`${cl.breadcrumbs__crumb} ${
                            isLast ? cl["breadcrumbs__crumb--active"] : ""
                        }`}
                    >
                        {isLast ? (
                            displayName
                        ) : (
                            <Link to={routeTo}>{displayName} /</Link>
                        )}
                    </li>
                );
            })}
        </ol>
    );
};
export default Breadcrumbs;
