import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import TransactionHistory from "./pages/TransactionHistory/transactionhistory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/profile";
import TransactionInfo from "./pages/TransactionInfo/transactioninfo";
import NavbarExtension from "./components/NavbarExtension.tsx";
import SubLink from "./components/SubLink";
import {
  Button,
  ChakraProvider,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Slide } from "@chakra-ui/react";
import { useRef } from "react";
import { accSubLinks, investSublinks, aboutSubLinks } from "./data/data";
import SignUp from "./pages/SignUp/SignUp";
import theme from "./theme";
import Login from "./pages/Login/Login";
import TransactionForm from "./pages/TransactionForm/TransactionForm";
// import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
// const theme = extendTheme({
//   colors: {
//     brand: {
//       100: "#f7fafc",
//       // ...
//       900: "#1a202c",
//     },
//   },
//   initialColorMode: "light",
//   useSystemColorMode: false,
// });

export default function App() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // useEffect(() => {
  //   return () => {
  //     toggleColorMode();
  //   };
  // }, []);

  const [whichToHover, setWhichToHover] = useState("none");
  const [whichSelected, setWhichSelected] = useState("none");

  let maboutUsSublinks = aboutSubLinks.map(({ mainT, subT, goTo }) => {
    return (
      <SubLink
        key={mainT}
        mainT={mainT}
        subT={subT}
        goTo={goTo}
        setWhichSelected={setWhichSelected}
        tag="about"
      />
    );
  });

  let maccSubLinks = accSubLinks.map(({ mainT, subT, goTo }) => {
    return (
      <SubLink
        key={mainT}
        mainT={mainT}
        subT={subT}
        goTo={goTo}
        setWhichSelected={setWhichSelected}
        tag="account"
      />
    );
  });

  let minvestSublinks = investSublinks.map(({ mainT, subT, goTo }) => {
    return (
      <SubLink
        key={mainT}
        mainT={mainT}
        subT={subT}
        goTo={goTo}
        setWhichSelected={setWhichSelected}
        tag="invest"
      />
    );
  });
  // const [whichToShowHover, setWhichToShowHover] = useState("none");
  const mRef = useRef(null);
  // const { isOpen, onToggle } = useDisclosure();
  // return <TransactionHistory />;
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <>
          <Navbar
            whichSelected={whichSelected}
            setWhichToHover={setWhichToHover}
            setWhichSelected={setWhichSelected}
            whichToHover={whichToHover}
            // temp={onToggle}
          />

          <div className="pt-[87px] bg-[#F9D3BD]">
            {/* <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}> */}
            {whichToHover != "none" && (
              <NavbarExtension
                subLinks={
                  whichToHover == "account"
                    ? maccSubLinks
                    : whichToHover == "about"
                    ? maboutUsSublinks
                    : minvestSublinks
                }
                setWhichSelected={setWhichSelected}
                setWhichToHover={setWhichToHover}
              />
            )}

            {/* </Slide> */}
            {/* <NavbarExtension subLinks={accSubLinks} /> */}
            {/* <NavbarExtension subLinks={investSublinks} /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/account/transactions"
                element={
                  <TransactionHistory setWhichSelected={setWhichSelected} />
                }
              />
              <Route
                path="/account/transfer"
                element={
                  // <TransactionInfo setWhichSelected={setWhichSelected} />
                  <TransactionForm />
                }
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/workInProgress" element={<> </>} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </ChakraProvider>
  );
}
