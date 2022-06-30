import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [case1, setCase1] = useState(false);
  const [case2, setCase2] = useState(false);
  const [case3, setCase3] = useState(false);
  const [case4, setCase4] = useState(false);
  const handleChange = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    password.length >= 8 ? setCase1(true) : setCase1(false);
    password.match(/[a-z]/g) != null ? setCase2(true) : setCase2(false);
    password.match(/[A-Z]/g) != null ? setCase3(true) : setCase3(false);
    password.match(/[0-9]/g) != null ? setCase4(true) : setCase4(false);
  }, [password]);
  return (
    <div className={styles.inputDiv}>
      <div className={styles.searchBar}>
        <form>
          <input
            className={styles.input}
            type={"password"}
            value={password}
            onChange={handleChange}
          />
        </form>
      </div>
      {password.length > 0 && (
        <div className={styles.hintDiv}>
          <ul className={styles.list}>
            <li className={case1 ? styles.star : ""}>At least 8 Characte</li>
            <li className={case2 ? styles.star : ""}>
              Lower Case Letter (a-z)
            </li>
            <li className={case3 ? styles.star : ""}>
              Upper Case Letter (A - Z)
            </li>
            <li className={case4 ? styles.star : ""}>Numbers (0 - 9)</li>
          </ul>
        </div>
      )}
    </div>
  );
}
