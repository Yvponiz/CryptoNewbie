import type {NextPge} from 'next';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const poopoo:NextPage = () => {
    let hello:string = "Hello"
    useEffect(() => {
        
    })
    const [hello, setHello] = useState("Hello");
    
    return(
        <h1 onClick={() =>{
            setHello=("goodbye")
        }}></h1>
    )
}