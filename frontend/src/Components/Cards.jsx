import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [phones,setPhones] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/mobiles/')
        .then(response=>response.json())
        .then(data=>setPhones(data))
    },[]);
    console.log(phones);
    
    return (
        <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-2 p-4">
            {
                phones.map(phone=><Card phone={phone} key={phone.id}></Card>)
            }
        </div>
    );
};

export default Cards;