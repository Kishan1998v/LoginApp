import validator from "validator";
const validateLoginInput=(data)=>{
    let errors = {};
    // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const {username,password}=data;
    console.log(username,password);
    
    if(validator.isEmpty(username)){
        errors.username = "Email or Mobile Number is required";
    }
    if(validator.isEmpty(password)){
        errors.password = "Password is required";
    }
    return {
        isInvalid: Object.keys(errors).length>0,
        errors:errors
    }

};
export default validateLoginInput;