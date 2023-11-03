import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("phone", phone);

    try {
      const response = await axiosInstance.patch("/user/updateme", formData);
      setSuccessMessage("Profile updated successfully");
    } catch {
      setErrorMessage("Error updating profile");
    }
  };

  const handleUpdateProfileImage = async () => {
    const formData = new FormData();
    formData.append("profileImage", profileImage);

    try {
      const response = await axiosInstance.patch(
        "/user/updateProfileImage",
        formData
      );
      setSuccessMessage("Profile image updated successfully");
    } catch (error) {
      setErrorMessage("Error updating profile image");
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== passwordConfirmation) {
      setPasswordError("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append("password", password);
    formData.append("newPassword", newPassword);

    try {
      const response = await axiosInstance.patch(
        "/user/changepassword",
        formData
      );
      setSuccessMessage("Password changed successfully");
    } catch (error) {
      setErrorMessage("Error changing password");
    }
  };
  return (
    <Card bg="white"  height="140vh" mt="5px" mr="310px" ml="300px" bgColor="skyblue">
      <CardHeader>
        <Heading color="blue" size="4xl" fontSize="40px" textAlign="center" mt="40px">
          User Profile and Settings
        </Heading>
      </CardHeader>
      <CardBody>
        <Heading as="h2" fontSize="30px" mb="56px" textAlign="center">
          Profile Information
        </Heading>
        <Stack
          divider={<StackDivider />}
          spacing={6}
          display="flex"
          flexDirection="column"
          justifyItems="center"
          pl="200px"
          pr="200px"
          m="40px"
        >
          <Input
            type="text"
            placeholder="Name"
            value={name}
            variant="filled"
            size="lg"
            onChange={(e) => setName(e.target.value)}
            p="10px"
            borderRadius="15px"
            border="none"
          />
          <Input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            variant="filled"
            size="md"
            p="10px"
            borderRadius="15px"
            border="transparent"
          />
          <Input
            type="text"
            placeholder="Phone"
            value={phone}
            variant="filled"
            size="md"
            borderRadius="15px"
            border="transparent"
            p="10px"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button
            textAlign="center"
            fontSize="16px"
            borderRadius="15px"
            border="transparent"
            width="150px"
            ml="250px"
            mt="9"
            onClick={handleUpdateProfile}
          >
            Update Profile
          </Button>
        </Stack>
        <Heading as="h2" fontSize="30px" mb="40px" textAlign="center">
          Change Profile Image
        </Heading>

        <Stack
          divider={<StackDivider />}
          spacing={6}
          display="flex"
          flexDirection="row"
          justifyItems="center"
          pl="250px"
          pr="300px"
          m="40px"
          gap="6px"
        >
          <Input
            type="text"
            border="none"
            accept=".png"
            borderRadius="15px"
            p="7px"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
          <Button borderRadius="15px" border="none" onClick={handleUpdateProfileImage}>
            Update Profile Image
          </Button>
        </Stack>
        <Heading as="h2" fontSize="30px" mb="40px" textAlign="center">
          Change Password
        </Heading>

        <Stack
          divider={<StackDivider />}
          spacing={6}
          display="flex"
          flexDirection="column"
          justifyItems="center"
          pl="280px"
          pr="280px"
          m="40px"
        >
          <Input
            type="password"
            placeholder="Current Password"
            size="md"
            borderRadius="15px"
            // border="transparent"
            p="10px"
            border="none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="New Password"
            size="md"
            borderRadius="15px"
            border="transparent"
            p="10px"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm New Password"
            size="md"
            borderRadius="15px"
            border="transparent"
            p="10px"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <Text color="red" fontSize="18px" className="error-message">{passwordError}</Text>
          <Button
            textAlign="center"
            fontSize="16px"
            borderRadius="15px"
            border="transparent"
            width="150px"
            ml="100px"
            mt="4"
            onClick={handleChangePassword}
          >
            Change Password
          </Button>
        </Stack>

        {successMessage && <Heading textAlign="center" className="success-message">{successMessage}</Heading>}
        {errorMessage && <Heading textAlign="center" color="red" className="error-message">{errorMessage}</Heading>}
      </CardBody>
    </Card>
  );
};

export default UserProfile;
