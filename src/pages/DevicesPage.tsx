import { useEffect, useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import { DataTable } from "../components/tables/DataTable.tsx";
import { deviceColumn } from "../config/deviceConfig/deviceColumn.ts";
import axios from "axios";

const DevicesPage = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <div>Loading...</div>
        ) : (
          <DataTable
            columns={deviceColumn}
            data={devices || []}
            actions={device => (
              <>
                <button>Edit</button>
                <button>Delete</button>
              </>
            )}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default DevicesPage;