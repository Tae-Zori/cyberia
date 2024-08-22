export function validateEmail(value: string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (value.trim() === "") {
        return "Email не может быть пустым";
    }

    const isValid = emailPattern.test(value);
    return isValid || "Неверный формат email";
}

export function validateName(value: string) {
    const namePattern = /^[а-яА-ЯёЁ\s]+$/;

    if (value.trim() === "") {
        return "Имя не может быть пустым";
    }

    const isValid = namePattern.test(value);
    return isValid || "Введите корректное имя";
}

export function validateMessage(value: string) {
    const isValid = value.trim() !== "";
    return isValid || "Введите сообщение";
}
