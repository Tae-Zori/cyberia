import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IData {
    phone: string;
    email: string;
    message: string;
    name: string;
}

interface IFeedbackData {
    data: IData;
    styleToast: ToastOptions;
    clearFields: () => void;
}

export async function feedbackActions({
    data,
    styleToast,
    clearFields,
}: IFeedbackData) {
    const { phone, email, message } = data;
    const host = `https://api.test.cyberia.studio/api/v1`;
    const url = `${host}/feedbacks?phone=${phone}&email=${email}&message=${message}`;
    const feedbackData = {
        phone: phone.trim(),
        email: email.trim(),
        message: message.trim(),
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feedbackData),
        });

        if (response.status === 200) {
            toast.success("Ваш запрос успешно отправлен", styleToast);
            clearFields();
        } else if (response.status === 422) {
            const errors = await response.json();
            toast.error("Ошибка валидации (422)", styleToast);
            console.log("Validation errors:", errors);
        } else {
            toast.error("Ошибка валидации", styleToast);
            throw new Error("Something went wrong");
        }
    } catch (error: any) {
        toast.error(`${error.message}`, styleToast);
        console.error("Error:", error);
    }
}
