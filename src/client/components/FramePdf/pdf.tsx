import React, { useEffect, useState } from "react";
import images from "./../../data/images";
import { InvoiceOrderProps } from "../../utils/OrderInterfaces";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import strings from "./../../data/strings.json";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});
const stylesPDF = StyleSheet.create({
  pdfParentContainer: {
    backgroundColor: "black",
  },
  logo: {
    width: 74,
    height: 66,
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    width: "800px",
    height: "900px",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    width: "800px",
    height: "900px",
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
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "0.7px solid black",
    justifyContent: "space-evenly",
  },
  secondRow: {
    display: "flex",
    height: "45%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  thirdRow: {
    display: "flex",
    flexDirection: "row",
    height: "15%",
    borderTop: "1.5px solid black",
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
  productText: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid black",
    width: "50%",
    padding: "0 2%",
  },
  productPrice: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid black",
    width: "25%",
    padding: "0 2%",
  },
  productItemNumber: {
    fontSize: 16,
    fontFamily: "Times-Roman",
    border: "0.5px solid black",
    width: "25%",
    textAlign: "center",
  },
  totals: { width: "50%", padding: "0 2%", fontSize: "16px" },
});

const PDF = ({ invoiceObject }: any) => {
  let productsListInvoice: any[] =
    typeof invoiceObject.cartProducts === "string"
      ? JSON.parse(invoiceObject.cartProducts)
      : null;
  let companyInfo = strings.companyData;

  console.log("firsts", invoiceObject);

  let abc = invoiceObject;
  return (
    <>
      <div className='pdfParentContainer'>
        <Page size={"A4"} wrap>
          <Image src={abc} />
          <Text>{abc}</Text>
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/sapunmontan.appspot.com/o/frameImages%2FEmotionXpert-Logo.png?alt=media&token=809ac854-209c-4733-8c3b-88b14ecbfff4"
            }
          />
          <Image src={"https://img.icons8.com/android/96/000000/phone.png"} />
        </Page>
      </div>
    </>
  );
};

const PDFView = ({ invoiceObject }: string | null | any) => {
  // const [client, setClient] = useState(false);
  // useEffect(() => {
  //   setClient(true);
  // }, []);

  let abc = invoiceObject;

  return (
    <div>
      <PDFViewer width={"600px"} height={"860px"} showToolbar={false}>
        <PDF invoiceObject={invoiceObject} />
      </PDFViewer>
      <Image src={abc} />
      <Text>{abc}</Text>
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/sapunmontan.appspot.com/o/frameImages%2FEmotionXpert-Logo.png?alt=media&token=809ac854-209c-4733-8c3b-88b14ecbfff4"
        }
      />
      <Image src={"https://img.icons8.com/android/96/000000/phone.png"} />
    </div>
  );
};
export default PDFView;
