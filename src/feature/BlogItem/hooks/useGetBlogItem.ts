import { useEffect, useState } from "react"
import { IBlog, getBlogItem } from "../../../entities";

interface IUseGetBlogItemProps {
    id?: string;
}

export const useGetBlogItem = ({ id }: IUseGetBlogItemProps) => {
    const [data, setData] = useState<IBlog>();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (id) {
            setIsLoading(true);
            setIsError(false);
    
            getBlogItem({ id })
                .then((data) => setData(data))
                .catch(() => setIsError(true))
                .finally(() => setIsLoading(false));
        }
    }, [id]);


    return { data, isLoading, isError };
}
