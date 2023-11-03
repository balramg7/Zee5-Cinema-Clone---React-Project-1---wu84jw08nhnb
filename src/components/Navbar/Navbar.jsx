import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLanguage } from "react-icons/hi2";
import { IoReorderThree } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { BiCrown } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const Navbar = ({ userAuthenticated, setUserAuthenticated }) => {
  const navigate = useNavigate();

  const goToTheSignIn = () => {
    navigate("/signIn");
  };

  const goToTheWatchlist = () => {
    navigate("/watchList");
  };

  const goToTheProfileSetting = () => {
    navigate("/userProfile");
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setUserAuthenticated(null);
  };

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
        <li className={styles.nav_item}>Home</li>
        <li className={styles.nav_item}>TV Shows</li>
        <li className={styles.nav_item}>Movies</li>
        <li className={styles.nav_item}>Premium</li>
        <li className={styles.nav_item}>Webseries</li>
        <li className={styles.nav_item}>
          <TbGridDots />
        </li>
      </ul>
      <div className={styles.search_bar}>
        <FiSearch color="white" />
        <input
          type="text"
          placeholder="Search for Movies,Shows,Channels etc"
          color="white"
        />
      </div>
      <div className={styles.user_actions}>
        <button className={styles.Lang_btn}>
          <HiOutlineLanguage />
        </button>

        <button className={styles.plan_btn}>
          <BiCrown />
          Buy Plan
        </button>

        {userAuthenticated ? (
          <>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<BsFillPersonFill />}
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
                fontSize="30px"
                background="transparent"
                color="white"
                border="none"
                marginLeft="10px"
                marginRight="10px"
              />
              <MenuList bg="black" width="200px" zIndex="2" color="white">
                <MenuItem bg="black" minH="48px" onClick={goToTheProfileSetting}>
                  Profile Setting
                </MenuItem>
                <MenuItem bg="black" minH="48px" onClick={goToTheWatchlist}>Watchlist</MenuItem>
                <MenuItem bg="black" minH="48px">Term and Condition</MenuItem>
                <MenuItem bg="black" minH="48px">Subscription</MenuItem>
                <MenuItem bg="black" minH="48px">Policy</MenuItem>
              </MenuList>
            </Menu>
            <button className={styles.login_btn} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/signIn">
            <button className={styles.login_btn} onClick={goToTheSignIn}>
              LogIn
            </button>
          </Link>
        )}

        <button className={styles.last_btn}>
          <IoReorderThree />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
