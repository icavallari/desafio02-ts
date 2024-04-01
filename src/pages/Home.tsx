import { Box, Button, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

export const Home = () => {
    const [ email, setEmail] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)

    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)
        if(!loggedIn){
            alert('Email inválido')        

        } else {
            setIsLoggedIn(true)
            navigate('/conta/1')
        }
    }

    return (
        <Box margin="25px">
            <Card>

                <Center mb="15px">
                    <h1>Faça o login</h1>
                </Center>

                <Input
                    placeholder="email"
                    mb="15px"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <Input placeholder="password" />

                <Center mt="10px">
                    <Button onClick={() => validateUser(email)}>
                        Faça o Login
                    </Button>
                </Center>

            </Card>
        </Box>
    )
}