import React, { useState } from "react";
import useLocalStorage from "./UseStorage";

const InputField = () => {
    // let [inputFieldValue, setInputFieldValue] = useState("")
    let [value, updateValue] = useLocalStorage("inputdata")
    function saveInputValue(e){
        let data = e.target.value
        updateValue(data)
    }

    return(
        <>
            <div>
                <input type="text"
                    placeholder="Type here .."
                    onChange={saveInputValue}
                />
                {/* <h1>Data entered : {value}</h1> */}
            </div>
        </>
    )
}
export default InputField