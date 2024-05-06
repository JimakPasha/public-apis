import { api } from "../../shared/api";
import { BLOG_URL, LIMIT } from "./constants";
import { IBlogList } from "./interfaces";

interface IGetBlogListProps {
    page: number;
}

export const getBlogList = async ({ page }: IGetBlogListProps): Promise<IBlogList> => {
    const offset = (page - 1) * LIMIT;
    const { data } = await api.get(`${BLOG_URL}/?limit=${LIMIT}&offset=${offset}`);

    return data;
}
