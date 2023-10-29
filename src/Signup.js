import { useState } from "react";
import styles from "./Login.module.css"

const Signup = (props) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        cpassword: "",
    });
    const [message, setMessage] = useState("");

    const onChange = (e) => {
        setFormData((prev) => {
          let helper = { ...prev };
          helper[`${e.target.id}`] = e.target.value;
          return helper;
        });
      };
    

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(formData.cpassword !== formData.password){
            setMessage("password do not match.")
            return;
        } else if(formData.username.trim().length === 0 ||
        formData.password.trim().length === 0 ||
        formData.cpassword.trim().length === 0) {
            setMessage("All field are required")
            return
        } else if(formData.username.length < 4){
            setMessage("username or email should atleast be 4 characters long.");
            return;
        } else if(formData.password.length < 8){
            setMessage("password should atleast be 8 characters long.");
            return;
        }
            setMessage("");
        console.log("FORM DATA", formData);
    };

    return (
        <div className={styles["main"]}>
            <form className={styles["form"]} onSubmit={onSubmitHandler}>
                <div className={styles["user-image"]}>
                    <div className={styles["head"]}/>
                    <div className={styles["body"]}/>
                </div>
                <p className={styles["heading"]}>Login</p>
                <div className={styles["inputs-div"]}>
                    {/* change to email type */}
                <input
                    onChange={onChange}
                    value={formData.username}
                    type={"text"}
                    id="username"
                    name="username"
                    placeholder="username or email"
                />
                <div className={styles["err-msg-div"]}>{message}</div>
                <input
                    onChange={onChange}
                    value={formData.password}
                    type={"password"}
                    id="password"
                    name="password"
                    placeholder="password"
                />
                <input
                    onChange={onChange}
                    value={formData.cpassword}
                    type={"password"}
                    id="cpassword"
                    name="cpassword"
                    placeholder="confirm password"
                />
                <button>submit</button>
                
                </div>
            
                <p className={styles["p-link"]}>
                    Existing user? <span className={styles["link"]}>Log in</span>
                </p>           

            </form>   
        </div>
    )
}

export default Signup;