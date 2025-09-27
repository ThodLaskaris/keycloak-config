import { useEffect, useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/react";
import { DataTable } from "../../components/table/DataTable.tsx";
import { deviceColumn } from "../../config/deviceConfig/deviceColumn.ts";
import axios from "axios";
import { Button } from "../../components/button/Button.tsx";
import { Pagination } from "../../components/pagination/Pagination.tsx";

const DevicesPage = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15); // ή ό,τι θέλεις
  const [total, setTotal] = useState(0);
  const totalPages = Math.ceil(total / pageSize); 

  useEffect(() => {
    axios.get("https://localhost:7226/api/v1/Devices", {
      headers: {
        "Accept": "*/*",
        "Authorization": "client"
      }
    })
    .then(res => {
      setDevices(res.data.data);
      setLoading(false);
    })
    .catch(err => {
      console.error("API error:", err);
      setDevices([]);
      setLoading(false);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Devices</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? (
          <div>Loading..</div>
        ) : (
          <DataTable
            columns={deviceColumn}
            data={devices || []}
            actions={() => (
              <>
                <Button size='small' color='default' variant='contained' onClick={() => console.log("Edit clicked")}>Edit</Button>
              </>
            )}
          />
        )}
        <Pagination
          page={page}
          pageSize={pageSize}
          totalPages={totalPages}
          onPageChange={setPage}
          onPageSizeChange={size => {
            setPageSize(size);
            setPage(1); // Επαναφορά στην πρώτη σελίδα όταν αλλάζει το μέγεθος σελίδας
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default DevicesPage;