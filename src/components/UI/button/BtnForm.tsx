import React from "react";
import cl from "./BtnForm.module.scss";

interface IPropsBtnCategoria
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}
const BtnForm = ({ children, ...props }: IPropsBtnCategoria) => {
    return (
        <>
            <button className={cl.btn} {...props}>
                {children}
            </button>
        </>
    );
};

export default BtnForm;
