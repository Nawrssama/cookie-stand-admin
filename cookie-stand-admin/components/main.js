import { useState } from "react";
import Form from "./CreateForm";

export default function Main({formData,setFormData}) {

    
    function submitHandler(event) {
        event.preventDefault();
        // const data = new FormData(event.target);

        const inputs = {
            location: event.target.location.value,
            min: event.target.min.value,
            max: event.target.max.value,
            avg: event.target.avg.value,
        };
        setFormData([...formData,inputs]);


    }
    return (
        <main className="flex flex-col items-center justify-center">
            <Form handler={submitHandler} />
            {/* <h3 className="text-2xl text-gray-500" >{JSON.stringify(formData)}</h3> */}
        </main>
    )
}