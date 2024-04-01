import { useContext } from "react";
import "./Header.css";
import { AppContext } from "../AppContext";
import { Box, Button, Center, Flex, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex className="header">
      <Box>
        <Center>
          <div>Bem vindo ao Dio Bank</div>
        </Center>
      </Box>
      <Spacer/>
      { isLoggedIn && 
        <Button onClick={() => logout}>
          Sair
        </Button> 
      }
    </Flex>
  );
};
