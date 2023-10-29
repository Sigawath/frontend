
const SignupValidation = (formData) => {
    let errors = {}

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/

    if(!formData.username) {
        errors.username = "Invalid username"
    } 
    
    if(!formData.password){
        errors.password = "Invalid password"
    } else if (!regExp.test(formData.password)){
        errors.password = "Invalid password"
    } 

    if(!formData.cpassword) {
        errors.cpassword = "Invalid confirm password"
    } else if(formData.cpassword !== formData.password){
        errors.cpassword = "Invalid confirm password"
    }
    
    // if(regExp.test(formData.password) && formData.username) {
    //     window.location.href = '/blank';
    // }

    return errors;
}

export default SignupValidation;