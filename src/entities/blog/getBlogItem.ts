import { api } from "../../shared/api";
import { BLOG_URL } from "./constants";
import { IBlog } from "./interfaces";

interface IGetBlogItemProps {
    id: string;
}

export const getBlogItem = async ({ id }: IGetBlogItemProps): Promise<IBlog> => {
    const { data } = await api.get(`${BLOG_URL}/${id}`);

    return data;
}
