import { IonCol, IonGrid, IonItemDivider, IonRow } from "@ionic/react";
import { TableProps } from "../../types/table/table.tsx";

export function DataTable<T extends Record<string, any>>({ columns, data, actions }: TableProps<T>) {
    return (
        <IonGrid>
            <IonRow>
                {columns.map(column => (
                    <IonCol key={column.key} style={{ textAlign: 'center' }}>{column.header}</IonCol>
                ))}
                {actions && <IonCol>Actions</IonCol>}
            </IonRow>
             <IonItemDivider style={{margin: 0, padding: 0, minHeight: 0, height: '1px', background: '#222'}}/>
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
                            <IonCol key={column.key} style={{ textAlign: 'center' }}>{row[column.key]}</IonCol>
                        ))}
                        {actions && <IonCol>{actions(row)}</IonCol>}
             <IonItemDivider style={{margin: 0, padding: 0, minHeight: 0, height: '1px', background: '#222'}}/>
                    </IonRow>
                    </>
                ))
            )}
            
        </IonGrid>
        
    );
}