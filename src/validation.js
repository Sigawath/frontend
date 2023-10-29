
const validation = (formData) => {
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
    
    if(regExp.test(formData.password) && formData.username) {
        window.location.href = '/blank';
    }
    // else if (formData.password !== /[A-Z]/){
    //    errors.password = "Invalid u"
    // } else if (formData.password !== /[a-z]/){
    //     errors.password = "Invalid s"
    // } else if (formData.password !== /[0-9]/){
    //     errors.password = "Invalid n"
    // }
    return errors;
}

export default validation;