import React, { useState } from "react";


const Gender = ()=>{
    let [item,setItem]=useState([]);


    function genderValue(event){
        event.preventDefault();
        if(event.target.value=="male"){
            setItem([event.target.value,"shirt"]);
        }else{
            setItem([event.target.value,"dress"]);
        }
    }

    return (
        <div>
           <div>
            <h2>Select your gender:</h2>
            <input type="radio" value="male" name="gender" onClick={genderValue}/>Male
            <input type="radio" value="female" name="gender" onClick={genderValue}/>Female
           </div>

           <h2>Select your {item[1]} size</h2>
           {item[0]==="male" &&
            <select>
                <option>Select size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
            }
            
            {item[0]==="female" && 
            <select>
                <option>Select size</option>
                <option>2</option>
                <option>4</option>
                <option>6</option>
            </select>
            }
        </div>
    );
}

export default Gender;