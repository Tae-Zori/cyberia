import { useEffect, useState } from "react";
import { fetchData } from "../data/Data";
import CategoryBtn from "../components/UI/button/CategoryBtn";
import cl from "./Cases.module.scss";
import Card from "../components/UI/Card/Card";
import Form from "../components/UI/form/Form";
import Loader from "../components/UI/loader/Loader";
import iconForm from "../assets/iconForm.svg";

export interface ICategoria {
    id: number;
    name: string;
}

export interface IProject {
    id: number;
    title: string;
    slug: string;
    project_url: null | string;
    image: string;
    image_dark: string;
    description: string;
    geo: {
        lat: null | string;
        lng: null | string;
    };
    categories: ICategoria[];
}

export interface ICategories {
    items: ICategoria[];
}

export interface IProjects {
    items: IProject[];
}

export const Cases = () => {
    const [categories, setCategories] = useState<ICategories | null>(null);
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
    const [loadingProjects, setLoadingProjects] = useState<boolean>(true);
    const [errorCategories, setErrorCategories] = useState<string>("");
    const [projects, setProjects] = useState<IProjects | null>(null);
    const [errorProjects, setErrorProjects] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [filteredProjects, setFilteredProjects] = useState<
        IProject[] | undefined | null
    >(null);

    useEffect(() => {
        fetchData(
            "https://api.test.cyberia.studio/api/v1/project-categories",
            setCategories,
            setLoadingCategories,
            setErrorCategories
        );
        fetchData(
            "https://api.test.cyberia.studio/api/v1/projects",
            setProjects,
            setLoadingProjects,
            setErrorProjects
        );
    }, []);
    useEffect(() => {
        setFilteredProjects(projects?.items);
    }, [projects]);

    const fillterProjects = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
            setFilteredProjects(projects?.items);
        } else {
            setSelectedCategory(category);
            const sortProjects = projects?.items.filter((item, index) => {
                return item.categories[0].name === category;
            });
            setFilteredProjects(sortProjects);
        }
    };

    return (
        <article className={cl.cases}>
            {loadingCategories || loadingProjects ? (
                <div className={cl.cases__loader}>
                    <Loader />
                </div>
            ) : errorCategories || errorProjects ? (
                <p className={cl.cases__error}>Не удалось получить данные</p>
            ) : (
                <>
                    <div className={cl.cases__wrapperContent}>
                        <h1 className={cl.cases__title}>Кейсы</h1>

                        <section className={cl.cases__categories}>
                            {categories &&
                                categories.items.map((item) => (
                                    <CategoryBtn
                                        key={item.id}
                                        onClick={() =>
                                            fillterProjects(item.name)
                                        }
                                        selected={
                                            selectedCategory === item.name
                                        }
                                    >
                                        {item.name}
                                    </CategoryBtn>
                                ))}
                        </section>
                        <section className={cl.cases__projects}>
                            {projects &&
                                filteredProjects?.map((item) => (
                                    <Card key={item.id} project={item} />
                                ))}
                        </section>
                    </div>

                    <div className={cl.cases__wrapperForm}>
                        <section className={cl.cases__form}>
                            <div className={cl.cases__formTitle}>
                                <img src={iconForm} alt="icon" />
                                <p>
                                    Расскажите <br /> о вашем проекте:
                                </p>
                            </div>
                            <Form />
                        </section>
                    </div>
                </>
            )}
        </article>
    );
};
