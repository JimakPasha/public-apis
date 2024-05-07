import { filterArticleType } from "../../../entities";

export const filters = [
    {id: 1, label: "Featured", type: filterArticleType.IS_FEATURED},
    {id: 2, label: "Has Event", type: filterArticleType.IS_HAS_EVENT},
    {id: 3, label: "Has Launch", type: filterArticleType.IS_HAS_LAUNCH},
]