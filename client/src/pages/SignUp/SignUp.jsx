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

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

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
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              {/* <div className="flex"> */}
              <FormControl>
                <FormLabel variant={"contained"}>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="email address"
                  style={{
                    // display: "flex",
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
                type="password"
                placeholder="password"
                style={{
                  // display: "flex",
                  width: "100%",
                }}
              />
              <FormLabel variant={"contained"}>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="confirm password"
                style={{
                  // display: "flex",
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
                Sign Up
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
