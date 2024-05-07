import { useEffect, useState } from "react"

import { LIMIT_BOG } from "../../../entities/blog/constants";
import { IBlog, getBlogList } from "../../../entities";

export const useGetBlogList = () => {
    const [list, setList] = useState<IBlog[]>([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        getBlogList({ page })
            .then((data) => {
                setList(data.results);
                const newTotalPages = Math.ceil(data.count / LIMIT_BOG)
                setTotalPages(newTotalPages);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [page]);

    const handleChangePage = (_: unknown, value: number) => setPage(value);

    return { list, isLoading, isError, page, totalPages, handleChangePage };
} 