import { Button as Btn } from "@chakra-ui/react";

interface IButtonProps {
  title: string;
  click: () => void;
}

export const Button = ({ title, click }: IButtonProps) => {
  return (
    <Btn
      onClick={click}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px">
      {title}
    </Btn>
  );
};
