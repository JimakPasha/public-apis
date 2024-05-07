import { useEffect, useState } from "react"

import { IArticle, filterArticleType, getArticles } from "../../../entities";

export const useGetArticles = () => {
    const [board, setBoard] = useState<IArticle[]>([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [filter, setFilter] = useState<filterArticleType>(filterArticleType.IS_FEATURED);


    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        getArticles({ filter })
            .then((data) => setBoard(data))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [filter]);

    const handleFilterChange = (filter: filterArticleType) => setFilter(filter);

    return { board, isLoading, isError, filter, handleFilterChange  };
} 