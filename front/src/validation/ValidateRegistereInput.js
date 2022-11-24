import validator from "validator";
const validateRegisterInput=(data)=>{
    let errors = {};
    
    const {password}=data;
    if(validator.isEmpty(password)){
        errors.password = "Password is required";
    }
    return {
        isInvalid: Object.keys(errors).length>0,
        errors:errors
    }

};
export default validateRegisterInput;