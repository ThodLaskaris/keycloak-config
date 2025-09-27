import { ReactNode } from "react";

export interface Column {
    header: string;
    key: string;
}
export interface TableProps<T extends Record<string, any>> {
    columns: Column[];
    data: T[];
    actions?: (row: T) => ReactNode;
}