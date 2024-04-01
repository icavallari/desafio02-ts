import { Box, Button, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useContext, useEffect, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage, getAllLocalStorage } from "../services/storage";

export const Home = () => {
    const [ email, setEmail] = useState<string>('')
    const [ senha, setSenha] = useState<string>('')

    const { setIsLoggedIn } = useContext(AppContext)

    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const resp = await login(email, senha)
        
        if(resp.message){
            return alert(resp.message)
        } 

        setIsLoggedIn(true)
        changeLocalStorage(resp.user!)

        navigate(`/conta/${resp.user!.id}`)
        
    }

    useEffect(()=> {

        const storage = getAllLocalStorage()        
        if(storage){
            setIsLoggedIn(true)
            const user = JSON.parse(storage!)
            navigate(`/conta/${user!.id}`)
        }            

    })

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

                <Input 
                    placeholder="password"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)} />

                <Center mt="10px">
                    <Button onClick={() => validateUser(email)}>
                        Faça o Login
                    </Button>
                </Center>

            </Card>
        </Box>
    )
}
