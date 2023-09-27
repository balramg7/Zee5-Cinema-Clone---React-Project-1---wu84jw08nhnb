import styles from "./SignIn.module.css";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          body: JSON.stringify({ ...formData, appType: "ott" }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Login successful! Redirect to user profile.");
        // Redirect to user profile or perform other actions
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className={styles.login_page}>
      <Card className={styles.login_card}>
        <h2 className={styles.login_heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.login_control}>
            <label className={styles.login_labels}>Email</label>
            <input
              className={styles.login_input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.login_control}>
            <label className={styles.login_labels}>Password</label>
            <input
              className={styles.login_input}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button className={styles.login_btn} type="submit">
              Login
            </button>
          </div>
          <div className={styles.login_para}>
            <p> <Link to='/resetPass'>Forgotten Password?</Link></p>
          </div>
          <div className={styles.login_para}>
            <p>New to ZEE5 ? <Link to='/signUp'>Register</Link></p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
