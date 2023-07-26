import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/main";
import ReportTable from "../components/ReportTable";
import { useState } from "react";

export default function Home() {

  const [formData, setFormData] = useState([])
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      
      <Header />
      <Main formData={formData} setFormData={setFormData}/>
      {formData.length == 0 ? 
      <h3 className="flex justify-center text-2xl text-gray-500 " >No Cookie Stands Available</h3>
      : <ReportTable formData={formData} />
}     
      
      <Footer />
      
    </>
  );
}






