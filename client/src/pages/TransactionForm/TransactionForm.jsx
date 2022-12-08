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
import { useNavigate } from "react-router-dom";
import { cust_email_id, is_authenticated } from "../../data/constants";

import { transfer } from "../../api";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const TransactionForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  const handleSubmit = async (e) => {
    setShouldShowLoader(true);
    const { data } = await transfer({
      receiver_email: e.target.email.value,
      sender_email: localStorage.getItem(cust_email_id),
      amount: e.target.amount.value,
    });
    console.log("data");
    console.log(data);

    setShouldShowLoader(false);
    if (data["trans_status"] == 1) {
      window.alert("Transaction Successful!");
    } else {
      window.alert("Transaction Failed!\nInsufficient funds");
    }
  };

  console.log(localStorage.getItem(is_authenticated));
  console.log(localStorage.getItem("is_authenticated"));

  if (localStorage.getItem(is_authenticated) != "true") {
    navigate("/login");
  }

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
        {/* <Avatar bg="#CD5511" /> */}
        <Heading color="#CD5511">Transfer Money</Heading>
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
              <FormControl>
                <FormLabel variant={"contained"}>Beneficiary Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="email address"
                  style={{
                    width: "100%",
                    margin: 0,
                  }}
                />
                <FormHelperText>
                  Email address of the receiver of money
                </FormHelperText>
              </FormControl>

              {/* <FormControl> */}
              <FormLabel variant={"contained"}>Amount</FormLabel>
              <Input
                type="number"
                name="amount"
                placeholder="1000"
                borderColor={"#CD5511 "}
              />
              {/* </FormControl> */}
              {/* <FormLabel variant={"contained"}>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                style={{
                  
                  width: "100%",
                }}
              />
              <FormLabel variant={"contained"}>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="confirm password"
                style={{
                  
                  width: "100%",
                }}
              /> */}

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
                {shouldShowLoader ? <Spinner /> : "Transfer"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      {/* <Box>
        Already have an account?{" "}
        <Link color="#CD5511" href="/login">
          Login
        </Link>
      </Box> */}
    </Flex>
  );
};

export default TransactionForm;
