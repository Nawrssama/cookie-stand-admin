import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/main";
import ReportTable from "../components/ReportTable";

export default function Home() {


  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      
      <Header />
      <Main />
      <ReportTable />
      <Footer />

    </>
  );
}






