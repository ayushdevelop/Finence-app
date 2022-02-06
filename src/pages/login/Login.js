import { useState } from "react";
import useLogin from "../../hooks/useLogin";

//styles
import styles from "./Login.module.css";

function Login() {
  const { login, error, isPending } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>login</h2>
      <label>
        <span>email</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className="btn">submit</button>}
      {isPending && (
        <button className="btn" disabled>
          loading..
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
