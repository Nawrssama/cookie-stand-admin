import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState()
  function submitHandler(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    const inputs = {
      location: data.get('location'),
      min: data.get('min'),
      max: data.get('max'),
      avg: data.get('avg'),
    };
    setFormData(inputs);
  }
    
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta />
      </Head>

      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <main className="flex flex-col items-center justify-center">
          <Form handler={submitHandler} />
          <h3 className="text-2xl text-gray-500" >{formData?JSON.stringify(formData):"Report Table Comming Soon..."}</h3>
        </main>
        <Footer />


      </div>


    </>
  );
}
function Header() {
  return (
    <header className="flex items-center justify-between p-8 text-4xl bg-green-500 text-black-500">
      <h1>Cookie Stand Admin</h1>
    </header>
  );
}

function Footer() {
  return (
    <>
    <footer className="flex items-center pl-20 bg-green-500 h-24">
      <h1 className="flex text-3xl justify-center ">&copy;2023</h1>
    </footer>
    </>
  )
}

function Form(props) {
  return (
    <form className="flex flex-col items-center w-3/5 p-4 m-8 bg-green-300 rounded-md shadow-2xl text-black-500" onSubmit={props.handler}>
      <h2 className="mb-8 font-serif text-2xl" >Create Cookie Stand</h2>



      <label className="flex w-full gap-2 mb-12 text-black-500">
        <span className="text-black-500">Location</span>
        <input className="w-full text-black-500" type="text" name="location" />
      </label>

      <div className="flex flex-col gap-8 lg:flex-row">
        <label className="flex flex-col text-black-500">
          <span className="flex flex-col text-black-500">Minimum Customers per Hour</span>
          <input className=" text-black-500" type="number" name="min" />
        </label>
        <label className="flex flex-col text-black-500">
          <span className=" text-black-500">Maximum Customers per Hour</span>
          <input className=" text-black-500" type="number" name="max" />
        </label>
        <label className="flex flex-col text-black-500">
          <span className=" text-black-500">Average Cookies per Sale</span>
          <input className="text-black-500" type="number" name="avg" />
        </label>

        <button className="p-8 bg-green-500 rounded-md shadow-2xl text-black-500 hover:bg-green-700" type="submit">Create</button>
      </div>
    </form>
  )
}

