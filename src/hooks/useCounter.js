
import React,{useState} from "react";

export const useCounter = ()=>
{
    const initCounter=0;
    const max=5;
    const min=0;
    const [counter,setCounter]=useState(initCounter);
    const incrementCounter = (step=0)=>{
        if(counter<max)
        {
            setCounter(counter+step);
        }
    };

    const resetCounter = ()=>
    {
        setCounter(initCounter);
    };

    const decrementCounter=(step=1)=>
    {
        if(counter>min)
        {
            setCounter(counter-step);
        }
    };
    return[counter,incrementCounter,decrementCounter,resetCounter];
};