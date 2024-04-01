import { Box, Text } from "@chakra-ui/react"

interface ICardInfo{
    title: string,
    content?: string,
}

export const CardInfo = ({ title, content } : ICardInfo) => {
    return (
        <Box 
            backgroundColor='white' 
            minHeight='15vh' 
            width={320} 
            padding={8}
            borderRadius={25}
            >
            <Text fontSize="large" fontWeight="700">{title}</Text>
            <Text>{content}</Text>
        </Box>
    )
}