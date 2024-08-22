import cl from "./Main.module.scss";

const Main = ({ children }: any) => {
    return <main className={cl.main}>{children}</main>;
};

export default Main;
