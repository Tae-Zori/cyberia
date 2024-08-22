import cl from "./Card.module.scss";
import { IProject } from "../../../pages/Cases";
import imgCard from "../../../assets/imgCard.svg";

interface IPropsCard {
    project: IProject;
}

export const Card = ({ project }: IPropsCard) => {
    const isReversed =
        project.title == "Газпром" || project.title == "Interior Agency";

    return (
        <div className={cl.card}>
            <img
                className={`${cl.card__img} ${
                    isReversed ? cl["card__img--reversed"] : ""
                }`}
                src={project.image}
                alt="image project"
            />
            <div className={cl.card__box}>
                <img className={cl.card__decoration} src={imgCard} alt="" />
                <div className={cl.card__title}>
                    <span>{project.title}</span>
                </div>
            </div>
            <div className={cl.card__overlay}>
                <div className={cl.card__mobileBox}>
                    <img
                        className={cl.card__decorationMob}
                        src={imgCard}
                        alt=""
                    />
                    <div className={cl.card__titleMob}>
                        <span>{project.title}</span>
                    </div>
                    <p>
                        Онлайн гипермаркет. Для компании были разработаны сайт и
                        мобильное приложение и т.д.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
