import { Card } from "@mui/material";
import styles from "./ResetPass.module.css";
import React, { useState } from "react";

const ResetPass = () => {
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        {
          method: "PATCH",
          body: JSON.stringify({ ...formData, appType: "ott" }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert(
          "Password reset successful! You can now log in with your new password."
        );
        // Redirect to login page or perform other actions
      } else {
        alert("Password reset failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className={styles.reset_page}>
      <Card className={styles.reset_card}>
        <h2 className={styles.reset_heading}>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.reset_control}>
            <label className={styles.reset_labels}>Email</label>
            <input
              className={styles.reset_input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.reset_control}>
            <label className={styles.reset_labels}>Current Password</label>
            <input
            className={styles.reset_input}
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.reset_control}>
          <label className={styles.reset_labels}>New Password</label>
          <input
          className={styles.reset_input}
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
          </div>
          <div>
          <button className={styles.reset_btn} type="submit">Reset Password</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ResetPass;
