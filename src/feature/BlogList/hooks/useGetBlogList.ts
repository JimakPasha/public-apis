import { useEffect, useState } from "react"
import { IBlog, getBlogList } from "../../../entities";
import { LIMIT } from "../../../entities/blog/constants";

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
                const newTotalPages = Math.ceil(data.count / LIMIT)
                setTotalPages(newTotalPages);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [page]);

    const handleChangePage = (_: unknown, value: number) => setPage(value);

    return { list, isLoading, isError, page, totalPages, handleChangePage };
} 