import { Box, Center, Input } from "@chakra-ui/react";
import { Button } from "../components/Button/Button";

interface ICard {
  event: () => void;
}

export const Card = ({ event }: ICard) => {
  return (
    <Center>
      <Box
        backgroundColor="#FFFFFF"
        borderRadius="25px"
        padding="15px"
        width="400px">
        <Center mb="15px">
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" mb="15px" />
        <Input placeholder="password" />
        <Center mt="10px">
          <Button title="Faça o Login" click={event} />
        </Center>
      </Box>
    </Center>
  );
};
