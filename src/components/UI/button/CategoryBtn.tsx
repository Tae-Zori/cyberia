import cl from "./CategoryBtn.module.scss";

interface IPropsBtnCategoria
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    selected: boolean;
    children: string;
}
const CategoriaBtn = ({ selected, children, ...props }: IPropsBtnCategoria) => {
    const className = selected ? `${cl.btn} ${cl.btn__active}` : `${cl.btn}`;
    return (
        <>
            <button className={className} {...props}>
                {children}
            </button>
        </>
    );
};

export default CategoriaBtn;
