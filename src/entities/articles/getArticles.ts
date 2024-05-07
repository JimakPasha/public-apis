import { api } from "../../shared/api";
import { ARTICLE_URL, LIMIT_ARTICLE, filterArticleType } from "./constants";
import { IArticle } from "./interfaces";

interface IGetBlogListProps {
    filter: filterArticleType;
}

export const getArticles = async ({ filter }: IGetBlogListProps): Promise<IArticle[]> => {
    const { data } = await api.get(`${ARTICLE_URL}/?limit=${LIMIT_ARTICLE}&${filter}=true`);

    return data.results;
}
