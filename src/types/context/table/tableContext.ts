export interface TableContextProps<T> {
    data: T[];
    page: number;
    pageSize: number;
    total: number;
    setPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
    setData: (data: T[]) => void;
    setTotal: (total: number) => void;
}