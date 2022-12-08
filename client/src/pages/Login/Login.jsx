import { useState } from "react";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Center,
  FormLabel,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import bcrypt from "bcryptjs";
import { logIn } from "../../api";
import { useNavigate } from "react-router-dom";
import { cust_acc_num } from "../../data/constants";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    console.log("easy");
    console.log(e);

    const hashedPassword = e.target.password.value;
    const result = await logIn({
      cust_email_id: e.target.email.value,
      encoded_password: hashedPassword,
    });
    console.log("result");
    console.log(result);

    if (result["data"]["status"] === 1) {
      console.log("status 1");
      localStorage.setItem("is_authenticated", "true");
      localStorage.setItem("cust_email_id", e.target.email.value);
      localStorage.setItem(cust_acc_num, result["data"]["acc_num"]);

      console.log(localStorage.getItem("cust_email_id"));
      console.log(localStorage.getItem("sfd"));
      navigate("/");
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="calc(100vh - 87px)"
      backgroundColor="#F9D3BD"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="#CD5511" />
        <Heading color="#CD5511">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              e.preventDefault();
            }}
          >
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              {/* <div className="flex"> */}

              <FormLabel variant={"contained"}>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="email address"
                style={{
                  width: "100%",
                }}
              />
              <FormLabel variant={"contained"}>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="password"
                style={{
                  width: "100%",
                }}
              />

              {/* </div> */}
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                color="#ffffff"
                style={{
                  background: "#CD5511",
                }}
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="#CD5511" href="/signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
