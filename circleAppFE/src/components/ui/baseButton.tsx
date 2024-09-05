import { Button } from "@chakra-ui/react";

interface ButtonLabel extends JSX.Element {
  label: string;
}

export function BaseButton({ label }: ButtonLabel): JSX.Element {
  return (
    <Button
      size="md"
      height="44px"
      width="412px"
      border="2px"
      borderRadius="full"
      color="white"
      bgColor="brand.green"
    >
      {label}
    </Button>
  );
}
