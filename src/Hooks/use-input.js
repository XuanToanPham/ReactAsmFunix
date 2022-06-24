import { useState } from "react";

const useInput = (validateValue) =>{
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    let isValidInput ; 
    validateValue(enteredValue).forEach(check => {
        if(check.check === true){
            isValidInput = true;
        }else{
            isValidInput = false;
        }
    })
    let messageError;
    let hasError = false;
    for(let i = 0 ; i < valueIsValid.length; i++){
        if(!valueIsValid[i].check && isTouched){
            hasError = true;
            if(valueIsValid[i].error === "Requied"){
                messageError = "Vui lòng nhập";
            }
            else if(valueIsValid[i].error === "inputName"){
                messageError = "Vui lòng nhập trên 2 ký tự";
            }
            else if(valueIsValid[i].error ==="Salary"){
                messageError = "Chỉ nhập từ 1.0 -> 3.0"
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
        isValid: isValidInput,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        messageError,
    }
}


export default useInput;