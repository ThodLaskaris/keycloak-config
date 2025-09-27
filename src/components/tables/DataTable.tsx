import { IonCol, IonGrid, IonItemDivider, IonRow } from "@ionic/react";
import { TableProps } from "../../types/tables/table.tsx";


export function DataTable<T extends Record<string, any>>({ columns, data, actions }: TableProps<T>) {
    return (
        <IonGrid>
            <IonRow>
                {columns.map(column => (
                    <IonCol key={column.key}>{column.header}</IonCol>
                ))}
                {actions && <IonCol>Actions</IonCol>}
            </IonRow>
             <IonItemDivider />
            {data && data.length === 0 ? (
                <IonRow>
                    <IonCol style={{ textAlign: 'center'}}>
                        no data
                    </IonCol>
                </IonRow>
            ) : (
                data.map((row, rowIndex) => (
                    <>
                    <IonRow key={rowIndex}>
                        {columns.map(column => (
                            <IonCol key={column.key}>{row[column.key]}</IonCol>
                        ))}
                        {actions && <IonCol>{actions(row)}</IonCol>}
                    </IonRow>
                    <IonItemDivider/>
                    </>
                ))
            )}
        </IonGrid>
    );
}