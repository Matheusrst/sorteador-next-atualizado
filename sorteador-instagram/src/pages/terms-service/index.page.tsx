import { Funnel } from '@phosphor-icons/react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

export default function TermosDeUso() {
  return (
    <Flex h="100vh" bg="#0b0f18">
      <Box
        as="aside"
        h="97vh"
        w="64"
        mt="2"
        ml="2"
        bg="#191e24"
        p="5"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        alignItems="start"
        color="white"
      >
        <Flex alignItems="center" mb="5">
          <Funnel size={32} />
          <Text ml="2" fontSize="2xl" fontWeight="bold">
            <a href="/home-page">Sort App</a>
          </Text>
        </Flex>
        <VStack spacing="4" align="start">
          <Text as="a" href="#" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Historico de Sorteios
          </Text>
          <Text as="a" href="#" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Historico de Ganhadores
          </Text>
          <Text as="a" href="/account" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Minha Conta
          </Text>
          <Text as="a" href="/raffle-maker" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Sorteadores
          </Text>
        </VStack>
      </Box>
      <Flex flexGrow="1" p="10" flexDirection="column" justifyContent="center" alignItems="center">
        <Heading as="h1" color="white" mb="5" fontSize="3xl">
          Termos de uso
        </Heading>
        <Box
          bg="#2e2f32"
          p="5"
          borderRadius="8px"
          maxW="5xl"
          color="white"
          fontSize="lg"
          lineHeight="relaxed"
        >
          <Text>
            Estes são os termos de uso do nosso serviço. Por favor, leia
            cuidadosamente antes de utilizar o nosso aplicativo. Ao utilizar o
            aplicativo, você concorda em seguir estes termos e condições.
          </Text>
          <Text mt="4">
            1. O uso do aplicativo é permitido apenas para fins legais e
            legítimos.
          </Text>
          <Text mt="4">
            2. O usuário é responsável por todas as atividades realizadas no
            aplicativo através de sua conta.
          </Text>
          <Text mt="4">
            3. A reprodução não autorizada de qualquer conteúdo disponível no
            aplicativo é proibida.
          </Text>
          {/* Adicione mais termos conforme necessário */}
        </Box>
      </Flex>
    </Flex>
  );
}
