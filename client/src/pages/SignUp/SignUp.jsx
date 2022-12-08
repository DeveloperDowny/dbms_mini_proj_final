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
  Spinner,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { signUp } from "../../api";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    console.log("easy");
    console.log(e);

    const hashedPassword = await bcrypt.hash(e.target.password.value, 12);
    const { data } = await signUp({
      cust_email_id: e.target.cust_email.value,
      cust_name: e.target.cust_name.value,
      balance: 10000,
      encoded_password: hashedPassword,
    });
    console.log("result");
    console.log(data);

    if (data["status"] === 1) {
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
        <Heading color="#CD5511">Create Account</Heading>
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
              <FormLabel variant={"contained"}>Name</FormLabel>
              <Input
                name="cust_name"
                type="text"
                placeholder="name"
                style={{
                  width: "100%",
                }}
              />
              <FormControl>
                <FormLabel variant={"contained"}>Email</FormLabel>
                <Input
                  name="cust_email"
                  type="email"
                  placeholder="email address"
                  style={{
                    width: "100%",
                    margin: 0,
                  }}
                />
                <FormHelperText>
                  This email will be used as accout id for future transactions
                </FormHelperText>
              </FormControl>
              <FormLabel variant={"contained"}>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="password"
                style={{
                  width: "100%",
                }}
              />
              <FormLabel variant={"contained"}>Confirm Password</FormLabel>
              <Input
                name="confirm_password"
                type="password"
                placeholder="confirm password"
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
                {shouldShowLoader ? <Spinner /> : "Sign Up"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have an account?{" "}
        <Link color="#CD5511" href="/login">
          Login
        </Link>
      </Box>
    </Flex>
  );
};

export default SignUp;
