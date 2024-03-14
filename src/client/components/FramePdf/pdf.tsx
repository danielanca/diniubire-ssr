// import React, { useEffect, useState } from "react";
// import images from "./../../data/images";
// import { InvoiceOrderProps } from "../../utils/OrderInterfaces";
// import { PDFViewer, Page, Text, View, Image, Document, StyleSheet, Font } from "@react-pdf/renderer";
// import strings from "./../../data/strings.json";

// Font.register({
//   family: "Oswald",
//   src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
// });
// const stylesPDF = StyleSheet.create({
//   PDFViewer: {
//     height: "300px",
//   },
//   logo: {
//     width: 74,
//     height: 66,
//   },
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//     width: "800px",
//     height: "900px",
//   },
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//     backgroundColor: "white",
//     display: "flex",
//     flexDirection: "column",
//     width: "800px",
//     height: "900px",
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//     fontFamily: "Oswald",
//   },
//   author: {
//     fontSize: 12,
//     textAlign: "center",
//     marginBottom: 40,
//   },
//   subtitle: {
//     fontSize: 18,
//     margin: 12,
//     fontFamily: "Oswald",
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: "justify",
//     fontFamily: "Times-Roman",
//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 8,
//     textAlign: "center",
//     color: "grey",
//   },
//   headerLeft: {
//     fontSize: 12,
//     marginBottom: 4,
//     textAlign: "left",
//     color: "grey",
//   },
//   pageNumber: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//   },
//   invoiceHeader: {
//     height: "15%",
//   },
//   firstRow: {
//     display: "flex",
//     flexDirection: "row",
//     borderBottom: "0.7px solid black",
//     justifyContent: "space-evenly",
//   },
//   secondRow: {
//     display: "flex",
//     height: "45%",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//   },
//   thirdRow: {
//     display: "flex",
//     flexDirection: "row",
//     height: "15%",
//     borderTop: "1.5px solid black",
//   },
//   fourthRow: {
//     height: "10%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   footerText: {
//     textAlign: "center",
//     width: "100%",
//     padding: "0 2%",
//     fontSize: "12px",
//   },
//   productText: {
//     fontSize: 16,
//     fontFamily: "Times-Roman",
//     border: "0.5px solid black",
//     width: "50%",
//     padding: "0 2%",
//   },
//   productPrice: {
//     fontSize: 16,
//     fontFamily: "Times-Roman",
//     border: "0.5px solid black",
//     width: "25%",
//     padding: "0 2%",
//   },
//   productItemNumber: {
//     fontSize: 16,
//     fontFamily: "Times-Roman",
//     border: "0.5px solid black",
//     width: "25%",
//     textAlign: "center",
//   },
//   totals: { width: "50%", padding: "0 2%", fontSize: "16px" },
// });

// const PDF = ({ frameImage, invoiceObject }: any) => {
//   let productsListInvoice: any[] =
//     typeof invoiceObject.cartProducts === "string" ? JSON.parse(invoiceObject.cartProducts) : null;
//   // let companyInfo = strings.companyData;

//   // let framePdfImg =
//   //   "https://firebasestorage.googleapis.com/v0/b/sapunmontan.appspot.com/o/frameImages%2FEmotionXpert_Logo.png?alt=media&token=52b75ccd-46d3-4099-a512-3a54dfbcd35b";

//   // console.log("Mubbasher Yasieeeen:   " + framePdfImg);

//   console.log("mubbeeee " + invoiceObject);

//   let framePdfImg = frameImage;
//   return (
//     <>
//       <div>
//         <Page size={[360, 504]}>
//           <Image src={framePdfImg} />
//         </Page>
//       </div>
//     </>
//   );
// };

// const PDFView = ({ frameImage }: string | null | any) => {
//   // const [client, setClient] = useState(false);
//   // useEffect(() => {
//   //   setClient(true);
//   // }, []);

//   let framePdfImg = frameImage;

//   return (
//     <div>
//       <PDFViewer width={"500px"} height={"600px"} showToolbar={false}>
//         <PDF frameImage={framePdfImg} />
//       </PDFViewer>
//       <Image src={framePdfImg} />
//     </div>
//   );
// };
// export default PDFView;

import React, { useEffect, useState } from "react";

import { InvoiceOrderProps } from "../../utils/OrderInterfaces";
import { PDFViewer, Page, Text, View, Image, Document, StyleSheet, Font, BlobProvider } from "@react-pdf/renderer";
import strings from "./../../data/strings.json";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});
const stylesPDF = StyleSheet.create({
  logo: {
    width: 74,
    height: 66,
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    width: "595px",
    height: "842px",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    width: "595px",
    height: "842px",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  dataHeadline: {
    fontSize: 12,
    textAlign: "center",
  },
  timestamp: {
    fontSize: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 8,
    textAlign: "center",
    color: "grey",
  },
  headerLeft: {
    fontSize: 12,
    marginBottom: 4,
    textAlign: "left",
    color: "grey",
  },
  headerLeftBold: {
    fontSize: 12,
    marginBottom: 4,
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  invoiceHeader: {
    height: "15%",
    border: "2px solid pink",
    display: "flex",
    flexDirection: "column",
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    border: "1.5px solid #44A4DD",
    padding: "10px",
    justifyContent: "space-evenly",
  },
  secondRow: {
    display: "flex",
    flexDirection: "row",
    border: "1px solid #44A4DD",
    justifyContent: "space-evenly",
    height: "400px",
  },
  thirdRow: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "0.7px solid black",
    justifyContent: "space-evenly",
  },
  fourthRow: {
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    textAlign: "center",
    width: "100%",
    padding: "0 2%",
    fontSize: "12px",
  },
  productNrCrtHeadline: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid #44A4DD",
    width: "15%",
    padding: "0 2%",
    color: "white",
    backgroundColor: "#44A4DD",
  },
  productNrCrt: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid #44A4DD",
    width: "15%",
    padding: "0 2%",
  },
  productText: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid #44A4DD",
    width: "50%",
    padding: "0 2%",
    color: "white",
    backgroundColor: "#44A4DD",
  },
  productPrice: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid #44A4DD",
    width: "25%",
    padding: "0 2%",
    color: "white",
    backgroundColor: "#44A4DD",
  },
  productItemNumber: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid #44A4DD",
    width: "25%",
    textAlign: "center",
    color: "white",
    backgroundColor: "#44A4DD",
  },
  productTextResult: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid #44A4DD",
    width: "50%",
    padding: "0 2%",
    color: "black",
    backgroundColor: "white",
  },
  productPriceResult: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid #44A4DD",
    width: "25%",
    padding: "0 2%",
    color: "black",
    backgroundColor: "white",
  },
  productItemNumberResult: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid #44A4DD",
    width: "25%",
    textAlign: "center",
    color: "black",
    backgroundColor: "white",
  },
  totals: { width: "100%", fontSize: "16px", flexWrap: "nowrap" },
});

const PDF = ({ invoiceObject }: InvoiceOrderProps) => {
  let productsListInvoice: any[] =
    typeof invoiceObject.cartProducts === "string" ? JSON.parse(invoiceObject.cartProducts) : null;
  let companyInfo = strings.companyData;

  return (
    <>
      <div>
        <Page size={[360, 504]}>
          <Image src={invoiceObject.framedImg} />
        </Page>
      </div>
    </>
  );
};

const PDFView = React.memo(({ invoiceObject }: InvoiceOrderProps) => {
  return (
    <div>
      <PDFViewer width={"500px"} height={"300px"} showToolbar={false}>
        <PDF invoiceObject={invoiceObject} />
      </PDFViewer>
    </div>
  );
});
export { PDF, PDFView };
