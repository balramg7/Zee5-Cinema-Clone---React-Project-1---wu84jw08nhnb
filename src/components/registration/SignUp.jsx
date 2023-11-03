import styles from "./SignUp.module.css";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      const response = await axiosInstance.post("/user/signup", {
        ...formData,
        appType: "ott",
      });

      if (response.status !== 200) {
        alert("Registration successful! You can now log in.");
        // Redirect to login page or perform other actions
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className={styles.registration_page}>
      <Card className={styles.registration_card}>
        <h2 className={styles.registration_heading}>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label className={styles.registration_labels}>Name</label>
            <input
              className={styles.registration_input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_control}>
            <label className={styles.registration_labels}>Email</label>
            <input
              className={styles.registration_input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_control}>
            <label className={styles.registration_labels}>Password</label>
            <input
              className={styles.registration_input}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
              required
            />
          </div>
          <div>
            <button className={styles.registration_btn} type="submit">
              Register
            </button>
          </div>
          
          <div className={styles.registration_para}>
            <p>Already registered? <Link to='/signIn'>Login</Link></p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
