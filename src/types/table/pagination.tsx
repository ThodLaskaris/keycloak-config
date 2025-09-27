export interface PaginationProps {
    page: number;
    pageSize: number;
    onPageChange: (newPage: number) => void;
    onPageSizeChange: (newPageSize: number) => void;
}
export interface PaginationState extends PaginationProps {
    totalPages: number;
    pageSizeOptions?: number[];
}