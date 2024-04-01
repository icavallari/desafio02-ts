import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo"
import { useContext, useEffect, useState } from "react";
import { User } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { getAllLocalStorage } from "../services/storage";

export const Conta = () => {

    const [user, setUser] = useState<null | User>();
    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(AppContext)

    if ( !isLoggedIn ){
        navigate('/')
    }

    useEffect(() => {

        const storage = getAllLocalStorage()        
        setUser(JSON.parse(storage!))

    }, []);

    if ( user && id !== user.id ){
        navigate('/')
    }    

    const dataHora = () => {
        const data = new Date();
        return `${data.getDay()} / ${data.getMonth()} / ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
    }    

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                { user === undefined || user === null ?
                (
                    <Center>
                        <Spinner size="xl" color="white"/>
                    </Center>
                ):
                (
                    <>
                    <CardInfo 
                        title={`Bem vindo ${user?.name}!`} 
                        content={dataHora()} />

                    <CardInfo 
                        title="Informações da conta" 
                        content={`R$ ${user?.balance.toString()}`} />
                    </>
                )}                            
            </SimpleGrid>
        </Center>
    )
}