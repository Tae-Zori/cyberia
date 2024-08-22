import React from "react";
type SetLoadingFncn = (loading: boolean) => void;
type SetErrorFncn = (error: string) => void;
type SetDataFncn = (data: null) => void;

export function fetchData(
    url: string,
    setData: SetDataFncn,
    setLoading: SetLoadingFncn,
    setError: SetErrorFncn
): void {
    async function fetchAndHandleData() {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setData(data);
            } else {
                setError("Ошибка получения данных");
                console.log("Ошибка API");
            }
        } catch (error: any) {
            setError("Ошибка получения данных");
            console.log("Message", error.message);
        } finally {
            setLoading(false);
        }
    }

    fetchAndHandleData();
}
