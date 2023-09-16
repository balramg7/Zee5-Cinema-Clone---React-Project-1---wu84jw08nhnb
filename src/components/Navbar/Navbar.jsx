import React from "react";
import styles from "./Navbar.module.css";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLanguage } from "react-icons/hi2";
import { IoReorderThree } from "react-icons/io5";
import {TbGridDots} from 'react-icons/tb';
import { Link } from "react-router-dom";
import Login from "../Registration/Login.jsx";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="\images\zee5_logo1.jpeg"
          alt="zee5 logo"
          style={{
            width: "100px",
            height: "55px",
            opacity: "revert-layer",
          }}
        />
      </div>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}><Link to='/home' style={{textDecoration: 'none', color:'white'}}>Home</Link></li>
        <li className={styles.nav_item}>TV Shows</li>
        <li className={styles.nav_item}>Movies</li>
        <li className={styles.nav_item}>Premium</li>
        <li className={styles.nav_item}>Webseries</li>
        <li className={styles.nav_item}><TbGridDots/></li>
      </ul>
      <div className={styles.search_bar}>
        <FiSearch color="white" />
        <input type="text" placeholder="Search for Movies,Shows,Channels etc" color="white" />
      </div>
      <div className={styles.user_actions}>
        <button className={styles.Lang_btn}>
          <HiOutlineLanguage />
        </button>
        <button className={styles.plan_btn}>Buy Plan</button>
        <button className={styles.login_btn}><Link to='/login' style={{textDecoration:'none'}}>Login</Link></button>
        <button className={styles.last_btn}>
          <IoReorderThree />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
