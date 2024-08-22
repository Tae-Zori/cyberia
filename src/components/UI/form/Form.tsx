import { useEffect, useState } from "react";
import BtnForm from "../button/BtnForm";
import InputForm from "../input/InputForm";
import cl from "./Form.module.scss";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { validateEmail, validateMessage, validateName } from "./FromValidation";
import { feedbackActions } from "../../../service/feedback";

interface IFormInputs {
    name: string;
    email: string;
    phone: string;
    message: string;
    agree: boolean;
}
const styleToast: any = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
};

export const Form = () => {
    const [isDesk, setIsDesk] = useState<boolean>(window.innerWidth >= 900);
    const [submit, setSubmit] = useState<number>(0);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IFormInputs>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            agree: false,
        },
        mode: "onSubmit",
    });

    useEffect(() => {
        const handleResize = () => {
            setIsDesk(window.innerWidth >= 900);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isDesk) {
            setValue("agree", true);
        }
    }, [isDesk]);

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            if (Object.keys(errors).length === 1) {
                const firstError = Object.values(errors)[0];
                toast.warn(firstError.message, styleToast);
            } else {
                toast.warn("Пожалуйста, введите корректные данные", styleToast);
            }

            for (const key of Object.keys(errors) as Array<keyof IFormInputs>) {
                if (key === "agree") {
                    setValue(key, false);
                } else {
                    setValue(key, "");
                }
            }
        }
    }, [submit]);

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        feedbackActions({
            data,
            styleToast,
            clearFields: () => {
                setValue("name", "");
                setValue("email", "");
                setValue("phone", "");
                setValue("message", "");
                setValue("agree", false);
            },
        });
    };

    return (
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                limit={3}
            />
            <div className={cl.form__container}>
                <div className={cl.form__otherInputs}>
                    <InputForm
                        {...register("name", {
                            required: "Пожалуйста, укажите имя",
                            validate: validateName,
                        })}
                        label={"Ваше имя*"}
                        type="text"
                    />

                    <InputForm
                        {...register("email", {
                            required: "Пожалуйста, укажите email",
                            validate: validateEmail,
                        })}
                        label={"Email*"}
                        type="text"
                    />
                    <InputForm
                        {...register("phone", {
                            required: "Пожалуйста, укажите телефон",
                            pattern: {
                                value: /^(?:\+7|8)\d{10}$/,
                                message: "Некорректный номер телефона",
                            },
                        })}
                        label={"Телефон*"}
                        type="number"
                    />
                </div>
                <InputForm
                    {...register("message", {
                        required: "Пожалуйста, введите сообщение",
                        validate: validateMessage,
                    })}
                    label={"Сообщение*"}
                    type="text"
                />
            </div>

            {isDesk && (
                <div className={cl.form__agree}>
                    <div className={cl.form__box}>
                        <input
                            {...register("agree", {
                                required:
                                    "Необходимо согласие на обработку данных",
                            })}
                            type="checkbox"
                            id="cbx"
                            className={cl.form__checkbox}
                        />
                        <label
                            htmlFor="cbx"
                            className={cl.form__checkmark}
                        ></label>
                    </div>
                    <label>Согласие на обработку персональных данных</label>
                </div>
            )}
            <div className={cl.form__btnBox}>
                <BtnForm
                    type="submit"
                    onClick={() => setSubmit((submit) => submit + 1)}
                >
                    {isDesk ? "Обсудить проект" : "Отправить"}
                </BtnForm>
            </div>

            {!isDesk && (
                <p className={cl.form__agreeMessage}>
                    Нажимая “Отправить”, Вы даете согласие на обработку
                    персональных данных
                </p>
            )}
        </form>
    );
};

export default Form;
