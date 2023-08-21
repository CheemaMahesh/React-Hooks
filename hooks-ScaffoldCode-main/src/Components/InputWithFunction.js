import { useState,useEffect } from "react";

export default function Input(){
    const [Fname,setFName]=useState("Mahi");
    const [Lname,setLName]=useState("Cheema");


    useEffect(()=>{
        document.title=Fname+" "+Lname;
    });
    useEffect(()=>{
        let timer=setInterval(()=>{
            console.log("Window Width: ",window.innerWidth);
        },2000);
        
            return (clearInterval(timer));
        
    })
   
    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input" value={Fname} onChange={(e)=>setFName(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                    <input className="input" value={Lname} onChange={(e)=>setLName(e.target.value)}/>
            </Row >
        </div>

        <h2>Hello,{Fname} {Lname} </h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
