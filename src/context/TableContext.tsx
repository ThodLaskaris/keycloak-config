import { createContext, ReactNode, useContext, useState } from "react";
import { TableContextProps } from "../types/context/table/tableContext.ts";


const TableContext = createContext<TableContextProps<any> | null>(null);

export function useTableContext<T>() {
    const context = useContext(TableContext);

    if (!context) throw new Error('wrong usage of useTableContext');
    return context as TableContextProps<T>;
}

export function TableProvider<T>({ children} : { children: ReactNode}) {
    const [data, setData] = useState<T[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [total, setTotal] = useState(0);

    return (
        <TableContext.Provider 
        value={{
            data, setData,
            page, setPage,
            pageSize, setPageSize,
            total, setTotal
        }}>
            {children}
        </TableContext.Provider>
    )
}