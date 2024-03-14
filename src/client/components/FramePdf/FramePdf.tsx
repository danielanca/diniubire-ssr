// import { View } from "./pdfview";
// import { useParams } from "react-router-dom";

// import React, { useEffect, useState } from "react";
// import { getOrderByID } from "./../../data/productList";
// import { OrderViewProps } from "../../utils/OrderInterfaces";
// import styles from "./InvoiceView.module.scss";

// const InvoiceView = () => {
//   let params = useParams();
//   let orderID = params.orderID;

//   const [invoiceData, setInvoiceData] = useState<OrderViewProps | null>(null);
//   useEffect(() => {
//     if (!isNaN(Number(orderID))) {
//       getOrderByID(Number(orderID))
//         .then(response => {
//           setInvoiceData(response);
//         })
//         .catch(error => error);
//     }
//   }, []);

//   const [framedImg, setFramedImg] = useState<any>(null);

//   useEffect(() => {
//     const framedImg = localStorage.getItem("framedImage");

//     if (framedImg) {
//       setFramedImg(framedImg);
//     }
//   }, []);

//   console.log("Mubbaser", framedImg);

//   return (
//     <div className={styles.centerPdf}>
//       <div>
//         <h3 className={styles.text}>
//           {"Pentru a salva factura, dati click dreapta pe factura, apoi 'Salvati ca PDF...' "}
//         </h3>
//       </div>
//       <img src='' alt='' />
//       {framedImg != null ? <View frameImage={framedImg} /> : "Eroare"}
//     </div>
//   );
// };

// export default InvoiceView;

import { View } from "./pdfview";
import { useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { getOrderByID } from "./../../data/productList";
import { OrderViewProps } from "../../utils/OrderInterfaces";
import styles from "./InvoiceView.module.scss";

const InvoiceView = () => {
  let params = useParams();
  let orderID = params.orderID;
  const [invoiceData, setInvoiceData] = useState<OrderViewProps | null>(null);
  useEffect(() => {
    if (!isNaN(Number(orderID))) {
      getOrderByID(Number(orderID))
        .then(response => {
          setInvoiceData(response);
        })
        .catch(error => error);
    }
  }, []);

  return (
    <div className={styles.centerPdf}>
      <div>
        <h3 className={styles.text}>
          {"Pentru a salva factura, dati click dreapta pe factura, apoi 'Salvati ca PDF...' "}
        </h3>
      </div>
      {invoiceData?.framedImg != null ? <View invoiceObject={invoiceData} /> : "Eroare"}
    </div>
  );
};

export default InvoiceView;
