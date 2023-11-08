import React from "react";
import styles from "./Navbar.module.css";
import { HiOutlineLanguage } from "react-icons/hi2";
import { IoReorderThree } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { BiCrown } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import {
  IconButton,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

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

  const goToTheHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setUserAuthenticated(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src={logo}
          title="ZEE5 Logo"
          alt="ZEE5 Logo"
          width="32px"
          height="32px"
        />
      </div>
      <ul className={styles.nav_list}>
        <li onClick={goToTheHome} className={styles.nav_item}>
          Home
        </li>
        <li className={styles.nav_item}>TV Shows</li>
        <li className={styles.nav_item}>Movies</li>
        <li className={styles.nav_item}>Premium</li>
        <li className={styles.nav_item}>Webseries</li>
        <li className={styles.nav_item}>
          <TbGridDots />
        </li>
      </ul>
      <Stack display="flex" flexDirection="row" gap="45px" alignItems="center" marginLeft="30px" position="relative">
        <Stack>
          <InputGroup>
            <Input
              type="text"
              height='30px'
              placeholder="Search for Movies,Shows,Channels etc"
              // _placeholder={{  color: "black"}}
              width="300px"
              left="100px"
            />
          </InputGroup>
        </Stack>
        <button className={styles.Lang_btn}>
          <HiOutlineLanguage />
        </button>
        <button className={styles.plan_btn}>
          <BiCrown style={{fontSize: "20px"}} />
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
              <MenuList
                border="none"
                bg="black"
                width="200px"
                zIndex="2"
                color="white"
              >
                <MenuItem
                  bg="black"
                  minH="48px"
                  onClick={goToTheProfileSetting}
                >
                  Profile Setting
                </MenuItem>
                <MenuItem bg="black" minH="48px" onClick={goToTheWatchlist}>
                  Watchlist
                </MenuItem>
                <MenuItem bg="black" minH="48px">
                  Term and Condition
                </MenuItem>
                <MenuItem bg="black" minH="48px">
                  Subscription
                </MenuItem>
                <MenuItem bg="black" minH="48px">
                  Policy
                </MenuItem>
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
      </Stack>
    </nav>
  );
};

export default Navbar;
