import { useState } from "react";
import styles from "./Login.module.css"
import validation from "./validation"
import {Link} from 'react-router-dom'

const Login = (props) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [errors, setError] = useState("");
    

    // function LoginForm({
        
    // })

    const onChange = (e) => {
        setFormData((prev) => {
          let helper = { ...prev };
          helper[`${e.target.id}`] = e.target.value;
          return helper;
        });
      };
    

    const onSubmitHandler = (e) => {
        e.preventDefault();

        setError(validation(formData));

        // if(formData.username.length < 4){
        //     setMessage("username or email should atleast be 4 characters long.");
        //     return;
        // } else if(formData.password.length < 8){
        //     setMessage2("password should atleast be 8 characters long.");
        //     return;
        // }
        //     setMessage("");
        // console.log("FORM DATA", formData);
        console.log("FORM DATA", formData);
    };

    return (
        <div className={styles["main"]}>
            <form className={styles["form"]} onSubmit={onSubmitHandler}>
                <div className={styles["user-image"]}>
                    <div className={styles["head"]}/>
                    <div className={styles["body"]}/>
                </div>
                <p className={styles["heading"]}>Welcome Back!</p>
                <p className={styles["subheading"]}>Sign in to your account to continue</p>
                <div className={styles["inputs-div"]}>
                    {/* change to email type */}
                    <label className={styles["required-field"]}>Email</label>
                <input
                    onChange={onChange}
                    labelText="Email"
                    value={formData.username}
                    type={"text"}
                    id="username"
                    name="username"
                    placeholder="Email"
                />
                
                {errors.username && <div style = {{color: "red", marginTop: "-.9cap"/*, marginBottom: "0.5cap"*/}}>{errors.username}</div>}
                {/* <div className={styles["err-msg-div"]}>{message}</div> */}
                <label className={styles["required-field"]}>Password</label>
                <input
                    onChange={onChange}
                    value={formData.password}
                    type={"password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                />
                {errors.password && <div style = {{color: "red", marginTop: "-.9cap", marginBottom: "0.5cap"}}>{errors.password}</div>}

                <label>Forgot password?</label>
                <button>SIGN IN</button>
                
                </div>
               
                <p className={styles["alignleft"]}>New user?<Link to='/signup' className={styles["alignright"]}>Sign up!</Link></p>    
                
            </form>   
        </div>
    )
}

export default Login;