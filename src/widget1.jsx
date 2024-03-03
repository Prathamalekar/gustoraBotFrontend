import React from "react";
import { useState, useEffect } from "react";
async function Widget1(){
    const [data, setdata] = useState('');

    useEffect((props) => {
      fetch('https://localhost:5000/chatbotRequest', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: props.message }),
    }).then((res) => res.json())
        .then((data) => {
          setdata(data.message);
        });
        console.log(data, props)
    }, [data]);
}
export default Widget1;