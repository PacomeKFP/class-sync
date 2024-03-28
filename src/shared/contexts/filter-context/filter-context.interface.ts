export interface FilterContextInterface {
    currentTags: Array<FilterTag>;
    toggleTag: (tag: FilterTag) => void;
    searchText: string;
    setSearchText: (searchText: string) => void;
}
export type FilterTag = "PENDING" | "IN_PROGRESS" | "COMPLETED";
