import { useState, useEffect } from "react";
import { fetchArticles } from "../services/api";

const useArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const data = await fetchArticles();
                setArticles(data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setLoading(false);
            }
        };

        getArticles();
    }, []);

    return { articles, loading };
};

export default useArticles;
