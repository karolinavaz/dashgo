import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useForm } from "react-hook-form";


//imperativa vc declarativa
//imperativa dizer o que deve acontecer com uma ação
//declarativa são funções automaticas

//melhores bibliotecas de form react
//formik (mas api é muito engessada)
//react-hook-form 
//unform (formulários que preocupa mais com performance)

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      mt="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius={"full"}
    >
      <Input
        ref={searchInputRef}
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
