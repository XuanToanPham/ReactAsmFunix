import { useState } from "react";

const useInput = (validateValue) =>{
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    let messageError;
    let hasError = false;
    for(let i = 0 ; i < valueIsValid.length; i++){
        if(!valueIsValid[i].check && isTouched){
            console.log(valueIsValid[i]);
            hasError = true;
            if(valueIsValid[i].error === "Requied"){
                messageError = "Vui lòng nhập";
            }
            else if(valueIsValid[i].error === "inputName"){
                messageError = "Vui lòng nhập trên 2 ký tự";
            }
            break;
        }
    }
    const valueChangeHandler = (event) =>{
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) =>{
        setIsTouched(true);
    }

    return{
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        messageError,
    }
}


export default useInput;