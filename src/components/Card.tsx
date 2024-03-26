import { Box, Center, Input } from "@chakra-ui/react";
import { Button } from "../components/Button/Button";
import { useState, useEffect } from "react";

import { User, api } from "../api";

interface ICard {
  event: (email: string) => Promise<void>;
}

export const Card = ({ event }: ICard) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<null | User>();

  useEffect(() => {
    const getData = async () => {
      const data: any | User = await api;
      setUser(data);
    };

    getData();
  });

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
        <Input
          placeholder="email"
          mb="15px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input placeholder="password" />
        <Center mt="10px">
          <Button title="Faça o Login" click={() => event(email)} />
        </Center>
      </Box>
    </Center>
  );
};
