import React, { useState } from "react";


const Gender = ()=>{
    let [item,setItem]=useState("");


    function genderValue(event){
        if(event.target.value === "male"){
            setItem(...item,item.name="shirt",item.size[0]="Small",item.size[0]="Medium",item.size[0]="Large");
        }
        else{
            setItem(...item,item.name="dress",item.size[0]=2,item.size[0]=4,item.size[0]=4);
        }
    }

    return (
        <div>
           <div>
            <h2>Select your gender:</h2>
            <input type="radio" value="male" name="gender" onChange={genderValue}>Male</input>
            <input type="radio" value="female" name="gender" onChange={genderValue}>Female</input>
           </div>

           <div>
            <h2>Select your {item} size</h2>
            <select>
                <option>Select size</option>
                <option></option>
                <option></option>
                <option></option>
            </select>
           </div>
        </div>
    );
}

export default Gender;