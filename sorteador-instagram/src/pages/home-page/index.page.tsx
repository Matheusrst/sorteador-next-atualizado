import { Funnel } from '@phosphor-icons/react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex h="100%" bg="#0b0f18">
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
        <Flex alignItems="center" mb="5" color="white">
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
          <Text as="a" href="/terms-service" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Termos de Serviço
          </Text>
          <Text as="a" href="/raffle-maker" className="block p-2 rounded hover:bg-[#2c3e50] focus:bg-[#34495e]">
            Sorteadores
          </Text>
        </VStack>
      </Box>
      <Flex flexGrow="1" p="10" flexDirection="column" gap="5">
        <Box
          bg="#122233"
          p="5"
          borderRadius="8px"
          boxShadow="md"
          color="white"
        >
          <Heading as="h2" fontSize="xl" mb="2">
            Minha Conta
          </Heading>
          <Text fontSize="lg" color="#bbbbbb" mb="4">
            Veja todos os Detalhes Da sua conta
          </Text>
          <Text as="a" href="/account" fontSize="sm" fontWeight="bold" color="#bbbbbb" _hover={{ color: 'white' }}>
            Ver Todos &rarr;
          </Text>
        </Box>
        <Box
          bg="#122233"
          p="5"
          borderRadius="8px"
          boxShadow="md"
          color="white"
        >
          <Heading as="h2" fontSize="xl" mb="2">
            Historico de Sorteios
          </Heading>
          <Text fontSize="lg" color="#bbbbbb" mb="4">
            Veja todos os sorteios realizados
          </Text>
          <Text as="a" href="#" fontSize="sm" fontWeight="bold" color="#bbbbbb" _hover={{ color: 'white' }}>
            Ver Todos &rarr;
          </Text>
        </Box>
        <Box
          bg="#122233"
          p="5"
          borderRadius="8px"
          boxShadow="md"
          color="white"
        >
          <Heading as="h2" fontSize="xl" mb="2">
            Historico de Ganhadores
          </Heading>
          <Text fontSize="lg" color="#bbbbbb" mb="4">
            Veja todos os ganhadores dos sorteios
          </Text>
          <Text as="a" href="#" fontSize="sm" fontWeight="bold" color="#bbbbbb" _hover={{ color: 'white' }}>
            Ver Todos &rarr;
          </Text>
        </Box>
        <Box
          bg="#122233"
          p="5"
          borderRadius="8px"
          boxShadow="md"
          color="white"
        >
          <Heading as="h2" fontSize="xl" mb="2">
            Termos de uso
          </Heading>
          <Text fontSize="lg" color="#bbbbbb" mb="4">
            Veja todos os termos de uso e regras para os sorteios
          </Text>
          <Text as="a" href="/terms-service" fontSize="sm" fontWeight="bold" color="#bbbbbb" _hover={{ color: 'white' }}>
            Ver Todos &rarr;
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
