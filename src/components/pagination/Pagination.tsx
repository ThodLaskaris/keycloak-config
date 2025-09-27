import { IonCol,IonRow, IonSelect, IonSelectOption } from "@ionic/react";
import { PaginationState } from "../../types/table/pagination.tsx";
import { Button } from "../button/Button.tsx";

export const Pagination: React.FC<PaginationState> = ({
    page,
    pageSize,
    totalPages,
    onPageChange,
    onPageSizeChange,
    pageSizeOptions = [5, 10, 20, 50, 100, 500]
}) => (
    <IonRow style={{ justifyContent: 'center', alignItems: 'center'}}>
     <IonCol size='auto'
        style={{ display: 'flex', 
        alignItems: 'center', 
        marginRight: '16px' }}>

        <Button
        color='default'
         disabled={page === 1} 
        onClick={() => onPageChange(page -1)}
        >
            Previous
        </Button>
        <>
            Page {page} of {totalPages}
        <Button
        color='default'
         disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        >
            Next
        </Button>
        </>
        </IonCol>
        <IonCol size='auto'
         style={{
             display: 'flex',
          alignItems: 'center' }}>
            
           <span style={{ marginRight: '8px'}}>Rows per page:</span>
            <IonSelect
            value={pageSize}
            onIonChange={e => onPageSizeChange(e.detail.value)}
            interface="popover"
             interfaceOptions={{ cssClass: 'custom-select-popover' }}
            style={{ width: '51px'}}
            >
                {pageSizeOptions.map(size => (
                    <IonSelectOption key={size} 
                    value={size}>
                        {size}
                    </IonSelectOption>
                ))}
            </IonSelect>
            
        </IonCol>
    </IonRow>
)