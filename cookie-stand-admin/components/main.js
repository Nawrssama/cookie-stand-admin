import { useState } from "react";
import Form from "./CreateForm";

export default function Main() {

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
        <main className="flex flex-col items-center justify-center">
            <Form handler={submitHandler} />
            <h3 className="text-2xl text-gray-500" >{JSON.stringify(formData)}</h3>
        </main>
    )
}